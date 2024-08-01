import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { authUser } = useAuthContext();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='px-4 py-2 mb-2 mt-3 mx-4 flex items-center justify-between border-2 border-gray-300 rounded-2xl shadow-xl cursor-pointer hover:shadow-3xl transition-all duration-300'>
						<div className='flex flex-col items-center'>
							<div className='relative w-9 rounded-full'>
								<img src={authUser.profilePic} alt='user avatar' className='rounded-full' />
								<span className='absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full'></span>
							</div>
							<span className='text-gray-700 font-bold mt-2 text-xs'>{authUser.fullName}</span>
						</div>

						<span className='label-text text-gray-700 font-bold text-3xl'>↹</span>

						<div className='flex flex-col items-center'>
							<div className='relative w-9 rounded-full'>
								<img src={selectedConversation.profilePic} alt='user avatar' className='rounded-full' />
								<span className='absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full'></span>
							</div>
							<span className='text-gray-700 font-bold mt-2 text-xs'>{selectedConversation.fullName}</span>
						</div>
					</div>

					<div className="border-b-2 border-gray-400"></div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

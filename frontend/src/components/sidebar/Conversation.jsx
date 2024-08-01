import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer transform hover:scale-95 transition-all duration-300
                ${isSelected ? "bg-blue-600 text-white" : "hover:bg-blue-600"}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className={`font-bold ${isSelected ? "text-white" : "text-gray-600"} group-hover:text-white`}>{conversation.fullName}</p>
                        <span className={`text-xl ${isSelected ? "text-white" : "text-gray-600"} group-hover:text-white`}>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='my-0 py-0 h-1' />}
        </>
    );
};

export default Conversation;

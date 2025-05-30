import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='w-full md:w-64 input input-bordered rounded-full bg-white border-gray-400 text-gray-600 px-3 py-2 text-sm md:text-base'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type='submit'
				className='btn btn-circle text-blue-500 hover:text-white hover:bg-blue-500 bg-white border-gray-400 transform transition-transform duration-300 hover:scale-95 w-10 h-10 flex items-center justify-center'
			>
				<IoSearchSharp className='w-5 h-5' />
			</button>
		</form>
	);
};

export default SearchInput;

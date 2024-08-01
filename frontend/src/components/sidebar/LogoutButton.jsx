import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-2 border-t-2 border-gray-300'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer transform transition-transform duration-300 hover:scale-95 mt-2' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;

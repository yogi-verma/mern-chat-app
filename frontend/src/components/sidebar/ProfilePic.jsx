import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex flex-col sm:flex-row items-center bg-blue-600 shadow-2xl border-none mb-3 p-3 rounded-2xl hover:shadow-lg cursor-pointer transform hover:scale-95 transition-all duration-300'>
            <div className='relative mb-3 flex-shrink-0'>
                <div className='w-9 md:w-9 md:h-9 rounded-full overflow-hidden'>
                    <img src={authUser.profilePic} alt='user avatar' className='object-cover w-full h-full' />
                </div>
                <span className='absolute bottom-0 right-0 block w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 border-white rounded-full'></span>
            </div>

            <div className='flex flex-col flex-1 ml-4 text-center sm:text-left'>
                <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-between'>
                    <p className='font-bold text-gray-300 text-sm sm:text-base md:text-lg'>
                        You ({authUser.fullName})
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

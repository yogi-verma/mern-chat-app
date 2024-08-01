
import { useAuthContext } from "../../context/AuthContext";



const Profile = () => {
    const { authUser } = useAuthContext();
    return (
        <>
            <div className='flex items-center border-2 border-gray-300 mb-3 p-3 rounded-2xl shadow-xl cursor-pointer transform hover:scale-95 hover:shadow-3xl transition-all duration-300'>
                <div className='avatar mb-3'>
                    <div className='w-12 rounded-full'>
                        <img src={authUser.profilePic} alt='user avatar' />
                    </div>
                    <span className='absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full'></span>
                </div>

                <div className='flex flex-col flex-1 ml-4'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-600'>You ({authUser.fullName})</p>
                    </div>
                </div>
            </div>

        </>
    );
};



export default Profile;



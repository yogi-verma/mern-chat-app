import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
// import logo from "./iMessage-icon.png";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex items-center justify-center min-h-screen px-4'>
			<div className='flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto'>
				<div className='flex flex-col items-start justify-start mr-0 md:mr-10 mb-6 md:mb-0 w-full md:w-1/2'>
							<span className='text-blue-500 text-4xl md:text-5xl ml-0 font-extrabold text-center'>ChatFusion</span>
				
					<span className='text-xl md:text-3xl font-semibold text-gray-500 mt-4 ml-0 md:ml-1'>
						Welcome to ChatFusion
					</span>
					<span className='text-base md:text-xl font-semibold text-gray-500 mt-2 ml-0 md:ml-1'>
						Connect with your friends and the world around you on ChatFusion
					</span>
				</div>


				<div className='w-full md:w-1/2 p-6 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-300'>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type='text'
								placeholder='Enter username'
								className='w-full input h-11 bg-white my-4 border border-gray-400'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div>
							<input
								type='password'
								placeholder='Enter Password'
								className='w-full input h-11 bg-white my-4 border border-gray-400'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div>
							<button
								className='btn btn-block btn-md mt-2 bg-blue-600 hover:bg-blue-800 text-white border-0 transform transition-transform duration-300 hover:scale-95'
								disabled={loading}
							>
								{loading ? <span className='loading loading-spinner'></span> : "Login"}
							</button>
						</div>

						<div className='my-5 border-t-2 border-gray-300'></div>

						<div className='flex justify-center'>
							<Link
								to='/signup'
								className='btn btn-md mt-1 bg-green-600 hover:bg-green-800 text-white w-full md:w-4/5 border-0 transform transition-transform duration-300 hover:scale-95'
							>
								{"Don't"} have an account?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
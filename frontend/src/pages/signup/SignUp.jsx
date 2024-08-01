import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { IoLogoWechat } from "react-icons/io5";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-w-96 mx-auto">
      <div className="md:w-1/2 p-6 flex flex-col items-center md:items-start">
        <div className="flex items-center text-blue-500 text-4xl md:text-5xl font-extrabold">
          <IoLogoWechat className="mr-2" />
          <span>ChatFusion</span>
        </div>
        <span className="text-base md:text-xl font-semibold text-gray-500 mt-2">
          Connect with your friends and the world around you on ChatFusion
        </span>
      </div>

      <div className="w-full md:w-1/2 p-6 rounded-2xl shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-300">
        {/* <h1 className="text-3xl font-bold text-gray-500 text-center md:text-left">
          Welcome to <span className="text-blue-600">ChatFusion</span>
        </h1> */}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-11 bg-white mt-4 border border-gray-400 text-gray-700"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-11 bg-white mt-4 border border-gray-400 text-gray-700"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-11 bg-white mt-4 border border-gray-400 text-gray-700"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-11 bg-white my-4 border border-gray-400 text-gray-700"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <div>
            <button
              className="btn btn-block btn-md mt-2 bg-blue-600 hover:bg-blue-800 text-white border-0 transform transition-transform duration-300 hover:scale-95"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>

          <div className="mt-5 mb-3 border-t-2 border-gray-300"></div>

          <div>
            <span className="text-gray-900 text-md font-semibold">Already have an account?</span>
            <Link
              to={"/login"}
              className="text-md hover:underline cursor-pointer inline-block ml-1 text-semibold text-blue-600"
            >
              Login->
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

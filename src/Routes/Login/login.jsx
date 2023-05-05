import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-full h-screen shadow-md flex items-center justify-center bg-transparent">
      <div className="w-80 bg-white rounded-lg">
        <div className="flex items-center justify-between p-2">
          <span className="text-lg">Login with</span>
          <p className="cursor-progress hover:shadow:md">
            <AiOutlineClose />
          </p>
        </div>
        <div className="p-2">
          <ul className="flex justify-center items-center gap-[2rem] rounded-full ">
            <li className="p-2 text-5xl bg-grey-800 text-black rounded-full">
              <a href="Github">
                <AiFillGithub />
              </a>
            </li>
            <li className=" p-3 text-3xl bg-red-600 text-white rounded-full">
              <a href="Google">
                <BsGoogle />
              </a>
            </li>
            <li className="p-3 text-3xl bg-blue-800 text-white rounded-full">
              <a href="Facebook">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-100 flex-row items-center p-2">
          <hr className="w-3/6" />
          <p className="text-xl p-4">or</p>
          <hr className="w-3/6" />
        </div>
        <div>
          <form action="form">
            <div className="p-2 flex items-center justify-center">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-4 px-2 py-2  border-2 border-neutral-800 rounded-sm"
              />
            </div>
            <div className="p-2 flex items-center justify-center">
              <input
                type="Password"
                placeholder="Password"
                className="w-full p-4 px-2 py-2  border-2 border-neutral-800 rounded-sm"
              />
            </div>
            <div className="p-2 flex items-center justify-center ">
              <button className="w-full p-3 text-white bg-sky-400 hover:bg-sky-500 rounded-sm">
                LOGIN
              </button>
            </div>
            <div className="flex border-2 border-inherit p-5 m-3 px-2 border-sm">
              <input type="checkbox" className="w-12 border-neutral-800" />
              <p className="flex px-2">I'am not a robot</p>
            </div>
            <div className="flex items-center justify-center flex-col p-2">
              <p>
                <span className="opacity-40"> Looking to </span>
                <a href="1" className="text-blue-600">
                  create an account ?
                </a>
              </p>
              <p>
                <a href="1" className="text-blue-600">
                  Forget Password ?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
<BsGoogle />;
<AiFillGithub />;

export default Login;

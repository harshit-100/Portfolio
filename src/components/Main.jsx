import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://unsplash.com/photos/0qnRfgnZIsI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMjI0Mjcw&force=true"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Harshit Sharma
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Devloper", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Freelancer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://twitter.com/Harshit971494"
              className="cursor-pointer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100005053563722"
              className="cursor-pointer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/sharmaharshit278/"
              className="cursor-pointer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-sharma22462/"
              className="cursor-pointer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/harshit-100"
              className="cursor-pointer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

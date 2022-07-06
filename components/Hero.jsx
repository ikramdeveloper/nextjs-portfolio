import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-primary"> Ikram</span>
          </h1>
          <h2 className="py-2 text-gray-700">A Full Stack Web Developer</h2>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Enthusiastic MERN Stack developer eager to contribute to team
            success through hard work, attention to detail and excellent
            organizational skills. Clear understanding of web development and
            training in JavaScript. Motivated to learn, grow and excel in
            Programming.
          </p>

          <section className="flex items-center justify-between max-w-sm m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ikramdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/ikramdeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </a>

            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiOutlineMail />
              </div>
            </Link>

            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Hero;

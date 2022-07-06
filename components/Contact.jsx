import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import images from "../assets";

const Contact = () => {
  const initialState = { name: "", email: "", phone: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((item) => item === null || item === "")) {
      alert("You need to fill all fields");
      return;
    }

    setFormData(initialState);
    setIsFormSubmitted(true);
  };
  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-7xl m-auto px-2 py-16 w-full">
        <p className="text-xl uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="grid md:grid-cols-5 md:gap-2 lg:gap-8">
          {/* left section */}
          <section className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <figure>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-500"
                  src={images.AboutImg}
                  alt="contact"
                />
              </figure>

              <article>
                <h2>Ikram Developer</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </article>

              <div>
                <p className="uppercase pt-8">Connect With Me</p>

                <div className="flex items-center justify-between py-4">
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
                </div>
              </div>
            </div>
          </section>

          {/* right section */}
          <section className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {isFormSubmitted ? (
                <div className="flex justify-center items-center">
                  <p>Thanks! It is just for testing purposes</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <article className="flex flex-col">
                      <label htmlFor="name" className="uppercase text-sm py-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </article>

                    <article className="flex flex-col">
                      <label htmlFor="phone" className="uppercase text-sm py-2">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </article>
                  </div>

                  <article className="flex flex-col">
                    <label htmlFor="email" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </article>

                  <article className="flex flex-col">
                    <label htmlFor="message" className="uppercase text-sm py-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </article>

                  <button
                    type="submit"
                    className="w-full p-4 bg-gray-800 text-gray-100 mt-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-primary" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;

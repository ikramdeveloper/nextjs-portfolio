import Link from "next/link";
import Image from "next/image";

import images from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen px-4 flex items-center py-16"
    >
      <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8">
        <article className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">I'm not your usual developer</p>

          <p className="py-2 text-gray-600">
            I have spent the last 12 years in the fire service working as a
            professional firefighter/paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline-cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </article>

        <figure className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={images.AboutImg} className="rounded-xl" alt="about" />
        </figure>
      </div>
    </section>
  );
};
export default About;

import Image from "next/image";
import images from "../assets";

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>

        <h2 className="py-4">What can I do?</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Html}
                  alt="html"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image src={images.Css} alt="css" width="64px" height="64px" />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Javascript}
                  alt="JavaScript"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>JavaScript</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.React}
                  alt="ReactJS"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>ReactJS</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Node}
                  alt="Node"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>NodeJS</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Mongo}
                  alt="Mongo"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>MongoDB</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.NextJS}
                  alt="NextJS"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>NextJS</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Typescript}
                  alt="Typescript"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>Typescript</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Tailwind}
                  alt="Tailwind"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwind</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Firebase}
                  alt="Firebase"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>Firebase</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Github}
                  alt="Github"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
            </article>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <article className="grid grid-cols-2 gap-4 justify-center items-center">
              <figure className="m-auto">
                <Image
                  src={images.Graphql}
                  alt="Graphql"
                  width="64px"
                  height="64px"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <h3>GraphQL</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

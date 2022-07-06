import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, image, tech, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-primary to=[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt={title}
      />
      <article className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{tech}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </article>
    </div>
  );
};
export default ProjectItem;

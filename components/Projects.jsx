import ProjectItem from "./ProjectItem";
import images from "../assets";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        <p className="text-xl tracking-widest uppercase text-primary">
          Projects
        </p>
        <h2>What have I built?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Chat App"
            image={images.Chatcord}
            tech="Node JS"
            url="/chat"
          />
          <ProjectItem
            title="Crypto Website"
            image={images.Crypto}
            tech="React JS"
            url="/crypto"
          />
          <ProjectItem
            title="Ecommerce Website"
            image={images.Ecommerce}
            tech="Next JS"
            url="/ecommerce"
          />
          <ProjectItem
            title="Social Media Website"
            image={images.Social}
            tech="React JS"
            url="/social"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;

import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations"></SectionTitle>
      <div className="grid py-16 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project}></ProjectsCard>;
        })}
      </div>
    </section>
  );
};
export default Projects;

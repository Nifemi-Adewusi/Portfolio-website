/* eslint-disable no-unused-vars */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
// eslint-disable-next-line react/prop-types
const ProjectsCard = ({ url, github, img, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        className="w-full object-cover rounded-t-lg h-80"
        src={img}
        alt={title}
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
      </div>
      <div className="mt-4 flex gap-x-10 pl-6">
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithubSquare className="h-8 w-8  text-slate-500 hover:text-black duration-300"></FaGithubSquare>
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300"></TbWorldWww>
        </a>
      </div>
    </article>
  );
};
export default ProjectsCard;

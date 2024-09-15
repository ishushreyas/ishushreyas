import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="br-2 m-1 p-1 bg-2 hv:cd-1">
      <Link className="td-0 c-0" to={project.link}>
        <h3 className="t-6 m-0 mt-2 poppins">{project.title}</h3> 
      </Link>
      <div className="flex j-l a-s">
      {project.tags.map((item) => {
        return <li className="p-2 m-1 bs-3 bg-3 br-1 ls-0 c-1 courier-prime" key={item}>{item}</li>
      })}
      </div>
        <p className="m-0 t-5 poppins">{project.description}</p>
    </div>
  );
};

export default ProjectCard;

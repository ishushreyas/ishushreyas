import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bs-1 br-1 m-1 p-1 bg-1">
      <Link className="td-0 c-0" to={project.link}>
        <h3 className="t-6 m-0 mt-2 righteous">{project.title}</h3> 
      </Link>
      <br />
      <div className="flex j-s a-s">
      {project.tags.map((item) => {
        return <li className="p-2 m-4 bs-1 br-1 ls-0 c-1 courier-prime" key={item}>{item}</li>
      })}
      </div>
      <br />
        <p className="t-5 poppins">{project.description}</p>
    </div>
  );
};

export default ProjectCard;

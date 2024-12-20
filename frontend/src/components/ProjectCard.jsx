import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="br-2 m-1 p-1 bg-2 hv:cd-1">
      <Link className="td-0 c-0" to={project.link}>
        <h3 className="t-6 m-0 mt-2 p">{project.title}</h3> 
        <div className="flex wrap">
          {project.tags.map((item) => {
              return <span className="p-2 m-0 br-2 c-1 courier-prime" key={item}>{item}</span>
          })}
        </div>
          <p className="m-0 t-5 p">{project.description}</p>
        </Link>
    </div>
  );
};

export default ProjectCard;

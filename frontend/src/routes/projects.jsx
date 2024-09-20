import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Chat Bot',
    description: 'This is a chat bot made using Go and React framework.',
    tags: ['golang', 'react', 'chatbot', 'gemini'],
    link: 'https://gemini-project.vercel.app',
  },
  {
    title: 'Chat Bot 2',
    description: 'This is a chat bot made using Flask framework.',
    tags: ['python', 'flask', 'chatbot'],
    link: 'https://ishushreyas.pythonanywhere.com',
  },
  {
    title: 'Chat Room',
    description: 'This is a Chat Room made using firebase.',
    tags: ['firebase'],
    link: 'https://talktale.web.app/',
  },
  {
    title: 'Chat with Shreyas',
    description: 'This is a forum like page made using firebase.',
    tags: ['firebase'],
    link: 'https://chatwithshreyas.web.app/',
  },
  {
    title: 'Quick Cloud Space',
    description: 'This is a Cloud Storage made using firebase.',
    tags: ['firebase'],
    link: 'https://quickcloudspace.web.app/',
  },
];

const Projects = () => {
  return (
    <div className="m-1 p-1">
      <h1 className="righteous">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

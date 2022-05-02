import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  const listItems = projects.map((el) => (
    <ProjectItem
      key={el.id}
      name={el.name}
      about={el.about}
      technologies={el.technologies}
    />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{listItems}</div>
    </div>
  );
}

export default ProjectList;

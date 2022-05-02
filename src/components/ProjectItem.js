import React from 'react';

function ProjectItem({ name, about, technologies }) {
  const projItems = technologies.map((el) => <span key={el}>{el}</span>);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{projItems}</div>
    </div>
  );
}

export default ProjectItem;

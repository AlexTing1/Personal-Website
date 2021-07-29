import React from 'react';

function TechList({ list }) {
  return (
    <div>
      {list.map((tech) => (
        <span>{tech}</span>
      ))}
    </div>
  );
}

export default TechList;

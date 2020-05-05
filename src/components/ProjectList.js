import React from 'react';
import ProjectSpace from './ProjectSpace';
import './ProjectList.css';
import data from './projects.json'

function ProjectList() {

  const spaces = data.map(( { title, address, images, role }, i ) => {
  
    return (
      <ProjectSpace
        id={i}
        key={title} 
        name={title}
        role = {role}
        address={address}
        image={images[0]}
  
      />
    )
  })

  return (
    <div className="ProjectList">
      { spaces }
    </div>
  )
}


export default ProjectList
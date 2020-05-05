import { Link } from 'react-router-dom'
import React from 'react'
import './ProjectSpace.css';

function ProjectSpace(props) {
  const { name, image, address, role, id } = props
  return (
    <div className="ProjectSpace">
<Link to={`/details/${id}`}>
  <img src={`${process.env.PUBLIC_URL}images/${image}`} width="350" height="200" alt="Hello" />
</Link>      
<Link to={`/details/${id}`}>
  <h1>{name}</h1>
</Link>
      {/* <div>{address}</div>
      <div>{role}</div> */}
    </div>
  )
}

export default ProjectSpace
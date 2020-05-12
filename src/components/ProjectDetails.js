import React from 'react'
import './ProjectDetails.css'
import data from './projects.json'

function ProjectDetails(props) {
  const { id } = props.match.params 
  const { images, title, desc, role, link } = data[id]

  return (
    <div>
      <div class="image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <h3>{ role }</h3>
        <p>{ desc }</p>
        {/* <a href={`https://${link}`} onclick={window.open({link})}>Link to Project</a> */}
 
      </div>

    </div>
  )
}

export default ProjectDetails
import React from 'react'

const renderPositionListItem = ({ node }) => {
  const {title, description} = node
  const link = node.link.url
  return (
    <li className='positions-list--item'>
      <a 
        className='positions-list--item--title' 
        href={link}>
          {title}
      </a>
      <a 
        className='positions-list--item--desc' 
        href={link}>
          {description}
      </a>
    </li>
  )
}


const PositionsList = ({ positions }) => (
  <div className='positions'>
    <h3>Open Roles</h3>

    <ul className='positions-list'>

      <li className='positions-list--legend'>
        <p>Positions</p>
        <p>Description</p>
      </li>
      { 
        positions ?
        positions.map( position => renderPositionListItem(position)) :
        ""
      }
    </ul>

    <p className='volunteer--contact'>Don't see your skillset here? Don't worry, there are plenty of other areas where we need help. Just message <a href='mailto:jasmine@sheltertech.org'>Jasmine</a> and ask about volunteering.</p>
  </div>
)

export default PositionsList
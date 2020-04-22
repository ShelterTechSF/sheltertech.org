import React from 'react'

const TeamMemberList = ({ name, members }) => {
  
  const memberList = members.map( member => {
    const {first_name, last_name, email, image} = member.team_member
    // const {role} = member
    // const imageSrc = image.url

    // const getImageURL = () => {
    //   if (image) { return image.url || ""}
    //   else { return "" }
    // }
    
    return (
      // <li className={`team-list--item`} style={{backgroundImage: `url(${getImageURL()})`}}>
      //   <div className='team-list--item--details'>
      //     <p className='team-list--item--name'>
      //       <a href={`mailto:${email}`}>
      //         {`${first_name} ${last_name}`}
      //       </a>
      //     </p>
      //     <p className='team-list--item--title'>
      //       {role}
      //     </p>
      //   </div>
      // </li>
      <li>
        {/* <p>{role}</p> */}
        <h2>{Object.keys(member.team_member)[0]}</h2>
      </li>
    )
  })
  
  return (
    <ul className='team-list'>
      <h4 className='team-list-header'>{name}</h4>
      {memberList}
    </ul>
  )
}

export default TeamMemberList
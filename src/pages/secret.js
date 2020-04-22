import React, { useState, useEffect } from 'react'
import { Predicates } from 'prismic-javascript'
import PrismicClient from '../PrismicClient'
import Layout from '../components/layouts'
import '../stylesheets/pages/Team.scss'

const Secret = () => {
  const [team, setTeam] = useState([{first_name: "sample", email: "sample@sample.org"}])
  
  useEffect( () => {
    const fetchPrismicData = async () => {
      try {
        const response = await PrismicClient.query(
          Predicates.at('document.type', 'team_member')
        )
        const teamMembers = response.results.map( elem => (
          elem.data
        ))
        setTeam(teamMembers);
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchPrismicData();
   
  })

  return (
    <Layout>
      {/* {team.map((member) => (
        <div>
          <h3>{member.first_name || ""}</h3>
          <p>{member.email || ""}</p>
          <p>{member.none}</p>
        </div>
      ))} */}

    <div className='team'>
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Team</h2>
          <h3>Our award winning, all-volunteer team is redefining what it means to give back. Want to join? <a to='/get-involved'>Learn more here.</a></h3>
        </div>
        <ul className='team-list'>
          <h4 className='team-list-header'>Team</h4>
          {team.map( member => (
            <li className={`team-list--item`} style={{backgroundImage: `url(${member.image ? member.image.url : ""})`}}>
              <div className='team-list--item--details'>
                <p className='team-list--item--name'>
                  <a href={`mailto:${member.email}`}>
                    {`${member.first_name} ${member.last_name}`}
                  </a>
                </p>
                <p className='team-list--item--title'>
                  {member.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </Layout>
  )
}

export default Secret
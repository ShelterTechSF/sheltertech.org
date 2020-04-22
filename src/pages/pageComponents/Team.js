import React, { useState, useEffect } from 'react'
import { Predicates } from 'prismic-javascript'
import PrismicClient from '../../PrismicClient'
import TeamMemberList from '../../components/TeamMemberList'
import { Link } from 'gatsby'
import '../../stylesheets/pages/Team.scss'

const Team = (props) => {
  const [teams, setTeams] = useState([])

  useEffect( () => {
    const fetchPrismicData = async () => {
      try {
        const response = await PrismicClient.query(
          Predicates.at('document.type', 'team')
        )
        const teams = response.results.map( elem => (
          elem.data
        ))
        setTeams(teams)
        
      } catch (error) {
        console.error(error)
      }
    }
    fetchPrismicData()
  })
  return (
    <div className='team'>
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Team</h2>
          <h3>Our award winning, all-volunteer team is redefining what it means to give back. Want to join? <Link to='/get-involved'>Learn more here.</Link></h3>
        </div>
        {teams.length ? teams.map( team => <TeamMemberList name={team.name} members={team.members}></TeamMemberList>) : ""}
      </div>
    </div>
  )
}

export default Team

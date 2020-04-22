import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventsList from '../../components/EventsList'
import PositionsList from '../../components/PositionsList'
import '../../stylesheets/pages/GetInvolved.scss'

const GetInvolved = (props) => {
  const upcomingEvents = props.data.prismic.allEvents.edges.filter( evt => (new Date(evt.node.datetime)) > Date.now())
  const positions = props.data.prismic.allOpen_roles.edges

  return (
    <div className='volunteer'>
      <a className='anchor' id='e' />
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Volunteer Events</h2>
          <h3>Create lasting impact in just a few hours at a Homeless Services Workshop where you'll work side-by-side with people who've experienced homelessness to verify information on our website and make sure the 1500+ services in our system are accurate and easy to understand. </h3>
        </div>

        <EventsList events={upcomingEvents}/>
        <div className='content--header'>
          <a className='anchor' id='p' />
          <h2>Join the Team</h2>
          <h3>Apply your skills to solving homelessness!<br />With a commitment of a few hours a week, you can join Sheltertech, an all-volunteer organisation building tech products for the homeless and underserved communities of San Francisco.</h3>
        </div>
        <PositionsList positions={positions}/>

        <div className='content--header'>
          <a className='anchor' id='p' />
          <h2>Paid Opportunities</h2>
          <h3>Are you experiencing homelessness and looking for part-time job opportunities in San Francisco? We <strong>hire members of the homeless community</strong> to help us improve our products. To learn more, fill out the form below.</h3>
        </div>
        <span className='iframe-wrapper'>
          <iframe src='https://docs.google.com/forms/d/1dg7tj3DYUxmvtwpwRTK0gX20S6LfWH5rhU8nqMawYTA/viewform' />
        </span>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query GetInvolvedQuery{
        prismic{
          allEvents {
            edges {
              node {
                title
                description
                datetime
                cost
                location_address
                location_coordinates
                imagesource
                event_link {
                  _linkType
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                }
              }
            } 
          }
          allOpen_roles {
            edges {
              node {
                title
                description
                link {
                  _linkType
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={ data => <GetInvolved data={ data } { ...props }/> }
  />
)

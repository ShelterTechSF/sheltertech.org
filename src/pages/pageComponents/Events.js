import React, { useState, useEffect } from 'react'
import { Predicates } from 'prismic-javascript'
import EventsList from '../../components/EventsList'
import PrismicClient from '../../PrismicClient'
import '../../stylesheets/pages/Events.scss'

const Events = (props) => {
  const [allEvents, setAllEvents] = useState([])
  
  useEffect( () => {
    const fetchPrismicData = async () => {
      try {
        const response = await PrismicClient.query(
          Predicates.at('document.type', 'event')
        )
        const events = response.results.map( elem => (
          elem.data
        ))
        setAllEvents(events)
        
      } catch (error) {
        console.error(error)
      }
    }
    fetchPrismicData()
  })

  return (
    <div className='events'>
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Events</h2>
          <h3>Whether you're looking to volunteer, learn about homelessness, or just meet people from different walks of life—our events are all about bringing people together.</h3>
        </div>
        <EventsList events={allEvents.filter( evt => (new Date(evt.datetime) >= Date.now()) )}/>
        <h3 className='events--past'>Past Events</h3>
        <EventsList events={allEvents.filter( evt => (new Date(evt.datetime) < Date.now()) )}/>
      </div>
    </div>
  )
}

export default Events

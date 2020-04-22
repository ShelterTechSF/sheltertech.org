import React from 'react'

const renderEventCard = (evt, i) => {
  const {title, description, cost, location_address, imagesource, id, event_link, datetime} = evt

  const eventURL = event_link ? event_link.url : "https://www.sheltertech.org/"
  const imageURL = imagesource ? imagesource.url : ""
  const imageAlt = imagesource ? imagesource.alt : "event_image"

  const getFormattedDate = () => {
    if (datetime) {
      let date = new Date(datetime)
      return `${date.toDateString()} ${date.toLocaleTimeString('en-US')}`
    } else {
      return ""
    }
  }

  const openTab = (url) => {
    if (window) { window.open(url, '_blank') }
  }

  return (
    <li key={id || i} className='event-card' onClick={() => openTab(eventURL)}>
      <p className='event-card--cost'>{cost || ""}</p>
      <img className='event-card--image' src={imageURL} alt={imageAlt}/>
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>{getFormattedDate()}</p>
          <h4>{title || ""}</h4>
          <p className='event-card--details--description'>{description || ""}</p>
        </div>
        <small>{location_address || ""}</small>
      </div>
    </li>
  )
}

const EventsList = ({ events }) => (
  <ul className='events-list'>
    {events ? events.map( (evt,i) => renderEventCard(evt,i)) : ""}
  </ul>
)

export default EventsList
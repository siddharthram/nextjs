import { useRouter } from 'next/router';
import EventItem from '../../components/events/event-item';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    console.log(eventId);
    const event = getEventById(eventId);
    console.log(event);

    if (!event) {
    return <p>No Event found </p>
    }

return ( 
 <Fragment>
     <EventSummary title={event.title}/>
     <EventLogistics 
     date={event.date}
      address={event.location} 
      image={event.image} 
      imageAlt={event.title}/>
     <EventContent>
         <p>{event.description}</p>
     </EventContent>
 </Fragment>
);
}

export default EventDetailPage;

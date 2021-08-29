import { getAllEvents, getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
const featuredEvents = getAllEvents();
return (<div> 
        <EventList items={featuredEvents}/>
    </div>
    );
}

export default HomePage;
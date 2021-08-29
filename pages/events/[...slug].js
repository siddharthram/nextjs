import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from 'react';
import Button from "../../components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  } // happens during prefetching

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear; // to number
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p> invalid filter.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
          <div className='center'>
        <p> no valid events found</p>
        <Button link="/events"> Show All Events </Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth -1);

  return (
  <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;

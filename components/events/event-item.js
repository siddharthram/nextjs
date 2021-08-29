import Link from 'next/link';

import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIconRight from '../icons/arrow-right-icon';

function EventItem(props) {
    const { title, image, date, location, id } = props; 
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    console.log(id);
    const formattedAddress = location.replace(',','\n');
    const exploreLink = `/events/${id}`;
    console.log(exploreLink);

    return <li className={classes.item}>
        <img src={"/" + image }  alt="{title}" />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                <DateIcon/>
                <time> {humanReadableDate} </time>
            </div>
            <div className={classes.address}>
            <AddressIcon/>
                <address> {formattedAddress} </address>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}> 
                    <ArrowIconRight/>
                    </span>
                    </Button> 
                </div>

        </div>
    </li>
}


export default EventItem;
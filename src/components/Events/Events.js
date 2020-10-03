import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import Event from '../Event/Event';

const Events = () => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/userAllEvents/?email=${loginData.email}`)
      .then(response => response.json())
      .then(result => setEvents(result))
  }, [loginData]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {
              events.map(event => <Event key={event._id} event={event}></Event>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
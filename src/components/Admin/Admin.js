import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import AdminEvents from '../AdminEvents/AdminEvents';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  useEffect(() => {
    fetch('http://localhost:4000/getAllEvents')
      .then(response => response.json())
      .then(result => setEvents(result))
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <button onClick={() => setAddEvent(false)} className="btn btn-block text-left btn-outline-light text-dark rounded mb-3"><FontAwesomeIcon icon={faUser} /> <span className="pl-2">Volunteer register list</span></button>
          <button onClick={() => setAddEvent(true)} className="btn btn-block text-left btn-outline-light text-dark rounded"><FontAwesomeIcon icon={faPlusSquare} /> <span className="pl-2">Add event</span></button>
        </div>
        <div className="col-md-9">
          {
            addEvent
              ? <AddEvent></AddEvent>
              : <AdminEvents events={events}></AdminEvents>
          }
        </div>
      </div>
    </div>
  );
};

export default Admin;
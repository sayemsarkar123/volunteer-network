import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './AdminEvent.css';

const AdminEvent = ({ event }) => {
  const { _id, name, email, date, activity_name } = event;

  const deleteEvent = id => {
    fetch(`https://limitless-meadow-98289.herokuapp.com/deleteEvent/${id}`)
      .then(response => response.json())
      .then(result => console.log(result));
  }

  return (
    <div className="col-md-12">
      <div className="row py-3 align-items-center">
        <div className="col-md">
          <span className="text-black">{name}</span>
        </div>
        <div className="col-md">
          <span className="text-black">{email}</span>
        </div>
        <div className="col-md">
          <span className="text-black">{date}</span>
        </div>
        <div className="col-md">
          <span className="text-black">{activity_name}</span>
        </div>
        <div className="col-md">
          <span onClick={() => deleteEvent(_id)} className="d-inline-block bg-danger rounded text-white-50 px-2 py-1 delete-btn">
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;

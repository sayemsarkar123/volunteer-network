import React from 'react';
import './Event.css';

const Event = ({ event }) => {
  const { _id, activity_name, activity_img, date } = event;

  const deleteEvent = id => {
    fetch(`https://limitless-meadow-98289.herokuapp.com/deleteEvent/${id}`)
      .then(response => response.json())
      .then(result => console.log(result));
  }

  return (
    <div className="col-md-6 mb-4 px-5">
      <div className="row py-3 rounded blog-shadow-dreamy">
        <div className="col-md-4">
          <img src={activity_img} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-5">
          <h4 className="font-weight-bold">{activity_name}</h4>
          <span className="d-inline-block pl-3">{new Date(date).toDateString()}</span>
        </div>
        <div className="col-md-2 ml-auto mr-auto mt-auto">
          <button onClick={() => deleteEvent(_id)} className="btn btn-outline-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
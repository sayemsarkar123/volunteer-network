import React from 'react';
import AdminEvent from '../AdminEvent/AdminEvent';

const AdminEvents = ({ events }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row py-3 bg-light rounded">
          <div className="col-md">
          <span className="text-black-50">Name</span>
          </div>
          <div className="col-md">
          <span className="text-black-50">Email ID</span>
          </div>
          <div className="col-md">
          <span className="text-black-50">Registating date</span>
          </div>
          <div className="col-md">
          <span className="text-black-50">Volunteer list</span>
          </div>
          <div className="col-md">
          <span className="text-black-50">Action</span>
          </div>
        </div>
      </div>
      {
        events.map(event => <AdminEvent key={event._id} event={event}></AdminEvent>)
      }
    </div>
  );
};

export default AdminEvents;
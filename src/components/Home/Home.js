import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Home.css';

const Home = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://limitless-meadow-98289.herokuapp.com/getAllActivities')
      .then((response) => response.json())
      .then((result) => setActivities(result));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-5">
          <h2 className="text-center text-uppercase font-weight-bold mb-5">I grow by helping people in need.</h2>
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="search position-relative">
                <input type="text" placeholder="Search..." className="form-control" />
                <button className="btn btn-primary position-absolute">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            {
              activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

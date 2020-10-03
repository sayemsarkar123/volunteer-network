import React from 'react';
import { useHistory } from 'react-router-dom';
import './Activity.css';

const Activity = ({ activity }) => {
  const { _id, activity_name, activity_img } = activity;
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/activity/${_id}`)} className="col-md-3 mb-5">
      <div className="activity position-relative">
        <img src={activity_img} alt="" className="img-fluid"/>
        <h5 className="position-absolute text-center text-white m-0 py-4">{activity_name}</h5>
      </div>
    </div>
  );
};

export default Activity;
import React from 'react';
import { useForm } from 'react-hook-form';
import { getDateValue } from '../Registration/Registration';

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    fetch('https://limitless-meadow-98289.herokuapp.com/addEvent', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
          <div className="form-row">
            <div className="col-md-6">
              <label>Event Title</label>
              <input type="text" name="activity_name" placeholder="Enter title" className={`form-control ${errors?.activity_name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.activity_name?.message}</div>
            </div>
            <div className="col-md-6">
              <label>Event Date</label>
              <input type="date" name="date" defaultValue={getDateValue()} className="form-control" ref={register} />
            </div>
            <div className="col-md-6 mt-3">
              <label>Description</label>
              <input type="text" name="description" placeholder="Enter Designation" className={`form-control ${errors?.description ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.description?.message}</div>
            </div>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary mt-3"/>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

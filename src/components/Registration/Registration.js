import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../../App';

export const getDateValue = () => {
  const d = new Date();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  const yy = d.getFullYear();
  return `${yy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
}

const Registration = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const [loginData, setLoginData] = useContext(LoginContext);

  useEffect(() => {
    fetch(`https://limitless-meadow-98289.herokuapp.com/activity/${id}`)
      .then(response => response.json())
      .then(result => setActivity(result))
  }, [id]);

  const onSubmit = data => {
    const { isSignedIn, ...rest } = { ...loginData, ...data, activity_img: activity.activity_img };
    fetch('https://limitless-meadow-98289.herokuapp.com/addEvent', {
      method: 'POST',
      body: JSON.stringify({ ...rest }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto p-5 border border-darken-1 rounded">
          <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
            <h4 className="mb-5 font-weight-bold">Register as a Volunteer</h4>
            <div className="form-group mb-4">
              <input type="text" name="name" defaultValue={loginData.name} className="form-control border border-right-0 border-left-0 border-top-0 border-bottom" ref={register}/>
            </div>
            <div className="form-group mb-4">
              <input type="email" name="email" defaultValue={loginData.email} className="form-control border border-right-0 border-left-0 border-top-0 border-bottom" ref={register}/>
            </div>
            <div className="form-group mb-4">
              <input type="date" name="date" defaultValue={getDateValue()} className="form-control border border-right-0 border-left-0 border-top-0 border-bottom" ref={register}/>
            </div>
            <div className="form-group mb-4">
              <input type="text" name="desicription" placeholder="Desicription" className={`${errors?.desicription ? 'is-invalid' : null} form-control border border-right-0 border-left-0 border-top-0 border-bottom`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors?.desicription?.message}</div>
            </div>
            <div className="form-group mb-4">
              <input type="text" name="activity_name" defaultValue={activity.activity_name} className="form-control border border-right-0 border-left-0 border-top-0 border-bottom" ref={register}/>
            </div>
            <input type="submit" value="Registration" className="btn btn-primary btn-block"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
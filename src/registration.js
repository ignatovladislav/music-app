import React, { useState, useEffect } from "react";

// import { connect } from "react-redux";

// import "./registration.css";
// import { connect } from "react-redux";

// import { createNewUser } from "../../actions";

// import { validateReg } from "../../utils";
 

const registrationData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  password2: ""

};

const Registration = (props) => {
  const [user, setUser] = useState(registrationData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // const id = Math.floor(Math.random() * 10000000);
        // const id = (Date.now() + Math.random()).toString();
        // const id = Math.random().toString(36).substring(7);
        const id = Number(String(Math.random() + 1).split(".")[1]);
        user.id = id;
        // createNewUser(user);
        // setUser(createNewUser);
        setErrors({});
        setSubmitting(false);
      } else {
        console.log({ errors });
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }))
    console.log(user)
  }
    // setUser(prevUser => ({ ...prevUser, [name]: value }))
    // console.log(isSubmitting)
    // ;

  // const handleBlur = () => {
  //   const validationErrors = validateReg(user);
  //   setErrors(validationErrors);
  // };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const validationErrors = validateReg(user);
  //   setErrors(validationErrors);
  //   setSubmitting(true);
  // };
  const onHandleClick = e => {
    e.preventDefault()
    console.log('click')
  }
  console.log(user)
  const isDis = user.name > 0 || user.email > 0 ? setSubmitting(false) : setSubmitting(true)
  return (
    <div className="registration" >
      <div className="reg-logo">
        <h1>Registration</h1>
      </div>
      <div className="input">
        <div className="form-group-reg">
          <div className="form-group-reg-name">
            <input
              type="text"
              name="name"
              value={user.name}
              // onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              className="dynamic-input-name"
              placeholder="Enter name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            <label htmlFor="dynamic-input-name">Enter name</label>
          </div>

          <div className="form-group-reg-e-mail">
            <input
              type="text"
              name="email"
              value={user.email}
              // onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              className="dynamic-input-e-mail"
              placeholder="Enter e-mail"
            />
             {errors.email && <p className="error-text">{errors.email}</p>}
            <label htmlFor="dynamic-label-input-e-mail">Enter e-mail</label>
          </div>

          <div className="form-group-reg-phone">
            <input
              type="text"
              name="phone"
              value={user.phone}
              // onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              className="dynamic-input-phone"
              placeholder="Enter your phone"
            />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            <label htmlFor="dynamic-label-input-phone">Enter your phone</label>
          </div>

          <div className="form-group-reg-password">
            <input
              type="password"
              name="password"
              value={user.password}
              // onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              className="dynamic-input-reg-password"
              placeholder="Enter password"
            />
             {errors.password && <p className="error-text">{errors.password}</p>}
            <label htmlFor="dynamic-label-input-reg-password">
              Enter password
            </label>
          </div>

          <div className="form-group-reg-password2">
            <input
              type="password"
              name="password2"
              value={user.password2}
              // onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              className="dynamic-input-reg-password2"
              placeholder="Repeat password"
            />
            {errors.password2 && <p className="error-text">{errors.password2}</p>}
            <label htmlFor="dynamic-label-input-reg-password2">
              Repeat password
            </label>
          </div>
        </div>
      </div>
      <div className="btn-registration">
        <button className="reg-btn"
         type="submit"
         disabled={isDis}
         onClick={onHandleClick}
        >Registration</button>
      </div>
    </div>
  );
  
};


// const mapDispatchToprops = {
//     createNewUser,

// }

export default Registration;
   

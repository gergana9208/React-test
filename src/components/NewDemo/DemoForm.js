import React, { useState } from "react";

import "./DemoForm.css";

const DemoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSport, setEnteredSport] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
 
  const [enteredDate, setEnteredDate] = useState("");

  //const [userUnput, setUserInput] = useState({
  //  enteredTitle: '',
  //enteredCompetition: '',
  //enteredDate: ''
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const sportChangeHandler = (event) => {
    setEnteredSport(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const demoData = {
      title: enteredTitle,
      sport: enteredSport,
      description: enteredDescription,
      date: new Date(enteredDate),
      
    };
    console.log(demoData);
   
    props.onSaveDemoData(demoData);
    setEnteredTitle("");
    setEnteredSport("");
    setEnteredDescription("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2 className="title">Create New Cup</h2>
        <div className="new-demo__controls">

          <div className="new-demo__control">
            <label>Name<span className="asterisk_input"></span></label>
            <input 
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-demo__control">
            <label>Sport<span className="asterisk_input"></span></label>
            <input
              type="text"
              value={enteredSport}
              onChange={sportChangeHandler}
            />
          </div>

          <div className="new-demo__control">
            <label>Description<span className="asterisk_input"></span></label>
            <input
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
          
          <div>
            <label>Start Date ?</label>
            <input className="date" 
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
         
        </div>
        <div className="new-demo__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Cup</button>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;

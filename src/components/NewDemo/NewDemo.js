import React, { useState } from "react";
import "./NewDemo.css";
import DemoForm from "./DemoForm";

const NewDemo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDemoDataHandler = (enteredDemoData) => {
    const DemoData = {
      ...enteredDemoData,
      id: Math.random().toString(),
    };
    props.onAddDemo(DemoData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-demo" >
      {isEditing && (
        <div >
        <DemoForm
          onSaveDemoData={saveDemoDataHandler}
          onCancel={stopEditingHandler}
        />
        </div>
      )}

      {!isEditing && (
        <div >
        <button onClick={startEditingHandler}>Import</button></div>
      )}
    </div>
  );
};

export default NewDemo;

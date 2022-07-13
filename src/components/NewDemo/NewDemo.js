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
    <div className="new-demo">
      {isEditing && (
        <DemoForm
          onSaveDemoData={saveDemoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Cup</button>
      )}
    </div>
  );
};

export default NewDemo;

import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    const handleUpcase=()=>{
        console.log("click on button and convert to upper case"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLocase=()=>{
        console.log("click on button and convert toLower case"+text);
        let newtext1=text.toLowerCase();
        setText(newtext1);
    }
    const handleonchang=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
     <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <div>
          <textarea className="form-control" value={text} onChange={handleonchang}id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpcase} >Convert to Upper Case</button>
              <button className="btn btn-primary mx-1" onClick={handleLocase} >Convert to Lower Case</button>
      </div>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
          <p>{0.008 *(text.split(" ").length) } Minutes take to read </p>
          <h2>Preview</h2>
          <p>{text}</p>

    </div>
    </>
   
  );
}

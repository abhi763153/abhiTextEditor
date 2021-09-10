import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

        // text = "New text place here";  ----> not allowed, you can't change text value directly. 
        // setText("New value of text");  ----> This is right way to update text value.

    const ConvertToUpperCase = () =>{
        // console.log("Clicked Convert to LowerCase " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Your text has been converted into uppercase", "success ");
    }
    const ConvertToLowerCase = () =>{
        // console.log("Clicked Convert to LowerCase " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Your text has been converted into lowercase", "success ");

    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
          <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{color: props.mode==='light'?'#042743':'white',
                 backgroundColor: props.mode==='light'?'white':'grey'}}
                value={text} id="myBox" rows="10"></textarea>
            </div>

            <div className="container ">
                <button className="btn btn-primary my-3 mx-2" onClick={ConvertToUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={ConvertToLowerCase}>Convert to LowerCase</button>
            </div>

            <div className="container my-2">
                <h1>Your text Summary</h1>
                <h4>Words : {text.split(' ').length}</h4>
                <h4>Characters : {text.length}</h4>
                <h4>Time to read : {0.008 * text.split(' ').length} mins</h4>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

            {/* <div className="mb-3 justify-content-around">
                <button className="btn btn-primary my-3">Convert to UperCase</button> 
            </div>  */}
        </div>
    )
}

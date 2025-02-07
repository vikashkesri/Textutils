import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
// console.log("Uppercase was clicked: " + text);
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to uppercase!", "success")
}

const handleLoClick = ()=>{
  // console.log("Lowercase was clicked: " + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to Lowercase!", "success")
  }

  const handleClearClick = ()=>{
    // console.log("Clear was clicked: " + text);
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!", "success")
    }

const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
}

const handleCopy =() =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipbord!", "success")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!", "success")
}

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText = "new text"; // wrong way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e': 'white', color: props.mode==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button className ="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className ="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className ="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
  <button className ="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
  <button className ="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743'}}>
      <h2>Your text summry</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>  
    </>
  )
}

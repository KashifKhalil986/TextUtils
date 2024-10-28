import React, { useState } from 'react'

export default function Textform(props) {


  const handleOnChange = (event) => {
    setText(event.target.value);

  }

  const handleupClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");

  }
  const handleloClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  }

  const handleclearClick = () => {
    
    setText("");
    props.showAlert("Text Cleared","success");

  }
   
  const handleExtraSpace = () =>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" ")); 
    props.showAlert("Extra spaces removed","success");
  }
const handleCopy = ()=>{
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard","success");
}

  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear the text</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes is the average time to read the mentioned text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Nothing to preview!"}</p>
      </div>


    </>
  )
}
 
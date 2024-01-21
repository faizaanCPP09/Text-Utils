import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!!', 'Success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!!', 'Success');
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert('Capitalized each word!!', 'Success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard!!', 'Success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared!!', 'Success');
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert('Extra spaces removed!!', 'Success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  const getWordCount = () => {
    const words = text.split(/\s+/).filter((element) => element.length !== 0);
    return words.length;
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <h6>{props.heading}</h6>
        </div>
        <div className="container my-3"></div>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleCapitalizeClick}>
          Capitalize Words
        </button>
        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-1" disabled={text.length === 0} onClick={handleRemoveSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h5>Your Text Summary</h5>
        <p>{getWordCount()} words and {text.length} characters</p>
        <p>{0.08 * getWordCount()} Minutes read</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
      </div>
    </>
  );
}

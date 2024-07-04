import React, { useState } from "react";

export default function TextForm(props) {
  const ManageUpClick = () => {
    let newElement = word.toUpperCase();
    setWord(newElement);
    props.showAlert("Converted to UpperCase", "success");
  };
  const ManageLoClick = () => {
    let newElement = word.toLowerCase();
    setWord(newElement);
    props.showAlert("Converted to LowerCase", "success");
  };
  const ManageAllClick = () => {
    let newElement = "";
    setWord(newElement);
    props.showAlert("Cleared word", "success");
  };
  const ManageAllCopy = () => {
    var word = document.getElementById("myBox");
    word.select();
    navigator.clipboard.writeText(word.value);
    props.showAlert("All Copied", "success");
  };
  const ManageAllSpace = () => {
    let newElement = word.split(/[ ]+/);
    setWord(newElement.join(" "));
    props.showAlert("Cleared Space", "success");
  };
  const ManageReverseWord = () => {
    const reversedWords = word
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
    setWord(reversedWords);
    props.showAlert("Reverse word", "success");
  };
  const ManageReverseSentence = () => {
    const reversedSentence = word.split(" ").reverse().join(" ");
    setWord(reversedSentence);
    props.showAlert("Reverse Sentence", "success");
  };
  const ManageOnChange = (events) => {
    console.log("On Change");
    setWord(events.target.value);
  };
  const [word, setWord] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={word}
            onChange={ManageOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#313142" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={word.length === 0}
          className="btn btn-danger mx-2 my=1"
          onClick={ManageUpClick}
        >
          UPPER CASE
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-dark mx-2 my=1"
          onClick={ManageLoClick}
        >
          lower case
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-success mx-2 my=1"
          onClick={ManageAllClick}
        >
          Clear All
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-primary mx-2 my=1"
          onClick={ManageAllCopy}
        >
          Copy to clipboard
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-warning mx-2 my=1"
          onClick={ManageAllSpace}
        >
          Clear Space
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-info mx-2 my=1"
          onClick={ManageReverseWord}
        >
          Reverse Word
        </button>
        <button
          disabled={word.length === 0}
          className="btn btn-primary mx-2 my=1"
          onClick={ManageReverseSentence}
        >
          Reverse Sentence
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Word Summary</h2>
        <p>
          {
            word.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          &nbsp; words and &nbsp;
          {word.length} &nbsp; character
        </p>
        <p>
          {0.008 *
            word.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          &nbsp; Minutes read
        </p>
        <h2>Preview</h2>
        <p>{word.length > 0 ? word : "Enter the word to Preview"}</p>
      </div>
    </>
  );
}

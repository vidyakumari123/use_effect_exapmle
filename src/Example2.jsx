
import React, { useState, useEffect } from "react";

function Example2() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    
    setCharCount(text.length);

   
    const words = text.split(/\s+/).filter(word => word !== '');
    setWordCount(words.length);
  }, [text]);

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const reverseText = () => {
    setText(text.split('').reverse().join(''));
  };
  const reverseWords = () => {
    const reversedWords = text.split(/\s+/).map(word => word.split('').reverse().join(''));
    setText(reversedWords.join(' '));
  };
  return (
    <div style={{ background: "#67C6E3", padding: "20px", borderRadius: "8px" }}>
      <textarea
        style={{ marginBottom: "10px" }}
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <h1 style={{ color: "#333", marginBottom: "20px" }}>{text}</h1>
      <h3 style={{ color: "#666", marginBottom: "10px" }}>NO OF CHARACTERS: {charCount}</h3>
      <h3 style={{ color: "#666", marginBottom: "10px" }}>NO OF WORDS: {wordCount}</h3>
      <button style={{ background: "#124076", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "4px", marginRight: "10px" }} onClick={convertToUpperCase}>Convert to uppercase</button>
      <button style={{ background: "#124076", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "4px", marginRight: "10px" }} onClick={reverseText}>Reverse the string</button>
      <button style={{ background: "#124076", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "4px" }} onClick={reverseWords}>Reverse the word </button>
    </div>
  );
}

export default Example2;
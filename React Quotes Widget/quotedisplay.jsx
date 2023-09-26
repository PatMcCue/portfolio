import React, { useState, useEffect } from "react";
import quotesArray from "./quotes.json";

function QuoteDisplay() {
  const [quote, setQuote] = useState("");
  const [authorProfession, setAuthorProfession] = useState("");

  useEffect(() => {
    showRandomQuote();
  }, []);

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const quoteObj = quotesArray[randomIndex];
    setQuote(quoteObj.quote);
    setAuthorProfession(`${quoteObj.author} (${quoteObj.profession})`);
  }

  return (
    <div>
      <div id="quote">{quote}</div>
      <div id="author-profession">{authorProfession}</div>
      <button onClick={showRandomQuote}>Show Another Quote</button>
    </div>
  );
}

export default QuoteDisplay;

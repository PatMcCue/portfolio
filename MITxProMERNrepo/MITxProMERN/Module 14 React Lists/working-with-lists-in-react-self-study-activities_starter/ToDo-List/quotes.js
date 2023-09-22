import React, { useState } from 'react';

const QuoteGenerator = ({ quotesArray }) => {
  const [quote, setQuote] = useState('');
  const [authorProfession, setAuthorProfession] = useState('');

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const quoteObj = quotesArray[randomIndex];
    setQuote(quoteObj.quote);
    setAuthorProfession(`${quoteObj.author} (${quoteObj.profession})`);
  }

  return (
    <div id="quote-container">
      <h4 id="quote">{quote}</h4>
      <h7 id="author-profession">{authorProfession}</h7>
      <div className="button-container">
        <button id="random-btn" onClick={showRandomQuote}>Random Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;

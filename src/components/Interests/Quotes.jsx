import React from "react";

export default function Quotes({ quotes }) {
  return (
    <ul className="quotes-list">
      {quotes.map((quote, i) => (
        <li key={i}>
          <blockquote>
            <div className="quote-block">
              <div className="text">{quote.text}</div>
              <div className="author">- {quote.author}</div>
            </div>
          </blockquote>
          <div className="commentary">{quote.commentary}</div>
        </li>
      ))}
    </ul>
  );
}

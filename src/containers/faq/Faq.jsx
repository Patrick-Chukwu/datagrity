import React, { useState } from 'react';
import './faq.css'; 

const Faq = ({ faqs }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleAnswer = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="faq column">
        <div className="faq_title">
            <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-body">
        {faqs.map((faq) => (
        <div className="column faq-item" key={faq.id}>
          <div className="question row">
            <button
              className="toggle-button"
              onClick={() => toggleAnswer(faq.id)}
            >
              {expandedIds.includes(faq.id) ? '-' : '+'}
            </button>
            <h2>{faq.question}</h2>
          </div>
          {expandedIds.includes(faq.id) && (
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default Faq;

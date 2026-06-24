import React, { useState } from "react";

const FeedbackCollector = () => {

  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const handleFeedback = (value) => {
    setFeedback(value);
    setCount(prev => prev + 1);
  };

  return (
    <div className="container text-center mt-5">
        <p className='mt-5'>Assignment No. 5</p>

      <h1>Feedback Collector</h1>

      <button
        className="btn btn-success m-3"
        onClick={() => handleFeedback("Good")}
      >
        😊 Good
      </button>

      <button
        className="btn btn-warning m-3"
        onClick={() => handleFeedback("Average")}
      >
        😐 Average
      </button>

      <button
        className="btn btn-danger m-3"
        onClick={() => handleFeedback("Poor")}
      >
        😞 Poor
      </button>

      <hr />

      <h5>Selected Feedback: {feedback}</h5>

      <h5>Total Feedback Given: {count}</h5>

      {feedback === "Good" && (
        <h4>Thank you for your positive feedback!</h4>
      )}

      {feedback === "Average" && (
        <h4>We'll try to improve.</h4>
      )}

      {feedback === "Poor" && (
        <h4>Sorry for the inconvenience.</h4>
      )}

    </div>
  );
};

export default FeedbackCollector;
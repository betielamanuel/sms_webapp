import { useState } from "react";

function Form() {
  const [message, setMessage] = useState("");
  const [numbers, setNumbers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message:", message);
    console.log("Numbers:", numbers.split(","));
    // Add your API call logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Numbers (comma-separated):
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;

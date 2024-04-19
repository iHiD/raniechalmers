import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [memory, setMemory] = useState("");
  const [saved, setSaved] = useState(false);
  const uuid = uuidv4();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleMemoryChange(e) {
    setMemory(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("memories")
      .upsert({ id: uuid, text: memory });

    setSaved(true);
  }

  return (
    <>
      <h1>Raine Chalmers</h1>
      <h2>Leave a message</h2>
      {saved ? (
        <div>Your memory has been saved</div>
      ) : (
        <form>
          <input
            value={name}
            onChange={handleNameChange}
            placeholder="Your name (optional)"
          />
          <textarea
            value={memory}
            onChange={handleMemoryChange}
            placeholder="Your memories of Raine"
          />
          <button onClick={handleSubmit}>Save</button>
        </form>
      )}
    </>
  );
}

export default App;

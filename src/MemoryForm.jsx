import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";

function MemoryForm() {
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
    const { error } = await supabase.from("memories").upsert({
      id: uuid,
      person: name,
      text: memory,
    });

    setSaved(true);
  }

  return (
    <>
      {saved ? (
        <div>Your memory has been saved</div>
      ) : (
        <form>
          <label>Your name (optional)</label>
          <input
            value={name}
            onChange={handleNameChange}
            placeholder="Your name (optional)"
          />
          <label>Share your memories</label>
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

export default MemoryForm;

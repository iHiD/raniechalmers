import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";

function MemoryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const uuid = uuidv4();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("contact_details").insert(
      {
        id: uuid,
        name: name,
        phone: phone,
        email: email,
      },
      { returning: "minimal" }
    );

    setSaved(true);
  }

  return (
    <>
      {saved ? (
        <div className="bg-[#ffe7ec] text-16 py-8 px-16 rounded-8 border-1 border-[#652566] font-medium">
          Thank you. We&apos;ll let you know when the Memory Book is ready.
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <label className="text-16 font-normal mb-4">Your name</label>
          <input
            value={name}
            onChange={handleNameChange}
            placeholder=""
            required
            className="mb-16 max-w-[300px] text-center text-16"
          />

          <label className="text-16 font-normal mb-4">
            Your mobile number
          </label>
          <input
            type="number"
            value={phone}
            onChange={handlePhoneChange}
            className="mb-16 max-w-[300px] text-center text-16"
          />
          <label className="text-16 font-normal mb-4">
            Your email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="mb-16 max-w-[300px] text-center text-16"
          />
          <button
            onClick={handleSubmit}
            className="w-[100%] max-w-[300px] text-center"
          >
            Get Notified
          </button>
        </div>
      )}
    </>
  );
}

export default MemoryForm;

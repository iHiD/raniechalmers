import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function MemoryForm() {
  const [name, setName] = useState("");
  const [memory, setMemory] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      width: "100%",
      maxWidth: "580px",
      left: "50%",
      top: "0",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)",
      border: "none",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleMemoryChange(e) {
    setMemory(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("memories").insert(
      {
        id: uuidv4(),
        person: name,
        text: memory,
      },
      { returning: "minimal" }
    );

    if(error) {
      return
    }

    closeModal()
    setMemory("")
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="confirm-alert">
            <p className="font-semibold mb-4">All Done 👍</p>
            <p className="mb-12 text-16">
          Your memories have been sent to us. Thank you so much for sharing them. Please come back at any time to add more.
            </p>
            <button onClick={onClose}>Close window</button>
          </div>
        );
      },
    });

  }

  function handleClose() {
    if (memory == "") {
      closeModal();
      return;
    }

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="confirm-alert">
            <p className="font-semibold mb-4">Close window?</p>
            <p className="mb-12 text-16">
              Are you sure you want to close this window and lose what
              you&apos;re written so far?
            </p>
            <div class="flex gap-12">
              <button
                onClick={() => {
                  closeModal();
                  onClose();
                }}
              >
                Yes, I&apos;m sure
              </button>
              <button onClick={onClose}>No, take me back</button>
            </div>
          </div>
        );
      },
    });
  }

  return (
    <>
      <button onClick={openModal}>Add a written memory</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <h2 className="text-40 font-heading">Add Your Memories</h2>
            <p className="text-16 mb-12">
              Here are a few ideas to inspire you. Please don’t feel you should
              stick to these areas - there are no rules with this memory book,
              just whatever comes to your heart and mind!
            </p>
            <ul className="text-16 list-disc pl-16 mb-16">
              <li>A time you enjoyed spending together</li>
              <li>Something you particularly loved about Ranie </li>
              <li>Your first memory of meeting Ranie</li>
              <li>What you will remember most about Ranie</li>
              <li>Any poetry, art, fabric, music, etc that reminds you of Ranie</li>
            </ul>
            <label className="text-16 font-medium mb-8">
              Your name
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              placeholder=""
              className="mb-20 text-16"
            />
            <label className="text-16 font-medium mb-8">
              Your memories
            </label>
            <textarea
              value={memory}
              onChange={handleMemoryChange}
              placeholder=""
              className="mb-20 h-[250px] text-16"
            />
          <div className="flex gap-12">
            <button onClick={handleSubmit}>Send us your memories</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
      </Modal>
    </>
  );
}

export default MemoryForm;

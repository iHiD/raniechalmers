import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx"
import MemoryForm from "./MemoryForm";
import PhotoForm from "./PhotoForm";

function MemoriesPage() {
  return (
    <>
      <Navbar selected="memories"/>
      <h1>Raine Chalmers</h1>
      <h2>Leave a message</h2>
      <MemoryForm/>
      <PhotoForm/>
    </>
  );
}

export default MemoriesPage;

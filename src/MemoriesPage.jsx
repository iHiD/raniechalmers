import { useState, useEffect } from "react";
import MemoryForm from "./MemoryForm";
import PhotoForm from "./PhotoForm";

function MemoriesPage() {
  return (
    <>
      <h1>Raine Chalmers</h1>
      <h2>Leave a message</h2>
      <MemoryForm/>
      <PhotoForm/>
    </>
  );
}

export default MemoriesPage;

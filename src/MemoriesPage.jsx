import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import MemoryForm from "./MemoryForm";
import PhotoForm from "./PhotoForm";
import UpdateForm from "./UpdateForm";
import MumImg from "./mum_and_hearts.webp";

function MemoriesPage() {
  return (
    <div class="flex flex-col flex-stretch h-[100vh]">
      <Navbar selected="memories" />
      <div id="canva">
        <iframe loading="lazy" src="https://www.canva.com/design/DAGSrvWONaw/3WzA9vUSpTxsvj_Tj38yhQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>
    </div>
  );
}

export default MemoriesPage;

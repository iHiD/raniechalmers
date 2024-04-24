import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import MemoryForm from "./MemoryForm";
import PhotoForm from "./PhotoForm";
import UpdateForm from "./UpdateForm";
import MumImg from "./mum_and_hearts.webp";

function MemoriesPage() {
  return (
    <>
      <Navbar selected="memories" />
      <div className="container text-center mb-32">
        <img src={MumImg} className="max-w-[250px] block mx-auto mt-32 mb-32" />
        <h1 className="font-heading text-[60px] leading-100">
          Ranie’s Memory Book
        </h1>
        <p className="text-18 mb-12">
          We are creating a Memory Book for our beloved Mum, Wife, Sister, Nanny
          and Friend, as something for us all to treasure.
        </p>

        <p className="text-18 mb-12"></p>

        <h2 className="font-heading text-48 leading-100 mt-32 mb-4">
          Share Your Memories
        </h2>

        <p className="text-18 mb-12">
          We&apos;d love you to contribute your stories, thoughts, photos and
          videos of Ranie using the buttons below. Please feel free to leave
          multiple contributions and come back and add more photos at any time.
        </p>

        <p className="text-18 mb-20">
          We will leave this page up until mid-June to give everyone time to add to it. We will share it with you then.
        </p>

        <div className="flex flex-col items-stretch md:flex-row gap-12 items-center justify-center">
          <MemoryForm />
          <PhotoForm />
        </div>
      </div>
    </>
  );
}

export default MemoriesPage;

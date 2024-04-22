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
          We are creating a memory book for our beloved mum, wife, sister, nanny
          and friend, as something for us all to treasure and to share with
          Ranie&apos;s grandchildren when they're older.
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
          We will leave this page up until around June when we will have
          capacity to put the book together so you have until then to add to it.
        </p>

        <div className="flex flex-col items-stretch md:flex-row gap-12 items-center justify-center">
          <MemoryForm />
          <PhotoForm />
        </div>

        <h2 className="font-heading text-48 leading-100 mt-40 mb-4">
          Keep Updated
        </h2>
        <p className="text-18 mb-16">
          If you&apos;d to be notified when the Memory Book is ready, please
          leave your name, phone and/or email below, and we&apos;ll let you know when
          it&apos;s ready.
        </p>
        <UpdateForm />
      </div>
    </>
  );
}

export default MemoriesPage;

import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import FrontImg from "./front.webp";
import LineImg from "./line.png";

function IndexPage() {
  return (
    <>
      <Navbar selected="home" />
      <div className="container text-center mb-32">
        <div className="font-heading text-[60px] font-medium leading-[105%] pt-40 mb-32">
          <h2>Celebrating the life of</h2>
          <h1 className="text-[85px] font-ranie">Ranie</h1>
        </div>
        <img src={FrontImg} className="w-[100%] max-w-[400px] block mx-auto mb-16" />
        <div className="font-subheading text-[32px] mb-8">
          14th May 1952 - 11th April 2024
        </div>
        <img src={LineImg} className="max-w-[300px] block mx-auto mb-20 w-[100%]" />
        <div className="text-16 max-w-[420px] mx-auto text-balance mb-16 hidden md:block">
          Please use the two buttons below for funeral details
          and to contribute your memories, photos and videos to Ranie&apos;s memory book.
        </div>
        <div className="flex flex-col items-stretch md:items-center md:flex-row gap-12 items-center justify-center">
          <Link to={`/funeral`} className="btn">
            Funeral Details
          </Link>
          <Link to={`/memories`} className="btn">
            Memory Book
          </Link>
        </div>
      </div>
    </>
  );
}

export default IndexPage;

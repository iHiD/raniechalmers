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
        <p className="text-16 max-w-[550px] mx-auto text-balance mb-16">
          With heartfelt gratitude, thank you for the memories that you have shared with us over these past months of our beloved Ranie (Mum). We’ve gathered all of your stories and photos in the Memory Book below, including those shown during her funeral service, so that we can remember and celebrate her warmth and spirit together. xxxx
        </p>
    
        <p className="text-16 max-w-[550px] mx-auto text-balance mb-16">
          You can view and download a copy to keep here: 
        </p>
    

        <div className="mb-20 flex flex-col items-stretch md:items-center md:flex-row gap-12 items-center justify-center">
          <Link to={`/memories`} className="btn">
            View Memory Book
          </Link>
          <a href="http://dvtd0lcqbpu61.cloudfront.net/memory-book.pdf" download target="_blank" className="btn">
            Download Memory Book
          </a>

        </div>
        <p className="text-16 max-w-[550px] mx-auto text-balance mb-16">
          You can still contribute your stories, thoughts, photos and videos of Ranie by emailing them to Nicole at <a class="text-[blue] underline" href="mailto:nicolechalmers1+memorybook@gmail.com">nicolechalmers1+memorybook@gmail.com</a>.
        </p>
      </div>
    </>
  );
}

export default IndexPage;

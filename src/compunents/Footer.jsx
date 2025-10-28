import React from "react";
import Container from "./Container";

const footer = () => {
  return (
    <div className="w-full h-auto bg-black mt-5">
      <Container>
        <div className="max-w-[1050px] text-white flex flex-col lg:flex-row ">
          <div className=" mx-auto grid col-span-1 my-2 lg:my-10">
            <h2 className="font-bold">Ph-University</h2>
          </div>
          <div className="mx-auto grid col-span-1 my-2 lg:my-10">
            <h2 className="">University</h2>
            <span>About Us</span>
            <span>Our Mission</span>
            <span>Contact Administrator </span>
          </div>
          <div className="mx-auto grid col-span-1 my-2 lg:my-10">
            <h1>Services</h1>
            <span>Education & Services</span>
            <span>Student Store</span>
            <span>Download app</span>
          </div>
          <div className="mx-auto grid col-span-1 my-2 lg:my-10">
            <h2>Information</h2>
            <span>Privacy Policy</span>
            <span>Terms % Condition</span>
          </div>
          <div className="mx-auto grid col-span-1 my-2 lg:my-10">
            <h2>Social Links</h2>
            <a href="">@Ph-Assignment System</a>
            <a href="">@Ph-Assignment System</a>
            <a href="">@Ph-Assignment System</a>
            <a href="">@Ph-Assignment System</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default footer;

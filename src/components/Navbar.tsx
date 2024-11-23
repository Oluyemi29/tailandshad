import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center px-5 py-3 text-black bg-slate-100">
      <h1 className="text-2xl font-bold">Test</h1>
      <div className="md:flex hidden items-center gap-5">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Services</h1>
      </div>
      <div className="flex gap-5">
        <Button className="md:block hidden">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;

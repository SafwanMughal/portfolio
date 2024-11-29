import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-darkBlue text-lightBlue p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Safwan Mughal</h1>
      <div>
      <a href="#about" className="mx-4">About</a>
        <a href="#skills" className="mx-4">Skills</a>
        <a href="#contact" className="mx-4">Contact</a>
        
      </div>
    </nav>
  );
};

export default Navbar;
import Image from "next/image";
import React, { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div className="transform transition duration-500 ease-in-out hover:-translate-y-1 text-pink-600 font-bold text-2xl cursor-pointer flex items-center font-serif">
        <span className="text-3xl flex text-pink-600 mr-2 pt-3">
          <Image
            src="/mindtracer.svg"
            className="invert"
            width={48}
            height={48}
            alt="Logo"
          />
        </span>
        <h1>MindTracer</h1>
      </div>
    );
  }
}

export default Logo;

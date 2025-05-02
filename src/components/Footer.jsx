import React from "react";

export default function Footer() {
  return (
    <div className="flex text-[#A09FB1] gap-1 px-4 pb-4 justify-center items-center">
      <p>Created by</p>
      <a
        href="https://github.com/jacob-guerrero"
        className="font-bold cursor-pointer"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        JacobGuerrero
      </a>
    </div>
  );
}

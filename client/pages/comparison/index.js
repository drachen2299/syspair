import React from "react";

export default function Comparisons() {
  return (
    <div className="grid grid-cols-2 grid-rows-5 gap-4 mx-auto my-0 max-w-3xl pt-4">
      <div className="inline-block text-center border-box border">
        <h3>Common Languages</h3>
        <ul className="p-4">
          <li>Python</li>
          <li>Java</li>
          <li>Golang</li>
          <li>Ruby</li>
          <li>ASP.NET</li>
        </ul>
      </div>
      <div className="inline-block text-center border-box border">
        <h3>Common Languages</h3>
        <ul className="pt-4">
          <li>Python</li>
          <li>Java</li>
          <li>Golang</li>
          <li>Ruby</li>
          <li>ASP.NET</li>
        </ul>
      </div>
      <form className="col-span-2 grid grid-rows-2 grid-cols-4" action="">
        <input className="row-start-1 row-end-2 col-end-2" type="text" />
        <button className="row-start-1 row-end-2 col-end-3">search</button>
        <input className="col-2 col-end-4" type="text" />
        <button className="col-span-1 col-end-5">search</button>
        <button>submit</button>
      </form>
    </div>
  );
}

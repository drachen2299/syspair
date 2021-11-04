import React from "react";
import Link from 'next/link';

export default function UserResults() {
  
  return (
    <div className="flex flex-col w-[600px] mx-auto justify-center text-center">
      <h1 className="text-6xl font-bold">Syspair</h1>
      <h2>Here are your answers:</h2>
      {/* return results of the POST request */}
      <h3>Language</h3>
      <h3>Age-Range</h3>
      <h3>Industry</h3>
      <h3>Employment Status</h3>

      <p>are you happy with these results?</p>
      <div className=" mt-60">
        <button className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50">
          Edit
        </button>
        <button className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50">
          Delete
        </button>
        <Link href="/results">
          <button className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { findUserByName } from "../../services";
import { useState, useEffect } from "react";
import Edit from "./edit";

export default function UserResults() {
  const router = useRouter();
  const query = Object.keys(router.query);
  const username = [...query].shift();
  const [user, setUser] = useState({});
  useEffect(() => {
    findUserByName(username).then((fetchedUser) => setUser(fetchedUser));
  }, []);

  const handleEditClick = (e) => {
    e.preventDefault();
    router.push({ pathname: "/user-results/edit", query: username });
  };

  const handleDelete = (e) => {};
  console.log(user);
  return (
    <div className="flex flex-col w-[600px] mx-auto justify-center text-center">
      <h1 className="text-6xl font-bold">Syspair</h1>
      <h2>Here are your answers:</h2>
      {/*return results of the POST request */}
      <h3>Username: {user.username}</h3>
      <h3>Language: {user.language_id?.name}</h3>
      <h3>Age-Range: {user.age_range}</h3>
      <h3>Industry: {user.industry}</h3>
      <h3>Employment Status: {user.type_of_dev}</h3>

      <p>are you happy with these results?</p>
      <div className=" mt-60">
        <button
          className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50">
          Delete
        </button>

        <button className="m-2 bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50"
        onClick={(e) => e.preventDefault(router.push({pathname: '/results', query: username}))}>
          Continue
        </button>
      </div>
    </div>
  );
}

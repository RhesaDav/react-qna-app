import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: e.target[0].value,
      difficult: e.target[1].value.toLowerCase(),
    };
    if (userData.name !== "" && userData.difficult !== "") {
      console.log(userData);
      localStorage.setItem('userData', JSON.stringify(userData))
      navigate("/question");
    } else {
      setErrorMsg("Please Fill All Fields");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 my-28 justify-center items-center">
        {errorMsg ? <p class="text-red-500 font-bold">{errorMsg}!</p> : ""}
        <div className="flex gap-5 justify-center items-center">
          <input
            type="text"
            className="bg-gray-200 rounded p-4 focus:outline-none focus:shadow-outline"
            name="name"
            placeholder="Name..."
          />

          <select className="bg-gray-200 rounded p-4 focus:outline-none focus:shadow-outline">
            <option>Easy</option>
            <option>Medium</option>
            <option>Difficult</option>
          </select>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}

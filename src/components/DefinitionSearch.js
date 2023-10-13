import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function DefinitionSearch() {
      const [word, setWord] = useState("");
      const navigate = useNavigate();
  return (
    <>
      <form
        className="flex space-between space-x-2 max-w-[300px]"
        onSubmit={() => {
          navigate("/dictionary/" + word);
        }}
      >
        <input
          className="shrink min-w-0 focus:outline-none rounded p-1"
          placeholder="Dinosaur"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button className="bg-purple-600 text-white hover:bg-purple-700 font-bold py-1 px-2 rounded">Search</button>
      </form>
    </>
  );
}

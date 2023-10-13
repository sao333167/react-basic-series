import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form
        className="flex justify-center space-x-2 max-w-[300px]"
        onSubmit={() => {
          navigate("/definition/" + word);
        }}
      >
        <input
          className="shrink min-w-0 focus:outline-none rounded p-2"
          placeholder="Dinosaur"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button className="btn btn-info btn-sm mx-2">Search</button>
      </form>
    </>
  );
}

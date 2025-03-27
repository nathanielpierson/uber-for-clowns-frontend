import axios from "axios"
import { ClownsIndex } from "./ClownsIndex"
import { useEffect, useState } from "react"

export function ClownsPage() {
  const [clowns, setClowns] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/clowns.json").then((response) => {
      console.log(response.data);
      setClowns(response.data);
    });
  };

  useEffect(handleIndex, {});

  return (
    <main>
      <ClownsIndex clowns={clowns}/>
    </main>
  )
}
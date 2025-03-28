import axios from "axios"
import { useEffect, useState } from "react"
import { ClownsIndex } from "./ClownsIndex"
import { ClownsShow } from "./ClownsShow";
import { Modal } from "./Modal";

export function ClownsPage() {
  const [clowns, setClowns] = useState([]);
  const [isClownsShowVisible, setIsClownsShowVisible] = useState(false);
  const [currentClown, setCurrentClown] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/clowns.json").then((response) => {
      console.log(response.data);
      setClowns(response.data);
    });
  };

  const handleShow = (clown) => {
    console.log("Handle Show", clown);
    setIsClownsShowVisible(true);
    setCurrentClown(clown);
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <ClownsIndex clowns={clowns} onShow={handleShow} />
      <Modal show={isClownsShowVisible} onClose={() => setIsClownsShowVisible(false)}>
        <ClownsShow clown={currentClown} />
      </Modal>
    </main>
  )
}
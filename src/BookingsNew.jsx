import { Rating, StickerStar, Heart } from '@smastrom/react-rating';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Map, Marker } from "pigeon-maps"

export function BookingsNew ({onCreate}) {
  const [rating, setRating] = useState(0) // Initial value
  const [clowns, setClowns] = useState([])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    const form = event.target;
    window.location.href = "./bookings"
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  const handleGetClowns = () => {
    axios.get("http://localhost:3000/clowns.json").then(response => {
      console.log(response.data)
      setClowns(response.data)
    })
  }

  useEffect(handleGetClowns, [])

  const myStyles = {
    itemShapes: Heart,
    activeFillColor: '#eb4034',
    inactiveFillColor: '#cc93c8'
  }

  const [mapData, setMapData] = useState([37.7749, -122.4194])
    // send data to rails
    // send id rather than name
    // make dynamic from rails db data


  return (
    <div id ="bookings-new">
      <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <h1>book a clown</h1>
        <p>
          <select name="clown_id">
            {clowns.map(clown => (
              <option value={clown.id} key={clown.id}>{clown.name}</option>
            ))}
          </select>
        </p>
        <p>
          {/* clown id <input name="clown_id" type="text" /> */}
        </p>
        
        <p> duration <input name="duration" type="text"/>
        </p>
        <p> <input name="rating" type="text" value={rating}   />
        </p>
        <Rating itemStyles={myStyles} style={{ maxWidth: 250 }} value={rating} onChange={setRating} halfFillMode="box" orientation={'horizontal'} />
        <button type="submit">Create</button>
        <Map height={300} defaultCenter={mapData} defaultZoom={11}>
          <Marker width={50} anchor={mapData} />
          {/* <Marker width={50} anchor={[37.7749, -122.458]} /> */}
          <img src='/clown.png' width={500} height={158} alt='' />
          <Marker 
            width={50}
            anchor={[37.7749, -122.458]} 
            color={'red'} 
            onClick={() => setMapData([31.7619, -106.4850])} 
          />
        </Map>     
        
        {/* <Button /> */}
      </form>
    </div>
)
  }
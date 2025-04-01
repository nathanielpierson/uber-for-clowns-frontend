export function ClownsIndex({ clowns, onShow }) {
  return (
    <div>
      <h1>RedNose Rides</h1>
      {clowns.map((clown) => (
        <div key={clown.id} className="card text-center mb-3" style={{width: '18rem;'}}>
          <div className="card-body">
            <h3 className="card-title">Name: {clown.name}</h3>
            <p className="card-text">Specialty: {clown.specialty}</p>
            <p className="card-text">Rates: {clown.rates}</p>
            <button className="btn btn-primary" onClick={() => onShow(clown)}>More Info</button>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        // <div key={clown.id}>
        //   <h2>name: {clown.name}</h2>
        //   <p>specialty: {clown.specialty}</p>
        //   <p>rates: {clown.rates}</p>
        //   <button onClick={() => onShow(clown)}>More Info</button>
        // </div>
      ))}
    </div>
  );
}
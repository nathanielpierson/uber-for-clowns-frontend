export function ClownsIndex({ clowns, onShow }) {
  return (
    <div>
      <h1>RedNose Rides</h1>
      {clowns.map((clown) => (
        <div key={clown.id}>
          <h2>name: {clown.name}</h2>
          <p>specialty: {clown.specialty}</p>
          <p>rates: {clown.rates}</p>
          <button onClick={() => onShow(clown)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
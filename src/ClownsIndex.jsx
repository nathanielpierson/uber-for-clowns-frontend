export function ClownsIndex({ clowns }) {
  return (
    <div>
      <h1>RedNose Rides ({ clowns })</h1>
      {clowns.map((clown) => (
        <div key={clown.id}>
          <h2>{clown.name}</h2>
          <p>specialty: {clown.specialty}</p>
          <p>rates: {clown.rates}</p>
        </div>
      ))}
    </div>
  );
}
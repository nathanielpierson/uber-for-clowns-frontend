export function ClownsShow({ clown }) {
  return (
    <div>
      <h1>Clown Information</h1>
      <h4>Clown Name: {clown.name}</h4>
      <p>Specialty: {clown.specialty}</p>
      <p>Clown Rates: ${clown.rates} per day</p>
    </div>
  )
}
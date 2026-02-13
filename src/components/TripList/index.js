import React, { useEffect, useState } from "react";

export default function TripList() {
  let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("http://localhost:3010/trips");
  

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        // never use async/await in useEffect, it will cause an infinite loop
      });
  }, [url]); // empty array means this will only run once when the component mounts
  console.log(trips);

  return (
    <div>
      <h1>Ready To Go?</h1>
      <button onClick={() => setUrl('http://localhost:3010/trips')}>All</button>
      <button onClick={() => setUrl('http://localhost:3010/trips?location=Myanmar')}>Only Myanmar</button>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price} mmk</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

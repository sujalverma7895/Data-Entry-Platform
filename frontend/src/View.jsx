import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./View.css"; // Import the CSS file

const View = () => {
  const [data, setData] = useState();
  let { id } = useParams();
 let nevigate=useNavigate()
  useEffect(() => {
    // Fetch data based on the ID from the URL
    fetch(`http://localhost:3000/data/${id}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log("Error in fetching data", err));
  }, [id]);
console.log(data);
 const back=()=>{
nevigate("/Dashboard")
 }
  return (
    
    <div className="view-container">
      {data ? (
        <div className="view-card">
          <h2 className="view-title">User Information</h2>
          <div className="view-content">
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Phone:</strong> {data.phone}
            </p>
            <p>
              <strong>Address:</strong> {data.address}
            </p>
            <p>
              <strong>Gender:</strong> {data.gender}
            </p>
            <p>
              <strong>Age:</strong> {data.age}
            </p>
            <p>
              <strong>Blood group:</strong> {data.bloodgroup}
            </p>
          </div>
          <button onClick={back}>back</button>

        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default View;

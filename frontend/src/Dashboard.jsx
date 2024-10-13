import { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch the data from backend
  const get = () => {
    fetch("http://localhost:3000/get")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log("Error in fetching data", err));
  };
  const back = () => {
    nevigate("/")
  }
  useEffect(() => {
    get();
  }, []);
  const edit = (id) => {
    navigate(`/edit/${id}`)

  }
const gender = (value)=>{
  
  fetch(`http://localhost:3000/filter/?gender=${value}`)
  .then((responce)=> responce.json())
  .then((result)=> setData(result))
}


  // Function to delete data by ID
  const deleteData = (id) => {
    fetch(`http://localhost:3000/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => get())
      .catch((err) => console.log("Error in deleting data", err));
  };

  // Function to navigate to view page
  const task = (index) => {
    navigate(`/view/${index}`);
  };

  return (
    <div className="dashboard-container">
      <button onClick={back}>Back</button>
      <h1 className="dashboard-title">User Dashboard</h1>
      <select onChange={(e)=>gender(e.target.value)}>
        <option value={""}>gender</option>
        <option >male</option>
        <option >female</option>
      </select>
      <div className="data-wrapper">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="data-card">
              <h2 className="data-name">{item.name}</h2>
              <p className="data-email">Email: {item.email}</p>
              <p className="data-phone">Phone: {item.phone}</p>
              <p className="data-address">Address: {item.address}</p>
              <div className="data-buttons">
                <button className="btn delete-btn" onClick={() => deleteData(item._id)}>Delete</button>
                <button className="btn view-btn" onClick={() => task(item._id)}>View</button>
                <button className="btn edit-btn" onClick={() => edit(item._id)}>Edit</button>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

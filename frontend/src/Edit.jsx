import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const nevigate = useNavigate()
    const { id } = useParams();
    useEffect(() => {
        // Fetch data based on the ID from the URL
        fetch(`http://localhost:3000/data/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Populate form fields with the fetched data
                document.getElementById('name').value = data.name;
                document.getElementById('age').value = data.age;
                document.getElementById('address').value = data.address;
                document.getElementById('phone').value = data.phone;
                document.getElementById('email').value = data.email;
                document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
            })
            .catch((err) => console.log("Error in fetching data", err));
    }, [id])
    const submit = () => {
        const name = document.getElementById('name').value
        const age = document.getElementById('age').value
        const address = document.getElementById('address').value
        const phone = document.getElementById('phone').value
        const email = document.getElementById('email').value
        const gender = document.querySelector('input[name="gender"]:checked').value
        const bloodgroup = document.getElementById('bloodgroup').value
        fetch(`http://localhost:3000/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, age, address, phone, email, gender, bloodgroup
            }),
        }).then((res) => { return res.json({ message: "success" }) })
            .catch(() => {
                console.log("Error");

            })
        nevigate("/Dashboard")
    }
    return <div>

        <div className="form-container">
            <h2 className="form-title">User Registration Form</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone no:</label>
                <input type="text" id="phone" name="phone" className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-input" />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <div className="gender-options">
                    <input type="radio" id="male" name="gender" value="male" className="form-radio" /> Male
                    <input type="radio" id="female" name="gender" value="female" className="form-radio" /> Female
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="bloodgroup">Blood Group:</label>
                <input type="text" id="bloodgroup" name="bloodgroup" className="form-input" />
            </div>
            <button onClick={submit} className="form-button">Submit</button>
        </div>
    </div>
}

export default Edit;
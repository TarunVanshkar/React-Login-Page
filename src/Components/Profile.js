import React, {useState, useEffect} from "react";

const Profile = () => {

    let [user, setUser] = useState("");
    let [error, setError] = useState("");

    // To run useEffect only once at the time of loading of page
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(storedUser.id){
            fetch(`https://dummyjson.com/users/${storedUser.id}`)
            .then(response => response.json())    // Always ise response.json(), not response.JSON()
            .then((data) => {
                // console.log(data);
                setUser(data);
            })
            .catch((error) => {
                setError("Network error occurred while fetching data");
                console.log(error);
            })
        }
    },[])

    return (
        <div className="profile-container">
            <nav>
                <h1>Profile</h1>
            </nav>
            
            {
                user && (
                    <div className="details-container">
                        <img src={user.image} alt={user.username}/>
                        <h2 id="username">Username : {user.username}</h2>
                        <br/>
                        <h3>Work Details:</h3>
                        <p>Company Name : {user.company.name}</p>
                        <p>Department : {user.company.department}</p>
                        <p>Position : {user.company.title}</p>
                        <p>Company Address : {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.postalCode}</p>
                        <br/>

                        <h3>Bank Details</h3>
                        <p>Currency : {user.bank.currency}</p>
                        <p>Card Type : {user.bank.cardType}</p>
                        <p>Card Number : {user.bank.cardNumber}</p>
                        <p>Card Expiry : {user.bank.cardExpire}</p>
                        <br/>

                        <h3>Personal Details</h3>
                        <p>First Name : {user.firstName}</p>
                        <p>Last Name : {user.lastName}</p>
                        <p>Maiden Name : {user.maidenName}</p>
                        <p>Phone Number : {user.phone}</p>
                        <p>Personal Address : {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}</p>
                        <p>University : {user.university}</p>
                        <p>Age : {user.age}</p>
                        <p>Date of Birth : {user.birthDate}</p>
                        <p>Gender : {user.gender}</p>
                        <p>Height : {user.height}</p>
                        <p>Blood Group : {user.bloodGroup}</p>
                        <p>Eye Color : {user.eyeColor}</p>
                        <p>Hair Color : {user.hair.color}</p>
                        <p>Hair Type : {user.hair.type}</p>
                    </div>
                )
            }
            {
                error && (
                    <p>{error}</p>
                )
            }

            <footer id="footer">
                <p>© All rights reserved</p> 
            </footer>
        </div>
    )
}

export default Profile;
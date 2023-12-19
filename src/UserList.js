import {React , useState, useEffect} from 'react'
import './User.css'
import  axios from 'axios'

const UserList = () => {
    // useState to store data and store the comming error
    const [users,setUsers] = useState([])
    const [error, setError] = useState(null)

    // fetch data with use effect from the api using axios 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            setUsers(response.data)
        }).catch(err => setError(err))
    },[])

    //  add a data from the api in the card
    return (
        <div>
            { users.map((user) =>(
            <div className="flip-card">
                <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">{user.name}</p>
            <p className="tittle">{user.username}</p>
        </div>
        <div className="flip-card-back">
            <p ><span>E-MAIL :</span>  {user.email}</p>
            <p><span>STREET : </span> {user.address.street}</p>
            <p><span>CITY :</span> {user.address.city}</p>
            <p><span>ZIP CODE :</span> {user.address.zipcode}</p>
            <p><span>GEO-LAT :</span> {user.address.geo.lat}</p>
            <p><span>GEO-ING :</span> {user.address.geo.lng}</p>
            <p><span>PHONE :</span> {user.phone}</p>
            <p><span>WEBSITE :</span> {user.website}</p>
            <p><span>NAME-COMPANY :</span> {user.company.name}</p>
            <p><span>CATCH-PHRASE : </span>{user.company.catchPhrase}</p>
            <p><span>BS :</span> {user.company.bs}</p>
        </div> 
    </div>
    </div>))}
    </div>
    )
}

export default UserList

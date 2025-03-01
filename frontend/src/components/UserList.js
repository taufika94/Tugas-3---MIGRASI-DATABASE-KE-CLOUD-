import React, {useState, useEffect} from "react";
import axios from "axios";


const UserList = () => {
    const[users, setUser] = useState([]);

    useEffect(() => {
        getUsers() ;
    },[]);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        console.log(response.data);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="colum is-half">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;

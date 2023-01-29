import axios from 'axios';
import { useState, useEffect } from 'react';
import SubHeader from "../../../components/SubHeader";


const List = () => {
    const [users, setUsers] = useState([]);
    const api_url = `${process.env.API_URL}` + 'user/list';
    const getUsers = async () => {
        let response = await axios.get(api_url);
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <SubHeader title="User List" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map((user, index) => {
                                            return (
                                                <tr key={user.userId}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.firstName + ' ' + user.lastName}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default List

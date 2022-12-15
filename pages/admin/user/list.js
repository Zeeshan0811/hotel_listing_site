import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";

export async function getStaticProps(context) {
    const users = await fetch("http://localhost:3000/api/user/list")
        .then(response => response.json())
        .catch(error => console.log('error', error));


    return {
        props: { users }
    }
};


export default function list({ users }) {
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
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.users.map((user) => (
                                            <tr key={user.userId}>
                                                <td>{user.userId}</td>
                                                <td>{user.firstName + ' ' + user.lastName}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        ))}
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

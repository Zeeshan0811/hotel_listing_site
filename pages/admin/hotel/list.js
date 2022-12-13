import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/hotel');
    const hotels = await res.json();

    return {
        props: { hotels }
    };
}

export default function list({ hotels }) {
    // console.log(hotels.hotels[0].name);
    return (
        <>
            <SubHeader title="Hotel List" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Hotel</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* {hotels.map((hotel) => <h1>post</h1>)} */}
                                        {hotels.hotels.map((hotel) => (
                                            <tr key={hotel.hotel_id}>
                                                <td>{hotel.hotel_id}</td>
                                                <td>{hotel.name}</td>
                                                <td>{hotel.phone}</td>
                                                <td>{hotel.email}</td>
                                                <td>{hotel.website}</td>
                                                <td></td>
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

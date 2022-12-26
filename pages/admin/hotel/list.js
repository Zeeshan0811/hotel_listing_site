import axios from 'axios';
import { useState, useEffect } from 'react';
import SubHeader from "../../../components/SubHeader";

// export async function getStaticProps(context) {
//     const api_url = `${process.env.API_URL}` + 'hotel';
//     const res = await fetch(api_url);
//     const hotels = await res.json();

//     return {
//         props: { hotels }
//     };
// }


// export default function List() {
const List = () => {
    const [hotels, setHotels] = useState([]);
    const api_url = `${process.env.API_URL}` + 'hotel';
    const getHotels = async () => {
        let response = await axios.get(api_url);
        setHotels(response.data);
    }

    useEffect(() => {
        getHotels()
    }, [])

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
                                        {hotels && hotels.map((hotel, index) => {
                                            return (
                                                <tr key={hotel.hotel_id}>
                                                    <td>{index + 1}</td>
                                                    <td>{hotel.name}</td>
                                                    <td>{hotel.phone}</td>
                                                    <td>{hotel.email}</td>
                                                    <td>{hotel.website}</td>
                                                    <td></td>
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

import axios from 'axios';
import { useState, useEffect } from 'react';
import SubHeader from "../../../components/SubHeader";
import Action from "../../../components/Action";

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
    const [isLoading, setIsLoading] = useState(false)
    const [reload, setReload] = useState(0)
    const api_url = `${process.env.API_URL}` + 'hotel';
    const getHotels = async () => {
        let response = await axios.get(api_url);
        setHotels(response.data);
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(getHotels, 3000);

        // getHotels()
        // console.log(reload);
    }, [reload])

    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!hotels) {
        return <p>No List to show</p>
    }

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
                                                    <td>
                                                        <Action index_key={hotel.hotel_id} edit_link={'/supervision/hotel/edit'} delete_link={'delete/hotel/'} setReload={(setReload)} />
                                                    </td>
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

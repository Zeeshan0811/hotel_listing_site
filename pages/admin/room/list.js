import { useState, useEffect } from 'react';
import axios from "axios";
import SubHeader from "../../../components/SubHeader";
import Action from "../../../components/Action";
import Loading from "../../../components/Loading";
import NotFound from "../../../components/NotFound";

const List = () => {
    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const api_get_room = `${process.env.API_URL}` + 'room';


    const getRooms = async () => {
        await axios.get(api_get_room, { params: { hotel_id: 1 } })
            .then((res) => {
                setTimeout(() => {
                    if (res.data) {
                        setRooms(res.data);
                        setIsLoading(false);
                    } else {
                        setRooms(null);
                    }
                }, 1000);
            });
    }



    useEffect(() => {
        setIsLoading(true);
        getRooms()
    }, [])


    return (
        <>
            <SubHeader title="Room List" />

            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Room</th>
                                            <th>Area</th>
                                            <th>Guest</th>
                                            <th>Beds</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (isLoading) ? (
                                                <tr><td colSpan={7}><Loading /></td></tr>
                                            ) : (
                                                rooms && rooms.map((room, index) => {
                                                    return (
                                                        <tr key={room.room_id}>
                                                            <td>{index + 1}</td>
                                                            <td>{room.title}</td>
                                                            <td>{room.area}</td>
                                                            <td>{room.guest}</td>
                                                            <td>{room.beds}</td>
                                                            <td>{room.price}</td>
                                                            <td>
                                                                <button type="button" className="btn btn-success p-1" title="Book Now" onClick={() => Router.push('/admin/room/book/' + room.room_id)}>
                                                                    <i className="icon-laptop m-1"></i>
                                                                </button>
                                                                <Action index_key={room.room_id} edit_link={'/admin/room/edit/'} delete_link={'delete/room/'} />
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                        }
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
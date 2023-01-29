import { useState } from 'react';
import Router from 'next/router';
import axios from "axios";
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function Add() {
    const api_create_room_url = `${process.env.API_URL}` + 'room';
    const [state, setState] = useState({
        hotel_id: 1,
        title: "",
        short_descritpion: "",
        description: "",
        beds: 0,
        area: 0,
        guest: 0,
        price: 0,
        service_list: {
            sea_view: false,
            hill_view: false,
            laundry: false,
            breakfast: false,
            television: false,
            wifi: false,
            swimming_pool: false,
            beach_loungers: false,
        }

    });

    function handleChange(e, type) {
        let res = !state.service_list[e.target.name];
        if (type == "service_list") {
            setState({ ...state, service_list: { ...state.service_list, [e.target.name]: res } });
        } else {
            setState({ ...state, [e.target.name]: e.target.value });
        }
        console.log(state.service_list);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios(token_config("POST", api_create_room_url, state))
            .then((res) => {
                if (res.data.room_id) {
                    swal_alert('success', 'Added', 'New Hotel added successfully!');
                    setTimeout(() => Router.push('/admin/room/list'), 3000);
                } else {
                    swal_alert('error', 'Error', 'Something went wrong! Please try again...');
                }
            });
    }

    return (
        <>
            <SubHeader title="Add Room" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-6" type="text" label="Title" name="title" value={state.title} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-12" type="text" label="Sub Title" name="short_descritpion" value={state.short_descritpion} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-3" type="number" label="Area (Ft²)" name="area" value={state.area} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-3" type="number" label="Guest" name="guest" value={state.guest} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-3" type="number" label="Price per night" name="price" value={state.price} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-3" type="number" label="Beds" name="beds" value={state.beds} onchange={e => handleChange(e, 'room')} />
                                        <InputField column="col-md-12" type="textarea" label="Description" name="description" value={state.description} onchange={e => handleChange(e, 'room')} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>Services</h4>
                                        </div>
                                        <InputField column="col-md-3" type="checkbox" label="Sea View" name="sea_view" value={state.service_list.sea_view} checked={state.service_list.sea_view} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Hill View" name="hill_view" value={state.service_list.hill_view} checked={state.service_list.hill_view} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Laundry" name="laundry" value={state.service_list.laundry} checked={state.service_list.laundry} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Breakfast" name="breakfast" value={state.service_list.breakfast} checked={state.service_list.breakfast} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Television" name="television" value={state.service_list.television} checked={state.service_list.television} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Wi-fi" name="wifi" value={state.service_list.wifi} checked={state.service_list.wifi} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Swimming Pool" name="swimming_pool" value={state.service_list.swimming_pool} checked={state.service_list.swimming_pool} onchange={e => handleChange(e, 'service_list')} />
                                        <InputField column="col-md-3" type="checkbox" label="Beach Loungers" name="beach_loungers" value={state.service_list.beach_loungers} checked={state.service_list.beach_loungers} onchange={e => handleChange(e, 'service_list')} />

                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary">Submit <i className="icon-paperplane ml-2"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

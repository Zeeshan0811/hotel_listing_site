import { useState, useEffect } from 'react';
import axios from "axios";
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";
import Router from 'next/router';

export default function Add() {
    const api_hotel_url = `${process.env.API_URL}` + 'hotel';
    const api_user_url = `${process.env.API_URL}` + 'user/create';
    const api_rel_url = `${process.env.API_URL}` + 'relation/hotel_user';

    const [hotel_id, setHotel_id] = useState(null);
    const [user_id, setUser_id] = useState(null);
    const [state, setState] = useState({
        hotel: {
            name: "",
            phone: "",
            phone_2: "",
            fax: "",
            email: "",
            website: "",
            address: "",
            city: "",
            country: "Bangladesh",
        }, user: {
            type: 2,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            rawPass: "",
            re_password: "",
        }, relation: {
            rel_id: 0,
            rel_type: 2,
            hotel_id: 0,
            user_id: 0,
        }, error: {
            hotel_name_empty: false,
            hotel_email_empty: false,
            user_email_empty: false,
            password_empty: false,
            password_mismatch: false,
        }

    });


    function token_config(api_url, data) {
        let config = {
            method: "POST",
            url: api_url,
            data: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        }
        return config;
    }

    function handleChange(e, type) {
        if (type == "hotel") {
            setState({ ...state, hotel: { ...state.hotel, [e.target.name]: e.target.value } });
        } else if (type == "user") {
            setState({ ...state, user: { ...state.user, [e.target.name]: e.target.value } });
        } else {
            // setState({ ...state, [e.target.name]: e.target.value });
            console.log("Nothing");
        }
    }



    async function handleSubmit(e) {
        e.preventDefault();
        let check_error_return = check_error();
        if (check_error_return != true) {
            return false;
        }

        await axios(token_config(api_hotel_url, state.hotel))
            .then((res_hotel) => { setHotel_id(res_hotel.data.hotel_id) });

        await axios(token_config(api_user_url, state.user))
            .then((res_user) => { setUser_id(res_user.data.userId) });
    }

    function check_error() {

        let check_error_return = true;
        setState({ ...state, error: { ...state.error, hotel_name_empty: false, hotel_email_empty: false, user_email_empty: false, password_empty: false, password_mismatch: false } });

        //  Hotel Name Empty 
        if (state.hotel.name == "") {
            setState({ ...state, error: { ...state.error, hotel_name_empty: true } });
            noty_alert('error', 'Hotel Name is empty!');
            check_error_return = false;
        }


        //  Hotel Email Empty 
        if (state.hotel.email == "") {
            setState({ ...state, error: { ...state.error, hotel_email_empty: true } });
            noty_alert('error', 'Hotel email is empty!');
            check_error_return = false;
        }

        // User Email empty
        if (state.user.email == "") {
            setState({ ...state, error: { ...state.error, user_email_empty: true } });
            noty_alert('error', 'User email is empty!');
            check_error_return = false;
        }

        //  Empty Password 
        if (state.user.rawPass == "") {
            setState({ ...state, error: { ...state.error, password_empty: true } });
            noty_alert('error', 'Password empty!');
            check_error_return = false;
        }

        // Password mismatch
        if (state.user.rawPass != state.user.re_password) {
            setState({ ...state, error: { ...state.error, password_mismatch: true } });
            noty_alert('error', 'Password Doesnt Match!');
            check_error_return = false;
        }

        return check_error_return;
    }

    function create_relation() {
        let rel_data = {
            rel_type: 2,
            hotel_id,
            user_id,
        }

        axios(token_config(api_rel_url, rel_data)).then((res_rel) => {
            console.log('New Relation Id: ' + res_rel.data.rel_id);
            if (res_rel.data.rel_id) {
                swal_alert('success', 'Added', 'New Hotel added successfully!');
                setTimeout(() => Router.push('/admin/hotel/list'), 3000);
            } else {
                swal_alert('error', 'Error', 'Something went wrong!');
            }
            setHotel_id(null);
            setUser_id(null);
        });

    }

    useEffect(() => {
        if (hotel_id && user_id) {
            create_relation();
        }
    }, [hotel_id, user_id]);




    return (
        <>
            <SubHeader title="Add Hotel" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-4" type="text" label="Hotel Name" name="name" value={state.hotel.name} onchange={e => handleChange(e, 'hotel')} error={state.error.hotel_name_empty} />
                                        <InputField column="col-md-4" type="text" label="Phone" name="phone" value={state.hotel.phone} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Phone 2" name="phone_2" value={state.hotel.phone_2} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Email" name="email" value={state.hotel.email} onchange={e => handleChange(e, 'hotel')} error={state.error.hotel_email_empty} />
                                        <InputField column="col-md-4" type="text" label="Website" name="website" value={state.hotel.website} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Address" name="address" value={state.hotel.address} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="City" name="city" value={state.hotel.city} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Country" name="country" value={state.hotel.country} onchange={e => handleChange(e, 'hotel')} />
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <InputField column="col-md-4" type="text" label="First Name" name="firstName" value={state.user.firstName} onchange={e => handleChange(e, 'user')} />
                                        <InputField column="col-md-4" type="text" label="Last Name" name="lastName" value={state.user.lastName} onchange={e => handleChange(e, 'user')} />
                                        <InputField column="col-md-4" type="text" label="Phone" name="phone" id="user_phone" value={state.user.phone} onchange={e => handleChange(e, 'user')} />
                                        <InputField column="col-md-4" type="email" label="Email" name="email" id="user_email" value={state.user.email} onchange={e => handleChange(e, 'user')} error={state.error.user_email_empty} />
                                        <InputField column="col-md-4" type="password" label="Password" name="rawPass" value={state.user.rawPass} onchange={e => handleChange(e, 'user')} error={state.error.password_mismatch} />
                                        <InputField column="col-md-4" type="password" label="Re-Password" name="re_password" value={state.user.re_password} onchange={e => handleChange(e, 'user')} error={state.error.password_mismatch} />
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
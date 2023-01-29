import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";
import Router from 'next/router';

export default function Add() {
    const router = useRouter();
    const api_get_hotel = `${process.env.API_URL}` + 'hotel';
    const api_update_hotel = `${process.env.API_URL}` + 'hotel';

    const [state, setState] = useState({
        hotel_id: 0,
        name: "",
        phone: "",
        phone_2: "",
        fax: "",
        email: "",
        website: "",
        address: "",
        city: "",
        country: "",
        error: {
            hotel_name_empty: false,
            hotel_email_empty: false
        }
    });

    function handleChange(e, type) {
        setState({ ...state, [e.target.name]: e.target.value });
    }



    async function handleSubmit(e) {
        e.preventDefault();
        console.log(state);
        let check_error_return = check_error();
        if (check_error_return != true) {
            return false;
        }
        await axios(token_config("PUT", api_update_hotel, state))
            .then((res_hotel) => {
                console.log(res_hotel);
                if (res_hotel.data.hotel_id) {
                    swal_alert('success', 'Updated', 'Hotel is updated successfully!');
                    setTimeout(() => Router.reload(window.location.pathname), 3000);
                } else {
                    swal_alert('error', 'Error', 'Something went wrong!');
                }
            });
    }

    function check_error() {

        let check_error_return = true;
        setState({ ...state, error: { ...state.error, hotel_name_empty: false, hotel_email_empty: false } });

        //  Hotel Name Empty 
        if (state.name == "") {
            setState({ ...state, error: { ...state.error, hotel_name_empty: true } });
            noty_alert('error', 'Hotel Name is empty!');
            check_error_return = false;
        }

        //  Hotel Email Empty 
        if (state.email == "") {
            setState({ ...state, error: { ...state.error, hotel_email_empty: true } });
            noty_alert('error', 'Hotel email is empty!');
            check_error_return = false;
        }

        return check_error_return;
    }

    const getHotel = async () => {
        let hotel_id = router.query.index_key;
        if (hotel_id) {
            await axios.get(api_get_hotel, { params: { hotel_id: hotel_id } })
                .then((res) => {
                    let res_hotel = res.data;
                    console.log(res_hotel);
                    setState({
                        ...state,
                        hotel_id: res_hotel.hotel_id,
                        name: res_hotel.name,
                        phone: res_hotel.phone,
                        phone_2: res_hotel.phone_2,
                        fax: res_hotel.fax,
                        email: res_hotel.email,
                        website: res_hotel.website,
                        address: res_hotel.address,
                        city: res_hotel.city,
                        country: res_hotel.country,
                    });
                });
        }
    }

    useEffect(() => {
        if (router.isReady) {
            getHotel()
        }
    }, [router.isReady])

    return (
        <>
            <SubHeader title="Edit Hotel" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-4" type="text" label="Hotel Name" name="name" value={state.name} onchange={e => handleChange(e, 'hotel')} error={state.error.hotel_name_empty} />
                                        <InputField column="col-md-4" type="text" label="Phone" name="phone" value={state.phone} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Phone 2" name="phone_2" value={state.phone_2} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Email" name="email" value={state.email} onchange={e => handleChange(e, 'hotel')} error={state.error.hotel_email_empty} />
                                        <InputField column="col-md-4" type="text" label="Website" name="website" value={state.website} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Address" name="address" value={state.address} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="City" name="city" value={state.city} onchange={e => handleChange(e, 'hotel')} />
                                        <InputField column="col-md-4" type="text" label="Country" name="country" value={state.country} onchange={e => handleChange(e, 'hotel')} />
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


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Router from 'next/router';
import axios from "axios";
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function User() {
    const router = useRouter();
    const api_get_user = `${process.env.API_URL}` + 'user';
    const api_update_user = `${process.env.API_URL}` + 'user';
    const [state, setState] = useState({
        userId: 8,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        address_line_2: "",
        city: "",
        country: "",
    });

    const getUser = async () => {
        let userId = state.userId;
        // console.log(userId);
        if (userId) {
            let response = await axios.get(api_get_user, { params: { userId: userId } })
                .then((res) => {
                    console.log(res);
                    let res_user = res.data;
                    setState({
                        ...state,
                        firstName: res_user.firstName,
                        lastName: res_user.lastName,
                        phone: res_user.phone,
                        email: res_user.email,
                        address: res_user.address,
                        address_line_2: res_user.address_line_2,
                        city: res_user.city,
                        country: res_user.country,
                    });
                });
        }
    }


    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios(token_config("PUT", api_update_user, state))
            .then((res) => {
                if (res.data.userId) {
                    swal_alert('success', 'Update', 'User has updated successfully!');
                    // setTimeout(() => Router.reload(window.location.pathname), 3000);
                } else {
                    swal_alert('error', 'Error', 'Something went wrong! Please try again...');
                }
            });
    }


    useEffect(() => {
        if (router.isReady) {
            getUser()
        }
    }, [router.isReady])
    return (
        <>
            <SubHeader title="User Settings" />

            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-6" type="text" label="First Name" name="firstName" value={state.firstName} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Last Name" name="lastName" value={state.lastName} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Phone" name="phone" value={state.phone} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Email" name="email" value={state.email} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Address" name="address" value={state.address} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="address Line 2" name="address_line_2" value={state.address_line_2} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="City" name="city" value={state.city} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Country" name="country" value={state.country} onchange={handleChange} />
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

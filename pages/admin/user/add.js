import { useState } from 'react';
import axios from "axios"
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function user() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        address_list_2: "",
        city: "",
        country: "Bangladesh",
        zip: ""
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let response = await axios({
            method: "POST",
            url: `http://localhost:3000/api/user/create`,
            data: JSON.stringify(state),
            headers: {
                'Content-Type': "application/json"
            },
        }).then(function (res) {
            //handle success
            console.log(res);
        }).catch(function (error) {
            //handle error
            console.log(error);
        });
    }
    return (
        <>
            <SubHeader title="New User" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} method="POST">
                                    <div className="row">
                                        <InputField column="col-md-4" type="text" label="First Name" name="firstName" value={state.firstName} onchange={handleChange} />
                                        <InputField column="col-md-4" type="text" label="Last Name" name="lastName" value={state.lastName} onchange={handleChange} />
                                        <InputField column="col-md-4" type="text" label="Phone" name="phone" value={state.phone} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Email" name="email" value={state.email} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Address" name="address" value={state.address} onchange={handleChange} />
                                        <InputField column="col-md-4" type="text" label="City" name="city" value={state.city} onchange={handleChange} />
                                        <InputField column="col-md-4" type="text" label="Country" name="country" value={state.country} onchange={handleChange} />
                                        <InputField column="col-md-4" type="text" label="Postal/Zip Code" name="zip" value={state.zip} onchange={handleChange} />
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

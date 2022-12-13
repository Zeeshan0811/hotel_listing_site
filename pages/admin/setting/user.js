import { useState } from 'react'
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function user() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        country: "",
    });


    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value);
        }

        console.log(formData);
    }
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

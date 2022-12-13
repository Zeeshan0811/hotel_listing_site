import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function add() {
    const [state, setState] = useState({
        type: 3,
        company: "",
        phone: "",
        phone_2: "",
        fax: "",
        email: "",
        website: "",
        address: "",
        city: "",
        country: ""
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
            <SubHeader title="Add Hotel" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-6" type="text" label="Hotel Name" name="company" value={state.company} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Phone" name="phone" value={state.phone} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Phone 2" name="phone_2" value={state.phone_2} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Email" name="email" value={state.email} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Website" name="website" value={state.website} onchange={handleChange} />
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

import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function Add() {
    const [state, setState] = useState({
        title: "",
        sub_title: "",
        description: "",
        beds: "",
        size: 0,
        guest: 0,
        price: 0,

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
            <SubHeader title="Add Room" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-6" type="text" label="Title" name="title" value={state.title} onchange={handleChange} />
                                        <InputField column="col-md-12" type="text" label="Sub Title" name="sub_title" value={state.sub_title} onchange={handleChange} />
                                        <InputField column="col-md-4" type="number" label="Size (Ft²)" name="size" value={state.size} onchange={handleChange} />
                                        <InputField column="col-md-4" type="number" label="Guest" name="guest" value={state.guest} onchange={handleChange} />
                                        <InputField column="col-md-4" type="number" label="Price per night" name="price" value={state.price} onchange={handleChange} />
                                        <InputField column="col-md-12" type="textarea" label="Description" name="description" value={state.description} onchange={handleChange} />
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

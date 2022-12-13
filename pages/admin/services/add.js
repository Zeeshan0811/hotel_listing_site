import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function add() {
    const [state, setState] = useState({
        title: "",
        price: "",
        slug: "",
        complementary: ""
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value);
        }

        console.log(formData);
    }

    return (
        <>
            <SubHeader title="Add Service" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <InputField column="col-md-6" type="text" label="Title" name="title" value={state.title} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Price" name="price" value={state.price} onchange={handleChange} />
                                        <InputField column="col-md-6" type="text" label="Slug" name="slug" value={state.slug} onchange={handleChange} />
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

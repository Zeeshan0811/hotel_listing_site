import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function list() {
    return (
        <>
            <SubHeader title="Company Settings" />

            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <InputField column="col-md-6" type="text" label="Company Name" name="company" value={company} onchange={handleChange} />
                                    <InputField column="col-md-6" type="text" label="Email" name="email" value={email} onchange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

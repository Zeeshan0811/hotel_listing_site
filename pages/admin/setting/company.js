import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function company() {
  const [state, setState] = useState({
    company: "",
    phone: "",
    phone_2: "",
    fax: "",
    email: "",
    website: "",
    email: "",
    address: ""
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

  // console.log("Address: ", state.address)

  return (
    <>
      <SubHeader title="Company Settings" />
      <div className="content">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <InputField column="col-md-6" type="text" label="Company Name" name="company" value={state.company} onchange={handleChange} />
                    <InputField column="col-md-6" type="text" label="Phone" name="phone" value={state.phone} onchange={handleChange} />
                    <InputField column="col-md-6" type="text" label="Phone 2" name="phone_2" value={state.phone_2} onchange={handleChange} />
                    <InputField column="col-md-6" type="text" label="Fax" name="fax" value={state.fax} onchange={handleChange} />
                    <InputField column="col-md-6" type="email" label="Email" name="email" value={state.email} onchange={handleChange} />
                    <InputField column="col-md-6" type="text" label="Website" name="website" value={state.website} onchange={handleChange} />
                    <InputField column="col-md-6" type="textarea" label="Address" name="address" value={state.address} onchange={handleChange} />
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

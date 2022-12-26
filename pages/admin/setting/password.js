import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";
import InputField from "../../../components/form/InputField";

export default function Password(props) {
  const [state, setState] = useState({
    old_password: "",
    new_password: "",
    repeat_password: ""
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
      <SubHeader title="Change Password" />
      <div className="content">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <InputField column="col-md-12" type="password" label="Current Password" name="old_password" value={state.old_password} onchange={handleChange} />
                    <InputField column="col-md-12" type="password" label="New Password" name="new_password" value={state.new_password} onchange={handleChange} />
                    <InputField column="col-md-12" type="password" label="Repeat Password" name="repeat_password" value={state.repeat_password} onchange={handleChange} />
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary"> Submit <i className="icon-paperplane ml-2"></i> </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

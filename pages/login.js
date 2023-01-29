import axios from "axios"
import { useState } from 'react';
import InputField from "../components/form/InputField"
import SubHeader from "../components/SubHeader";
import { useRouter } from "next/router";


export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { email: email.value, password: password.value };
        console.log(credentials);

        const user = await axios.post("api/auth/login", credentials);
        console.log(user);

        console.log("Login Successfull");
        // if (user.status === 200) {
        //     router.push("/dashboard");
        // }
    }


    return (
        <>
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <InputField column="col-md-12" type="text" label="Email" name="email" value={state.email} onchange={handleChange} />
                                    <InputField column="col-md-12" type="password" label="Password" name="password" value={state.password} onchange={handleChange} />
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
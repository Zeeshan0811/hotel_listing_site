import axios from "axios"
import React, { useState } from 'react';
import InputField from "../components/form/InputField"
import SubHeader from "../components/SubHeader";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";


export default function Login() {
    const router = useRouter();

    const [authState, setAuthState] = useState({
        email: '',
        password: ''
    })

    const [pageState, setPageState] = useState({
        error: '',
        processing: false
    });

    function handleChange(e) {
        setAuthState({ ...authState, [e.target.name]: e.target.value });
    }

    const handleAuth = async (e) => {
        e.preventDefault();
        setPageState(old => ({ ...old, processing: true, error: '' }));

        await signIn('credentials', {
            ...authState,
            redirect: false
        }).then(response => {
            console.log(response);
            if (response.ok) {
                // Authenticate user
                setPageState(old => ({ ...old, processing: false }));
                router.push("/dashboard");
            } else {
                setPageState(old => ({ ...old, processing: false, error: response.error }));
            }
        }).catch(error => {
            setPageState(old => ({ ...old, processing: false, error: error.message ?? "Something went wrong" }));
            console.log(error);
        })
    }

    const simplifyError = (error) => {
        const errorMap = {
            "CredentialsSignin": "Invalid email or password"
        }
        return errorMap[error] ?? "Unknown error occured"
    }


    return (
        <>
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e) => handleAuth(e)}>
                                    {
                                        pageState.error !== '' && <div className="alert alert-danger" role="alert">{simplifyError(pageState.error)}</div>
                                    }
                                    <InputField column="col-md-12" type="email" label="Email" name="email" value={authState.email} onchange={handleChange} />
                                    <InputField column="col-md-12" type="password" label="Password" name="password" value={authState.password} onchange={handleChange} />
                                    <div className="text-right">
                                        {/* <button disabled={pageState.processing} type="button" className="btn btn-primary" onClick={handleAuth}>Submit <i className="icon-paperplane ml-2"></i></button> */}
                                        <button disabled={pageState.processing} type="submit" className="btn btn-primary">Submit <i className="icon-paperplane ml-2"></i></button>
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






    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const credentials = { email: email.value, password: password.value };
    //     console.log(credentials);

    //     const user = await axios.post("api/auth/login", credentials);
    //     console.log(user);

    //     console.log("Login Successfull");
    //     // if (user.status === 200) {
    //     //     router.push("/dashboard");
    //     // }
    // }
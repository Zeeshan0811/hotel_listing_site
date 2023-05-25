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
                router.push("/admin/dashboard");
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
        return errorMap[error] ?? "Invalid email or password"
        // return errorMap[error] ?? "Unknown error occured"
    }


    return (
        <div className="page-content login-cover full-page-height">
            <div className="content-wrapper">
                <div className="content d-flex justify-content-end align-items-center">
                    <form className="login-form wmin-sm-400" onSubmit={(e) => handleAuth(e)}>
                        <div className="card rounded">
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                    <h5 className="mb-0">Login to your account</h5>
                                    <span className="d-block text-muted">Your credentials</span>
                                </div>

                                {
                                    pageState.error !== '' && <div className="alert alert-danger" role="alert">{simplifyError(pageState.error)}</div>
                                }
                                <InputField column="col-md-12" type="email" label="Email" name="email" value={authState.email} onchange={handleChange} />
                                <InputField column="col-md-12" type="password" label="Password" name="password" value={authState.password} onchange={handleChange} />
                                <div className="text-right">
                                    {/* <button disabled={pageState.processing} type="button" className="btn btn-primary" onClick={handleAuth}>Submit <i className="icon-paperplane ml-2"></i></button> */}
                                    <button disabled={pageState.processing} type="submit" className="btn btn-primary btn-block">Sign in </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
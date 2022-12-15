import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";

export default function list() {
    let get_list = async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            const data = result.data;
            return {
                props: {
                    data: data
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <SubHeader title="Company Settings" />

            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Room Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

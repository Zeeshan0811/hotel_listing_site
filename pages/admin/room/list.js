import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";

export default function list() {
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

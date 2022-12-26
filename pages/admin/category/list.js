import { useState } from 'react';
import SubHeader from "../../../components/SubHeader";

export default function List() {
    return (
        <>
            <SubHeader title="Category List" />
            <div className="content">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Category Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
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

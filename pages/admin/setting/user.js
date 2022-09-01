import React from 'react'
import SubHeader from "../../../components/SubHeader";

export default function user() {
    return (
        <>
            <SubHeader title="User Settings" />

            <div class="content">
                <div class="row justify-content-md-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="card-body">
                                <form action="<?php echo base_url('admin/setting/user'); ?>" enctype="multipart/form-data" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>First Name:</label>
                                                <input type="text" class="form-control" name="firstName" value="" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Last Name:</label>
                                                <input type="text" class="form-control" name="firstName" value="" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone:</label>
                                                <input type="text" class="form-control" name="phone" value="" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email:</label>
                                                <input type="text" class="form-control" name="email" value="" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Address :</label>
                                                <textarea name="address" rows="5" cols="5" class="form-control" placeholder="Enter your address here"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary">Submit <i class="icon-paperplane ml-2"></i></button>
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

import SubHeader from "../../../components/SubHeader";

export default function password(props) {
  return (
    <>
      <SubHeader title="Change Password" />
      <div className="content">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form
                  action="admin/setting/password"
                  encType="multipart/form-data"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Current Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          name="old_password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>New Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          name="new_password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Repeat New Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          name="repeat_password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">
                      Submit <i className="icon-paperplane ml-2"></i>
                    </button>
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

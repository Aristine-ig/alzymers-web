import React from 'react'
const Dashboard = () => {
  return (
    <div className="container light-style flex-grow-4 container-p-y">
      <h3 className="font-weight-bold relative left-20">
        Account settings
      </h3>
      <div className="profile-card overflow-hidden mt-36">
        <div className="row no-gutters row-bordered row-border-light flex">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
            </div>
          </div>
          
          <div className="col-md-9 p-3 overflow-hidden general-box">
            <div className="tab-content">
              <div className="tab-pane fade show" id="#account-general">
                <div className="card-body media align-items-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="d-block ui-w-80" />
                  <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input type="file" className="account-settings-fileinput" />
                    </label> &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                    <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control mb-1" placeholder='@xyz' />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" placeholder="xyz@mail.com" />
                    {/* <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.<br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div> */}
                  </div>
                  {/* <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" defaultValue="Company Ltd." />
                  </div> */}
                </div>
              </div>
              <div className="tab-pane fade" id="account-change-password">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-info">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows={5} placeholder='Write Something About Yourself.' />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input type="text" className="form-control" placeholder='Your Birthdate' />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                      <option>USA</option>
                      <option selected>India</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" placeholder="+(91) 12345 67890" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-social-links">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input type="text" className="form-control" placeholder="https://twitter.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input type="text" className="form-control" placeholder="https://www.facebook.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input type="text" className="form-control" placeholder='https://www.google.com' />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" placeholder='https://www.LinkedIn.com' />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input type="text" className="form-control" placeholder="https://www.instagram.com" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-connections">
                <div className="card-body">
                  <button type="button" className="btn btn-twitter">Connect to
                    <strong> Twitter</strong></button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <h5 className="mb-2">
                    <a href="javascript:void(0)" className="float-right text-muted text-tiny"><i className="ion ion-md-close" /> Remove</a>
                    <i className="ion ion-logo-google text-google" />
                    You are connected to Google:
                  </h5>
                  <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f9979498818e9c9595b994989095d79a9694">[email&nbsp;protected]</a>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-facebook">Connect to 
                    <strong> Facebook</strong></button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-instagram">Connect to 
                    <strong> Instagram</strong></button>
                </div>
              </div>
              {/* <div className="tab-pane fade" id="account-notifications">
                <div className="card-body pb-2 ">
                  <h6 className="mb-4">Activity</h6>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" defaultChecked />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">Email me when someone comments on my article</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" defaultChecked />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">Email me when someone answers on my forum
                        thread</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">Email me when someone follows me</span>
                    </label>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Application</h6>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" defaultChecked />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">News and announcements</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">Weekly product updates</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" defaultChecked />
                      <span className="switcher-indicator">
                        <span className="switcher-yes" />
                        <span className="switcher-no" />
                      </span>
                      <span className="switcher-label">Weekly blog digest</span>
                    </label>
                  </div>
                </div>
              </div> */}
              <div className=" mb-3 p-6 left-96 relative">
                <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
                <button type="button" className="btn btn-default">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mb-3 p-6">
        <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
        <button type="button" className="btn btn-default">Cancel</button>
      </div> */}
    </div>
    
    
    
  )
}

export default Dashboard
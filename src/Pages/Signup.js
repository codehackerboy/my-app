import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  return (
    <div>
      <section className="bg-account-pages vh-100">
        <div className="display-table">
            <div className="display-table-cell">
                <div className="container">
                    <div className="no-gutters align-items-center row">
                        <div className="col-lg-12"><div className="login-box">
                            <div className="align-items-center no-gutters row">
                                <div className="col-lg-6"><div className="bg-light">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <div className="home-img login-img text-center d-none d-lg-inline-block">
                                                <div className="animation-2"></div><div className="animation-3"></div>
                                                <img src={require('./Img/Sign.png')}/>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="justify-content-center row">
                                                        <div className="col-lg-11"><div className="p-4">
                                                            <div className="text-center mt-3"><a href="/SignUp">
                                                                <img src="/static/media/logo-dark.4272faac.png" alt="" height="22"/></a>
                                                                <p className="text-muted mt-3">Sign up for a new Account</p></div>
                                                                <div className="p-3 custom-form"><form className="">
                                                                    <div className="form-group">
                                                                        <label for="firstname" className="">First Name</label>
                                                                        <input id="firstname" placeholder="First Name" type="text" className="form-control form-control"/></div>
                                                                        <div className="form-group"><label for="email" className="">Email</label>
                                                                        <input id="email" placeholder="Enter Email" type="password" className="form-control form-control"/></div>
                                                                        <div className="form-group"><label for="userpassword" className="">Password</label>
                                                                        <input id="userpassword" placeholder="Enter password" type="password" className="form-control form-control"/>
                                                                        </div><div className="custom-control custom-checkbox">
                                                                            <input id="customControlInline" type="checkbox" className="custom-control-input form-check-input"/>
                                                                            <label for="customControlInline" className="custom-control-label">Remember me</label>
                                                                            </div>
                                                                            <div className="mt-3"><button className="btn btn-primary btn-block btn btn-primary btn-block">SignUp</button></div>
                                                                            <div className="mt-4 pt-1 mb-0 text-center"><p className="mb-0">Don't have an account ?<a className="text-success"><Link to='/Login'>Sign in</Link></a></p>
                                                                            </div>
                                                                            </form>
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </section>
    </div>
  )
}


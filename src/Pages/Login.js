import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
         <div id="root">
            <div className="account-home-btn d-none d-sm-block">
                <a className="text-primary" href="/">
                    <i className="mdi mdi-home h1"></i></a>
                    </div><section className="bg-account-pages vh-100">
                        <div className="display-table"><div className="display-table-cell">
                            <div className="container"><div className="row"><div className="col-lg-12">
                                <div className="login-box"><div className="align-items-center no-gutters row">
                                    <div className="col-lg-6"><div className="bg-light"><div className="row justify-content-center">
                                        <div className="col-lg-10" ><div className="home-img login-img text-center d-none d-lg-inline-block">
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
                                                        <div className="text-center mt-3">
                                                            <a href="/login">
                                                                <img src="/static/media/logo-dark.4272faac.png" alt="" height="22"/></a>
                                                                <p className="text-muted mt-3">Sign in to continue to Thamza.</p></div>
                                                                <div className="p-3 custom-form"><form className=""><div className="form-group">
                                                                    <label for="username" className="">Username</label>
                                                                    <input id="username" placeholder="Enter username" type="text" className="form-control form-control"/></div>
                                                                    <div className="form-group"><label for="userpassword" className="">Password</label>
                                                                    <input id="userpassword" placeholder="Enter password" type="password" className="form-control form-control"/></div>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input id="customControlInline" type="checkbox" className="custom-control-input form-check-input"/>
                                                                        <label for="customControlInline" className="custom-control-label">Remember me</label></div>
                                                                        <div className="mt-3"><Link to='/Home'><button className="btn btn-primary btn-block btn btn-primary btn-block">Log In</button></Link> </div>
                                                                        <div className="mt-4 pt-1 mb-0 text-center">
                                                                            <Link className="text-dark" to="/Forget">
                                                                            <i className="mdi mdi-lock"></i> Forgot your password?</Link></div>
                                                                            <div className="mt-4 pt-1 mb-0 text-center">
                                                                            <Link className="text-dark" to='/Signup'>
                                                                            <i className="mdi mdi-lock"></i>SignUp</Link></div>
                                                                            </form>
                                                                            
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </div></div></div>
                                                                            </section></div></div>
    )
}
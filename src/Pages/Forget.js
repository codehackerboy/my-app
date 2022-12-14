import React from 'react'

export default function Forget() {
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
                                                <img src={require('./Img/Sign.png')}/></div>
                                                </div></div></div></div><div className="col-lg-6">
                                                    <div className="justify-content-center row">
                                                        <div className="col-lg-11"><div className="p-4">
                                                            <div className="text-center mt-3"><a href="/ForgotPassword">
                                                                <img src="/static/media/logo-dark.4272faac.png" alt="" height="22"/></a>
                                                                <p className="text-muted mt-3">Reset Password</p>
                                                                </div>
                                                                <div className="p-3 custom-form">
                                                                    <div className="alert alert-success bg-soft-primary text-primary border-0 text-center" role="alert">Enter your email address and we'll send you an email with instructions to reset your password.</div><form className="">
                                                                        <div className="form-group"><label for="email" className="">Email </label>
                                                                        <input id="email" placeholder="Enter Email" type="email" className="form-control form-control"/></div>
                                                                        <div className="mt-3"><button className="btn btn-primary btn-block btn btn-secondary" style={{backgroundColor: "#3b71ca", color: "white"}}>Reset your Password</button>
                                                                        </div></form></div>
                                                                        </div></div></div>
                                                                        </div></div></div>
                                                                        </div></div></div>
                                                                        </div></div>
                                                                        </section>
    </div>
  )
}


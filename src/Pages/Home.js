import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="PS">
        <nav
          id="navbar"
          class=" navbar-custom sticky sticky-dark navbar navbar-expand-lg fixed-top"
        >
          <div class="container ">
            <a
              href="/"
              class="navbar-brand logo text-uppercase navbar-brand"
            ></a>
            <button
              aria-label="Toggle navigation"
              type="button"
              class="navbar-toggler"
            >
              <i class="mdi mdi-menu"></i>
            </button>
            <div id="navbarCollapse" class=" navbar-collapse collapse ">
              <div data-nav="list" class="navbar-collapse">
                <ul
                  id="navbar-navlist"
                  class="navbar-nav ml-auto navbar-center nav"
                >
                  <li class="active nav-item">
                    <a href="#home" class="active nav-link">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#services" class="nav-link">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#pricing" class="nav-link">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#team" class="nav-link">
                      Team
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#clients" class="nav-link">
                      Clients
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#contact" class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="navbar-nav navbar-center">
                <li class="nav-item">
                  <a class="nav-link" href="/Login">
                    Log In
                  </a>
                </li>
                <li class="nav-item d-inline-block d-lg-none">
                  <a class="nav-link" href="/SignUp">
                    Sign Up
                  </a>
                </li>
              </ul>
              <div class="navbar-button d-none d-lg-inline-block">
                <a class="btn btn-sm btn-soft-primary btn-round" href="/SignUp">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="trustBanner">
            <div class="left" style={{ paddingTop: "150px" }}>
              <h1>
                {" "}
                Make sure your family <br />
                <span>has the right insurance plan.</span>
              </h1>
              <div class="aap">
                <div class="hash"></div>InsuranceDekho
                <span>
                  <br />
                  Bharosa kar ke Dekho
                </span>
              </div>
            </div>
            <div class="right"></div>
          </div>
        </div>

        
        <div class="tabwrapper">
          <div class="container">
            <div class="tabgrp">
              <ul>
                <li>
                  <span class="musttag">Save On Tax*</span>
                  <a
                    title="Term Insurance"
                    href="/life-insurance/term-insurance"
                  >
                    <div class="tabicon">
                      <img src="pwa/img/v2_icon_life.svg" />
                    </div>
                    <div class="tabName">
                      Term <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="Health Insurance" href="/health-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')} />
                    </div>
                    <div class="tabName">
                      Health <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="Investment Plans" href="/investment">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')}/>
                    </div>
                    <div class="tabName">
                      Investment <span>Plans</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="Car Insurance" href="/car-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')} />
                    </div>
                    <div class="tabName">
                      Car <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="Bike Insurance" href="/bike-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')} />
                    </div>
                    <div class="tabName">
                      Bike <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <span class="musttag">NEW</span>
                  <a title="Pet Insurance" href="/pet-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')}/>
                    </div>
                    <div class="tabName">
                      Pet <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <span class="musttag">NEW</span>
                  <a title="Travel Insurance" href="/travel-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/Sign.png')}/>
                    </div>
                    <div class="tabName">
                      Travel <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="Family health Insurance" href="/health-insurance">
                    <div class="tabicon">
                      <img src={require('./Img/car.svg')} />
                    </div>
                    <div class="tabName">
                      Family Health <span>Insurance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div class="tabicon">
                    <img src={require('./Img/viewmore.svg')} />
                  </div>
                  <div class="tabName viewmoretab">View More</div>
                </li>
              </ul>
            </div>
            <div class="policyStatus">
              <ul>
                <li>
                  <img
                    width="24"
                    height="24"
                    src="https://static.insurancedekho.com/pwa/img/v2_icon_policyrenew.svg"
                  />
                  Renew Policy
                </li>
                <li>
                  <img
                    width="24"
                    height="24"
                    src="https://static.insurancedekho.com/pwa/img/v2_icon_policyTrack.svg"
                  />
                  Track Policy
                </li>
                <li>
                  <img
                    width="24"
                    height="24"
                    src="https://static.insurancedekho.com/pwa/img/v2_icon_policyDownload.svg"
                  />
                  Download Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

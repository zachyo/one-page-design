import Header from "./components/header/header";
import close from "./assets/close.svg";
import Form from "./components/form/form";
import apple from "./assets/apple-13.svg";
import receipt from "./assets/docket.png";
import wifi from './assets/wifi.png';
import chip from './assets/chip.png';
import mc from './assets/mastercard-2.svg';


import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage wrapper grid grid-cols-12">
      <div className="close-btn">
        <img src={close} alt="" style={{height : '2rem'}} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ width: "65%" }}>
          <Header />
          <div className="form">
            <Form />
          </div>
        </div>
        <div className="" style={{ width: "28%", marginRight: "15px" }}>
          <div className="checkout-wrapper">
            <span className="top-blue"></span>
            <div className="atm-card">
              <div className="atm-card_top">
                <img src={chip} alt="" className="chip" />
                <img src={wifi} alt="" />
              </div>
              <div className="atm-card_middle">
                <span class="holder">Jonathan Michael</span>
                <div class="card-digits">
                  <div class="hidden-digits">
                    <span class="circle"></span>
                    <span class="circle"></span>
                    <span class="circle"></span>
                    <span class="circle"></span>
                  </div>
                  <span class="visible-digits">3456</span>
                </div>
              </div>
              <div className="atm-card_bottom">
                <span class="expiry">09/22</span>
                <img src={mc} alt="" class="mc" />
              </div>
            </div>
            <div className="checkout-deets">
              <div class="purchase-data">
                <div class="data">
                  <span class="title">Company</span>
                  <span class="value">
                    <img src={apple} alt="" />
                    <span class="inner-text">Apple</span>
                  </span>
                </div>
                <div class="data">
                  <span class="title">Order Number</span>
                  <span class="value">
                    <span class="inner-text">1266201</span>
                  </span>
                </div>
                <div class="data">
                  <span class="title">Product</span>
                  <span class="value">
                    <span class="inner-text">Macbook Air</span>
                  </span>
                </div>
                <div class="data">
                  <span class="title">VAT (20%)</span>
                  <span class="value">
                    <span class="inner-text">$100.00</span>
                  </span>
                </div>
              </div>
              <div class="divider">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="total-purchase">
                <div class="total">
                  <span class="desc">You have to Pay</span>
                  <div class="t-amount">
                    <h1 class="amount">
                      549<span className="small">.99</span>
                    </h1>
                    <span class="symbol">USD</span>
                  </div>
                </div>
                <img src={receipt} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import './checkout.scss'

const Checkout = () => {
  return (
    <div className="">
      <div class="col-span-12 md:col-span-4">
        <div class="checkout">
          <span class="blu"></span>
          <div class="credit-card">
            <div class="credit-card__head">
              <img src="assets/chip.png" alt="" class="chip" />
              <img src="assets/wifi.png" alt="" class="wifi" />
            </div>
            <div class="credit-card__body">
              <span class="holder">jonathan micheal</span>
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
            <div class="credit-card__footer">
              <span class="expiry">09/22</span>
              <img src="assets/mastercard-2.svg" alt="" class="logo" />
            </div>
            <div class="card__design">
              <span class="inner"></span>
            </div>
          </div>
          <div class="checkout-details">
            <div class="purchase-data">
              <div class="data">
                <span class="title">company</span>
                <span class="value">
                  <img src="assets/apple-13.svg" alt="" />
                  <span class="inner-text">apple</span>
                </span>
              </div>
              <div class="data">
                <span class="title">order number</span>
                <span class="value">
                  <span class="inner-text">1266201</span>
                </span>
              </div>
              <div class="data">
                <span class="title">product</span>
                <span class="value">
                  <span class="inner-text">macbook air</span>
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
            <div class="purchase-total">
              <div class="total">
                <span class="desc">You have to Pay</span>
                <div class="t-amount">
                  <h1 class="amount">
                    549<sub>.99</sub>
                  </h1>
                  <span class="symbol">USD</span>
                </div>
              </div>
              <img src="assets/docket.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

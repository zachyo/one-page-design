import editIcon from "../../assets/edit-pencil.svg";
import verified from "../../assets/verified-badge.svg";
import mastercard from "../../assets/mc_symbol.svg";
import dots from "../../assets/dots.svg";
import "./form.scss";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    cardNumber: "",
    cvv: undefined,
    expMonth: undefined,
    expYear: undefined,
    password: undefined,
  });

  const { cardNumber, cvv, expMonth, expYear, password } = userDetails;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userDetails);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  return (
    <div className="form">
      <div className="input-group">
        <div className="header">
          <div className="description">
            <h2 className="title">Card Number</h2>
            <p className="desc">Enter the 16-digit card number on the card</p>
          </div>
          <button className="edit">
            <img src={editIcon} alt="" />
            <span>Edit</span>
          </button>
        </div>
      </div>
      <div className="input-group">
        <div className="main">
          <img src={mastercard} alt="" className="mc" />
          <input
            type="number"
            placeholder="2412   -   7512   -   3412   -   3456"
            name="cardNumber"
            value={cardNumber}
            onChange={handleChange}
          />
          <img src={verified} alt="" className="end-icon" />
        </div>
      </div>

      <div className="input-field">
        <div className="description">
          <h2 className="title">CVV Number</h2>
          <p className="desc">Enter the 3 or 4 digit number on the card</p>
        </div>
        <div className="input-value" style={{ position: "relative" }}>
          <input
            type="number"
            placeholder="327"
            name="cvv"
            value={cvv}
            onChange={handleChange}
          />
          <img src={dots} alt="" className="end-icon" />
        </div>
      </div>
      <div className="input-field">
        <div className="description">
          <h2 className="title">Expiry Date</h2>
          <p className="desc">Enter the expiration date of the card</p>
        </div>
        <div className="input-value double">
          <div className="main __date">
            <input
              type="number"
              placeholder="09"
              value={expMonth}
              name="expMonth"
              onChange={handleChange}
            />
          </div>
          <span className="divider">/</span>
          <div className="main __date">
            <input
              type="number"
              placeholder="22"
              value={expYear}
              name="expYear"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="input-field">
        <div className="description">
          <h2 className="title">Password</h2>
          <p className="desc">Enter your Dynamic password</p>
        </div>
        <div className="input-value" style={{ position: "relative" }}>
          <input
            type="password"
            placeholder="******"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <img src={dots} alt="" className="end-icon" />
        </div>
      </div>
      <CustomButton onClick={handleSubmit}>Pay Now</CustomButton>
    </div>
  );
};

export default Form;

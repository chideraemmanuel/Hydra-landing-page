import React from "react";
import "./optin.css";

const OptIn = () => {
  // const phoneNumberInput = document.querySelector(".phone-number");
  // const submitButton = document.querySelector(".opt-in__form--button");

  // const validateNumber = (e) => {
  //   if (isNaN(phoneNumberInput.value) || phoneNumberInput.value < 11) {
  //     e.preventDefault();
  //     phoneNumberInput.style.cssText = `border-color: var(--error-color)`;
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  return (
    <div className="container">
      <section
        className="opt-in"
        id="opt-in"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="50"
      >
        <div className="opt-in__header">
          <h2>Join Hydra</h2>
          <svg
            width="414"
            height="2"
            viewBox="0 0 414 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
            <defs>
              <linearGradient
                id="paint0_linear_13_46"
                x1="414"
                y1="1.00238"
                x2="0"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#343045" />
                <stop offset="0.348958" stopColor="#C0B7E8" />
                <stop offset="0.6875" stopColor="#8176AF" />
                <stop offset="1" stopColor="#343045" />
              </linearGradient>
            </defs>
          </svg>
          <h3>Let's Build Your VR Experience</h3>
        </div>
        <form
          className="opt-in__form"
          autoComplete="off"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-flex">
            <input
              type="text"
              className="opt-in__form--input"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="opt-in__form--input"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-flex">
            <input
              type="email"
              className="opt-in__form--input"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="opt-in__form--input phone-number"
              placeholder="Phone Number"
              required
              maxLength="11"
            />
          </div>
          <input
            type="text"
            className="opt-in__form--input"
            placeholder="Subject"
            required
          />
          {/* <input
            type="textarea"
            className="opt-in__form--input message"
            placeholder="Tell Us Something..."
            required
          /> */}

          <textarea
            className="opt-in__form--input message"
            placeholder="Tell Us Something..."
            required
          ></textarea>

          <input
            type="submit"
            value="Send to Hydra"
            className="opt-in__form--button"
            // onClick={(e) => validateNumber(e)}
          />
          {/* <button>Send</button> */}
        </form>
      </section>
    </div>
  );
};

export default OptIn;

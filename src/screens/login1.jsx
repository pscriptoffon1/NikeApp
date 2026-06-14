function Login1() {
  return (
    <div className="mobile-wrapper">
      <div className="page1111">
        <div className="signup9-page">

          <div className="signup9-top">
            {/* Nike Logo */}
            <svg
              className="signup9-logo"
              width="50"
              height="18"
              viewBox="0 0 70 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.72152 24.9898C5.63581 24.9067 3.92939 24.3348 2.5951 23.2726C2.34046 23.0697 1.73368 22.4612 1.53011 22.2046C0.989035 21.5228 0.621178 20.8593 0.375821 20.1231C-0.379178 17.8569 0.00939274 14.8831 1.48725 11.6195C2.7526 8.82536 4.7051 6.05417 8.11152 2.21609C8.61331 1.65132 10.1076 -0.000366211 10.1172 -0.000366211C10.1208 -0.000366211 10.0394 0.141002 9.93688 0.313152C9.05117 1.79985 8.29331 3.55104 7.88045 5.06709C7.21724 7.49972 7.29724 9.58733 8.11474 11.2061C8.67867 12.3213 9.64545 13.2873 10.7326 13.8212C12.6358 14.7557 15.4222 14.833 18.8251 14.0474L70 0.42L20.7461 21.5454C18.0804 22.6874 17.3676 22.9759 16.1144 23.4168C12.9108 24.5442 10.0412 25.0821 7.72152 24.9898Z"
                fill="black"
              />
            </svg>

            <div className="signup9-avatar">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="avatar"
              />
            </div>

            <div className="signup9-user">
              <h1>Would you like to continue as John Smith?</h1>
              <p>john@mail.com</p>
            </div>
          </div>

          <div className="signup9-bottom">

            <div className="signup9-policy">
              <p>By continuing, I agree to Nike’s</p>

              <div className="signup9-links">
                <span>Privacy Policy</span>
                <span>and</span>
                <span>Terms of Use.</span>
              </div>
            </div>

            <div className="signup9-actions">
              <a className="l2" href="/login2">
                <button className="signup9-btn">
                  Continue
                </button>
              </a>
              <button className="signup9-account-btn">
                No, use another account.
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login1
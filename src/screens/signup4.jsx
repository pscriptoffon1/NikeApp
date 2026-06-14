function Signup4() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="page signup4-page">

                    <div className="signup4-content">

                        {/* Logo */}
                        <svg
                            width="50"
                            height="18"
                            viewBox="0 0 70 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.72152 24.9898C5.63581 24.9067 3.92939 24.3348 2.5951 23.2726..."
                                fill="black"
                            />
                        </svg>

                        <div className="signup4-form">

                            <div className="signup4-header">
                                <h1>Now let's make you a Nike Member.</h1>

                                <div className="email-info">
                                    <p>We've sent a code to</p>

                                    <div className="email-edit">
                                        <span>john@mail.com</span>
                                        <button>Edit</button>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Code */}
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Verification Code"
                                />
                                <small>Invalid email address</small>
                            </div>

                            {/* Name */}
                            <div className="name-row">

                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>

                            </div>

                            {/* Password */}
                            <div className="input-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                />

                                <div className="password-hints">
                                    <small>✕ Minimum 8 characters</small>
                                    <small>✕ At least one number</small>
                                </div>
                            </div>

                            {/* Birthday */}
                            <div className="input-group">
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                />
                                <small>Get a Nike Member Reward every year on your Birthday.</small>
                            </div>

                            {/* Checkbox 1 */}
                            <label className="checkbox-row">
                                <input type="checkbox" />

                                <span>
                                    Sign up for emails to get updates from Nike on
                                    products, offers and your Member benefits.
                                </span>
                            </label>

                            {/* Checkbox 2 */}
                            <label className="checkbox-row">
                                <input type="checkbox" />

                                <span>
                                    I agree to Nike's Privacy Policy and Terms of Use.
                                </span>
                            </label>

                        </div>

                        <div className="signup4-footer">
                             <a className="text-none1" href="/signup5">
                            <button className="create-account-btn">
                                Create Account
                            </button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup4
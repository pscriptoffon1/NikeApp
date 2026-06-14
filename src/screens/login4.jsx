function Login4() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="login4-content">

                    <div className="nike-logo">
                        <svg width="51" height="18" viewBox="0 0 51 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_51_16286)">
                                <path d="M5.5595 17.9925C4.05779 17.9328 2.82916 17.521 1.86847 16.7562C1.68513 16.6101 1.24825 16.172 1.10168 15.9872C0.712105 15.4963 0.447248 15.0186 0.270591 14.4885C-0.273008 12.8569 0.00676277 10.7157 1.07082 8.36591C1.98187 6.35416 3.38767 4.3589 5.8403 1.59548C6.20158 1.18885 7.27747 -0.000366211 7.28441 -0.000366211C7.28698 -0.000366211 7.22835 0.101419 7.15455 0.225367C6.51684 1.29579 5.97118 2.55664 5.67393 3.64821C5.19641 5.39969 5.25401 6.90278 5.84261 8.06828C6.24864 8.87123 6.94473 9.56673 7.72747 9.9512C9.09778 10.624 11.104 10.6797 13.5541 10.1141C13.7227 10.0749 22.0814 7.85131 32.129 5.17267C42.1766 2.49377 50.3987 0.303703 50.4 0.305506C50.4028 0.307829 27.0566 10.3189 14.9372 15.5126C13.0179 16.3348 12.5047 16.5425 11.6023 16.86C9.29578 17.6717 7.22964 18.059 5.5595 17.9925Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_51_16286">
                                    <rect width="50.4" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                    <div className="login4-frame">

                        <h1 className="login4-title">
                            You have been signed in successfully.
                        </h1>

                        <div className="login4-checkbox-row">
                            <input
                                type="checkbox"
                                id="emailUpdates"
                                className="login4-checkbox"
                            />

                            <label
                                htmlFor="emailUpdates"
                                className="login4-checkbox-text"
                            >
                                Sign up for emails to get updates
                            </label>
                        </div>

                       <a href="/login5"> <button className="login4-btn">
                            Join Us
                        </button>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login4;
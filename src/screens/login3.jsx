

function Login3() {

    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="password-content">

                    <div className="nike-logo">
                        NIKE
                    </div>

                    <div className="password-frame">

                        <div className="password-header">
                            <h1>What's your password?</h1>

                            <div className="email-info">
                                <span>john@mail.com</span>
                                <a href="/">Edit</a>
                            </div>
                        </div>

                        <div className="password-input-block">
                            <input
                                type="password"
                                placeholder="Password"
                            />

                            <i className="fa-regular fa-eye"></i>
                        </div>

                        <a
                            href="/"
                            className="forgot-password"
                        >
                            Forgotten your password?
                        </a>

                        <a href="/login4"><button className="continue-btn4">
                            Continue
                        </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login3;
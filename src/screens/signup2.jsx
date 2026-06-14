import { useState } from "react";

function Signup2() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="page1111 signup2-page">

                <div className="signup2-overlay"></div>

                <div className="signup2-content">

                    <svg width="70" height="25" viewBox="0 0 70 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.72152 24.9898C5.63581 24.9067 3.92939 24.3348 2.5951 23.2726C2.34046 23.0697 1.73368 22.4612 1.53011 22.2046C0.989035 21.5228 0.621178 20.8593 0.375821 20.1231C-0.379178 17.8569 0.00939274 14.8831 1.48725 11.6195C2.7526 8.82536 4.7051 6.05417 8.11152 2.21609C8.61331 1.65132 10.1076 -0.000366211 10.1172 -0.000366211C10.1208 -0.000366211 10.0394 0.141002 9.93688 0.313152C9.05117 1.79985 8.29331 3.55104 7.88045 5.06709C7.21724 7.49972 7.29724 9.58733 8.11474 11.2061C8.67867 12.3213 9.64545 13.2873 10.7326 13.8212C12.6358 14.7557 15.4222 14.833 18.8251 14.0474C19.0594 13.993 30.6686 10.9047 44.6236 7.18441C58.5786 3.46371 69.9982 0.421951 70 0.424456C70.0039 0.427682 37.5786 14.332 20.7461 21.5454C18.0804 22.6874 17.3676 22.9759 16.1144 23.4168C12.9108 24.5442 10.0412 25.0821 7.72152 24.9898Z" fill="white" />
                    </svg>

                    <h1>
                        Nike App Bringing Nike Members the best products,
                        inspiration and stories in sport.
                    </h1>

                    <div className="signup2-buttons">
                        
                        <button className="join-btn22">
                           <a href="/login1" className="text-t1">Join Us</a> 
                        </button>
                       

                        <button
                            className="signin-btn"
                            onClick={() => setShowModal(true)}
                        >
                            Sign In
                        </button>
                    </div>
                </div>

                {showModal && (
                    <div className="modal-overlay">
                        <div className="nike-alert">

                            <div className="alert-content">
                                <h3>Sign In</h3>

                                <p>
                                    Do you want to continue to the sign in page?
                                </p>
                            </div>

                            <div className="alert-divider"></div>

                            <div className="alert-actions11">

                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>

                                <div className="vertical-divider"></div>

                                <button className="continue-btn">
                                   <a className="text-none" href="/signup3"> Continue</a>
                                </button>
                                

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Signup2;
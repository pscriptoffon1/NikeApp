import Btnnext from "../components/btnnext"

import { useState } from "react";

function Accountsetup8() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="account9">

                    <div className="account9-overlay"></div>

                    <div className="account9-content">

                        <div className="account9-progress">
                            <div className="progress-track">
                                <div className="progress-fill4"></div>
                            </div>
                        </div>

                        <h1 className="account9-title">
                            How about Bluetooth? Turning it on will help verify your location in select Nike stores to improve your experience.</h1>

                    </div>

                     <button onClick={() => setShowModal(true)} className="account9-btn">
                        Next
                    </button>
                    
                </div>

                {showModal && (
                    <div className="modal-overlay">
                        <div className="nike-alert">

                            <div className="alert-content">
                                <h3>“Nike” Would Like to Send You Notifications</h3>

                                <p>
                                    <small>
                                        Notifications may include alerts, sounds and icon badges. There can be configured in Settings.
                                    </small>
                                </p>
                            </div>

                            <div className="alert-divider"></div>

                            <div className="alert-actions11">

                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowModal(false)}
                                >
                                    Don’t Allow
                                </button>

                                <div className="vertical-divider"></div>

                                <button className="continue-btn">
                                    <a className="text-none" href="/accountsetup9"> OK</a>
                                </button>


                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Accountsetup8;
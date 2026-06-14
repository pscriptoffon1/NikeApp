import Btnnext from "../components/btnnext"

import { useState } from "react";

function Accountsetup9() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="account9">

                    <div className="account9-overlay"></div>

                    <div className="account9-content">

                        <div className="account9-progress">
                            <div className="progress-track">
                                <div className="progress-fill3"></div>
                            </div>
                        </div>

                        <h1 className="account9-title">
                            Find products faster and see Nike ads relevant to your interests by allowing us to use your online activity and share it with partners.</h1>

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



                            <a className="allow-t" href="/accountsetup10"> <div className="alert-buttons">
                                <button className="alert-btn">
                                    Ask App Not to Track
                                </button>
                            </div></a>


                            <a className="allow-t" href="/accountsetup10">
                                <div className="alert-buttons">
                                    <button className="alert-btn">
                                        Allow
                                    </button>
                                </div>
                            </a>


                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Accountsetup9;
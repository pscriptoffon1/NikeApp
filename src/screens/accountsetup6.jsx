import Btnnext from "../components/btnnext"

import { useState } from "react";


function Accountsetup6() {
                const [showModal, setShowModal] = useState(false);
    return (

        <div className="mobile-wrapper">
            <div className="page">

                <div className="account9">

                    <div className="account9-overlay"></div>

                    <div className="account9-content">

                        <div className="account9-progress">
                            <div className="progress-track">
                                <div className="progress-fill"></div>
                            </div>
                        </div>

                        <h1 className="account9-title">
                            Stay in the know with notifications about First Access to
                            product, invites to experiences, personalized offers, and
                            order updated.
                        </h1>

                    </div>

                    <button onClick={() => setShowModal(true)} className="account9-btn">
                        NEXT
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
                                   <a className="text-none" href="/accountsetup7"> Allow</a>
                                </button>
                                

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Accountsetup6;
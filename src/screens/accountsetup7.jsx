
import { useState } from "react";


function Accountsetup7() {
    const [showModal, setShowModal] = useState(false);
    return (

        <div className="mobile-wrapper">
            <div className="page">

                <div className="account9">

                    <div className="account9-overlay"></div>

                    <div className="account9-content">

                        <div className="account9-progress">
                            <div className="progress-track">
                                <div className="progress-fill2"></div>
                            </div>
                        </div>

                        <h1 className="account9-title">
                            Want to sue Location Services to help you find the closest Nike Store, access in-store and location-based features, and see experiences near you?
                        </h1>

                    </div>

                    <button onClick={() => setShowModal(true)} className="account9-btn">
                        Next
                    </button>

                </div>
                {showModal && (
                    <div className="modal-overlay">
                        <div className="nike-alert">

                            <div className="alert-content">
                                <h3>Allow “Nike” to use your location?</h3>

                                <p>
                                    <small>
                                        This allows us to use your location to provide you with certain features like finding Nike stores near you and keeping you in the loop about Nike events and exclusive product releases. Enabling Bluetooth will verify your location in selected Nike stores to improve your experience.</small>
                                </p>
                            </div>


                            <div className="alert-map">

                                <img
                                    src="https://i.postimg.cc/8CLZx48Z/5614e7552edde7e14c7b84f2bc47eab0e961915b.png"
                                    alt="Map"
                                    className="map-image"
                                />

                                <div className="precise-switch">
                                    <span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.34297 5.20447V8.58266C4.34297 8.92361 4.64339 9.2 5.01399 9.2C5.26816 9.2 5.50051 9.06789 5.61417 8.85874L9.77167 1.20894L9.9712 0.658242C10.1127 0.2678 9.70891 -0.103654 9.28452 0.0264933L8.68593 0.21006L0.370934 4.03496C0.143601 4.13953 0 4.3533 0 4.58713C0 4.92808 0.300428 5.20447 0.671025 5.20447H4.34297Z" fill="#007AFF" />
                                    </svg>
                                    </span>
                                    <span>Precise: On</span>
                                </div>

                                <div className="precise-pin"></div>

                            </div>



                            <a className="allow-t" href="/accountsetup8"> <div className="alert-buttons">
                                <button className="alert-btn">
                                    Allow Once
                                </button>
                            </div></a>


                            <a className="allow-t" href="/accountsetup8">
                                <div className="alert-buttons">
                                    <button className="alert-btn">
                                        Allow While Using App
                                    </button>
                                </div>
                            </a>
                            <a className="allow-t" href="/accountsetup8">
                                <div className="alert-buttons">
                                    <button className="alert-btn">
                                        Don't Allow
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

export default Accountsetup7;
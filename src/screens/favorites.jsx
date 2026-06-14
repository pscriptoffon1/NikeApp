import { useState } from "react";
import Bottomnavfavorites from "../components/bottomnavfavorites";

function Favorites() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="favourites-page">

                    <div className="favourites-title">
                        <h1>Favourites</h1>
                    </div>

                    <div className="favourites-products">

                        <div
                            className="favourite-product"
                            onClick={() => setShowDrawer(true)}
                        >
                            <img
                                src="https://i.postimg.cc/MGpXpnSd/d188632c840b126c89d081644a33726835ddb4b4.png"
                                alt=""
                                className="favourite-image"
                            />

                            <div className="favourite-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$60</p>
                            </div>
                        </div>

                        <div
                            className="favourite-product"
                            onClick={() => setShowDrawer(true)}
                        >
                            <img
                                src="https://i.postimg.cc/MGpXpnSd/d188632c840b126c89d081644a33726835ddb4b4.png"
                                alt=""
                                className="favourite-image"
                            />

                            <div className="favourite-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$60</p>
                            </div>
                        </div>

                    </div>

                </div>

                {showDrawer && (
                    <div
                        className="drawer-overlay"
                        onClick={() => setShowDrawer(false)}
                    >
                        <div
                            className="drawer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="drawer-product">

                                <img
                                    src="https://i.postimg.cc/MGpXpnSd/d188632c840b126c89d081644a33726835ddb4b4.png"
                                    alt=""
                                    className="drawer-image"
                                />

                                <div className="drawer-info">
                                    <div>
                                        <h4>Jordan Essentials</h4>
                                        <p>Men's Fleece Pullover Hoodie</p>
                                    </div>

                                    <span>US$60</span>
                                </div>

                            </div>

                            <h3 className="size-title">
                                Size
                            </h3>

                            <div className="size-list">

                                <button
                                    className="size-btn"
                                    onClick={() => {
                                        setShowDrawer(false);
                                        setShowSuccess(true);
                                    }}
                                >
                                    S (3Y-5Y / W 4-6)
                                </button>

                                <button
                                    className="size-btn active"
                                    onClick={() => {
                                        setShowDrawer(false);
                                        setShowSuccess(true);
                                    }}
                                >
                                    M (5Y-7Y / W 6-10)
                                </button>

                                <button
                                    className="size-btn disabled"
                                    onClick={() => {
                                        setShowDrawer(false);
                                        setShowSuccess(true);
                                    }}
                                >
                                    L (W 10-13 / M 8-12)
                                </button>

                            </div>


                        </div>
                    </div>
                )}

                {showSuccess && (
                    <div
                        className="drawer-overlay"
                        onClick={() => setShowSuccess(false)}
                    >
                        <div
                            className="success-drawer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="success-content">

                                <i className="fa-solid fa-circle-check success-icon"></i>

                                <h2>Added to Bag</h2>

                            </div>

                            <button
                                className="success-btn"
                                onClick={() => setShowSuccess(false)}
                            >
                                Continue
                            </button>

                        </div>
                    </div>
                )}

                <Bottomnavfavorites />

            </div>
        </div>
    );
}

export default Favorites;
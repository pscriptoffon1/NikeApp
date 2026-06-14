import { useState } from "react";
import Bottomnavbag from "../components/bottomnavbag";

function Bagempty() {
    const [showCheckout, setShowCheckout] = useState(false);
    const [showCheckout1, setShowCheckout1] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="empty-bag-page">

                    <div className="empty-bag-title">
                        <h1>Bag</h1>
                    </div>

                    <div className="empty-bag-content">

                        <div className="empty-bag-icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_46_6848)">
                                    <circle cx="30" cy="30" r="29" stroke="black" stroke-width="2" />
                                    <path d="M22.5 20C22.5 18.6193 23.6193 17.5 25 17.5H32.5C33.8807 17.5 35 18.6193 35 20V20C35 21.3807 33.8807 22.5 32.5 22.5H22.5V20Z" stroke="black" stroke-width="2" />
                                    <path d="M37.1875 22.5H40V40C40 41.3807 38.8807 42.5 37.5 42.5H20C18.6193 42.5 17.5 41.3807 17.5 40V22.5H30.1562" stroke="black" stroke-width="2" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_6848">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                        <p>
                            Your bag is empty.
                            <br />
                            When you add products,
                            they’ll appear here.
                        </p>

                    </div>

                    <button
                        className="empty-bag-btn"
                        onClick={() => setShowCheckout(true)}
                    >
                        Start Shopping
                    </button>

                </div>

                {showCheckout && (
                    <>
                        <div
                            className="checkout3-overlay"
                            onClick={() => setShowCheckout(false)}
                        ></div>

                        <div className="checkout3-drawer">

                            <div className="checkout3-product">
                                <h3>Nike Everyday Plus Cushioned</h3>
                                <p>Mystic Navy/Worn Blue/Worn Blue</p>
                            </div>

                            <div className="checkout3-row">
                                <span>Delivery</span>

                                <div>
                                    <span className="error-text">
                                        Select Delivery
                                    </span>

                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>

                            <div className="checkout3-row">
                                <span>Payment</span>

                                <div>
                                    <span className="error-text">
                                        Select Payment
                                    </span>

                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>

                            <div className="checkout3-row">
                                <span>Purchase Summary</span>

                                <div>
                                    <span className="summary3-price">
                                        US$10.00
                                    </span>

                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>

                            <div className="checkout3-terms">
                                By tapping 'Submit Payment', I agree to the Terms of Sale.
                            </div>

                            <button
                                className="btn btn-dark"
                                onClick={() => setShowCheckout1(true)}
                            >
                                Start Shopping
                            </button>



                        </div>
                    </>
                )}


                {/* Checkout */}
                {showCheckout1 && (
                    <div className="modal fade show d-block">
                        <div className="modal-dialog modal-dialog-bottom">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5>Checkout</h5>

                                    <button
                                        className="btn-close"
                                        onClick={() => setShowCheckout1(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">

                                    <div
                                        className="d-flex justify-content-between py-3 border-bottom"
                                     
                                    >
                                        <span>Payment</span>
                                        <input className="inp-p"  type="text" />
                                        <i    onClick={() => {
                                            setShowCheckout1(false);
                                            setShowAddCard(true);
                                        }} className="fa-solid fa-plus"></i>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Add Credit Card */}
                {showAddCard && (
                    <div className="modal fade show d-block">
                        <div className="modal-dialog modal-dialog-bottom">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5>Add Credit Card</h5>

                                    <button
                                        className="btn-close"
                                        onClick={() => setShowAddCard(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">

                                    <input
                                        className="form-control mb-3"
                                        placeholder="Card Number"
                                    />

                                    <button
                                        className="btn btn-dark w-100"
                                        onClick={() => {
                                            setShowAddCard(false);
                                            setShowPayment(true);
                                        }}
                                    >
                                        Add Credit Card
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Payment */}
                {showPayment && (
                    <div className="modal fade show d-block">
                        <div className="modal-dialog modal-dialog-bottom">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5>Payment</h5>

                                    <button
                                        className="btn-close"
                                        onClick={() => setShowPayment(false)}
                                    ></button>
                                </div>

                                <div className="modal-body">

                                    <div className="">
                                        <input placeholder="136******383" className="border p-3 rounded mb-3 col-12" type="text" />
                                        
                                    </div>

                                    <a href="/confirmation"><button className="btn btn-dark w-100">
                                        Continue
                                    </button>
</a>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                <Bottomnavbag />

            </div>
        </div>
    );
}

export default Bagempty;








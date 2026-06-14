import Bottomnavprofile from "../components/Bottomnavprofile";
import { useState } from "react";

function Checkprofile() {
    const [showSizeDrawer, setShowSizeDrawer] = useState(false);
    const [showSizeDrawer2, setShowSizeDrawer2] = useState(false);
    return (
        <div className="mobile-wrapper">
            <div className="check-profile">

                <div className="top-bar44">
                    <h3>Order Details</h3>
                    <button className="close-btn44"><a className="tt2" href="/profile">✕</a></button>
                </div>

                <div className="order-info44">
                    <p>Purchased Online - May 03, 2022</p>
                    <p>C1293819387 - US$10</p>
                </div>

                <div className="divider"></div>

                <div className="product-section44">
                    <h4 className="status">Order confirmed</h4>

                    <div className="product-card44">
                        <img
                            src="https://i.postimg.cc/cJCKPLBx/e12f0cd8567add6287f75b773008a91e1c4bfa3b.png"
                            alt="product"
                            className="product-image44"
                        />

                        <div className="product-details44">
                            <h5>Jordan Essentials</h5>

                            <p>
                                Men’s Fleece Pullover Hoodie
                            </p>
                        </div>
                    </div>

                    <button onClick={() => setShowSizeDrawer(true)} className="track-btn44">
                        Track Shipment
                    </button>
                </div>

                <div className="divider44"></div>

                <div className="delivery-section44">

                    <div className="row">
                        <span>Delivery</span>
                        <p>
                            John Smith <br />
                            2950 S 108th St <br />
                            53227, West Allis, US <br />
                            john@mail.com
                        </p>
                    </div>

                 <a className="tt2" href="/qrcode">  <div className="row">
                        <span>Purchase Number</span>
                        <p>C19283791823</p>
                    </div></a> 

                    <div className="row">
                        <span>Payment</span>
                        <p>136******383<svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0.5H38C39.933 0.5 41.5 2.067 41.5 4V24C41.5 25.933 39.933 27.5 38 27.5H4C2.067 27.5 0.5 25.933 0.5 24V4C0.5 2.067 2.067 0.5 4 0.5Z" fill="white" stroke="#DDDDDD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9999 20.2606C19.5788 21.4858 17.7355 22.2254 15.7212 22.2254C11.2267 22.2254 7.58325 18.5429 7.58325 14.0004C7.58325 9.45785 11.2267 5.77539 15.7212 5.77539C17.7355 5.77539 19.5788 6.51502 20.9999 7.74021C22.4209 6.51502 24.2643 5.77539 26.2786 5.77539C30.773 5.77539 34.4165 9.45785 34.4165 14.0004C34.4165 18.5429 30.773 22.2254 26.2786 22.2254C24.2643 22.2254 22.4209 21.4858 20.9999 20.2606Z" fill="#ED0006" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 20.2606C22.7498 18.752 23.8593 16.5071 23.8593 14.0004C23.8593 11.4937 22.7498 9.24883 21 7.74021C22.4211 6.51502 24.2644 5.77539 26.2787 5.77539C30.7731 5.77539 34.4166 9.45785 34.4166 14.0004C34.4166 18.5429 30.7731 22.2254 26.2787 22.2254C24.2644 22.2254 22.4211 21.4858 21 20.2606Z" fill="#F9A000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0001 20.2604C22.7498 18.7518 23.8593 16.507 23.8593 14.0003C23.8593 11.4936 22.7498 9.24885 21.0001 7.74023C19.2504 9.24885 18.1409 11.4936 18.1409 14.0003C18.1409 16.507 19.2504 18.7518 21.0001 20.2604Z" fill="#FF5E00" />
                        </svg>
                        </p>
                    </div>

                    <div className="price-box44">
                        <div className="price-row44">
                            <span>Subtotal</span>
                            <span>US$10.00</span>
                        </div>

                        <div className="price-row44">
                            <span>Delivery</span>
                            <span>US$0.00</span>
                        </div>

                        <div className="price-row44">
                            <span>Tax</span>
                            <span>US$0.00</span>
                        </div>

                        <div className="price-row44 total">
                            <span>Total</span>
                            <span>US$10.00</span>
                        </div>
                    </div>

                </div>
                <br /><br />
                <div className="divider44"></div>

                <div className="help-topics44">
                    <h3>Quick Help Topics</h3>
                    <span>›</span>
                </div><br /><br /><br /><br />
                {showSizeDrawer && (
                    <div className="size-drawer1">
                        <div className="drawer-header1">

                            <div className="drawer-content">

                                <h2 className="drawer-title">
                                    Want to cancel your order?
                                </h2>

                                <p className="drawer-text">
                                    You can cancel orders for a short time after they are placed -
                                    free of charge.
                                </p>

                            </div>

                            <div className="drawer-buttons">

                                <button onClick={() => setShowSizeDrawer2(true)} className="drawer-btn-black">
                                    Cancel Order
                                </button>

                                <button onClick={() => setShowSizeDrawer(false)} className="drawer-btn-white">
                                    Keep Order
                                </button>

                            </div>

                        </div>
                    </div>
                )}

                {showSizeDrawer2 && (
                    <div className="size-drawer1">
                        <div className="drawer-header1">

                            <div className="drawer-content">

                                <h2 className="drawer-title">
                                    Your order has
                                    been cancelled
                                </h2>

                                <p className="drawer-text">
                                    Good news! Your cancellation has been processed and you won’t be charged. It can take a few minutes for this page to show your order’s status updated.
                                </p>

                            </div>

                            <div className="drawer-buttons">

                                <button onClick={() => setShowSizeDrawer2(false)} className="drawer-btn-black">
                                    Got It
                                </button>



                            </div>

                        </div>
                    </div>
                )}


                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Checkprofile;



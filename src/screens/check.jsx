function Check() {
    return (
        <div className="mobile-wrapper">
            <div className="page check-page">

                <div className="check-header">
                    <div>
                        <h1>Thank You For Your Order</h1>

                        <p>
                            We've emailed you a confirmation to
                            <br />
                            <strong>john@mail.com</strong> and we'll notify you
                            <br />
                            when your order has been dispatched.
                        </p>
                    </div>

                    <a href="/home2"> <button className="check-close">
                        <i className="fa-solid fa-xmark"></i>
                    </button></a>
                </div>

                <div className="check-divider"></div>

                <div className="check-info">

                    <div className="check-row">
                        <span>Delivery</span>

                        <p>
                            John Smith <br />
                            2950 S 108th St <br />
                            53227, West Allis, US <br />
                            john@mail.com
                        </p>
                    </div>

                    <div className="check-row">
                        <span>Purchase Number</span>
                        <p>C19283791823</p>
                    </div>

                    <div className="check-row">
                        <span>Payment</span>

                        <div className="payment-card">
                            <span>136******383</span>
                            <div className="mastercard"><svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4166 14.4852C11.9956 15.7104 10.1522 16.45 8.13798 16.45C3.6435 16.45 0 12.7675 0 8.225C0 3.68246 3.6435 0 8.13798 0C10.1522 0 11.9956 0.739625 13.4166 1.96482C14.8377 0.739625 16.681 0 18.6953 0C23.1898 0 26.8333 3.68246 26.8333 8.225C26.8333 12.7675 23.1898 16.45 18.6953 16.45C16.681 16.45 14.8377 15.7104 13.4166 14.4852Z" fill="#ED0006" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4165 14.4852C15.1663 12.9766 16.2758 10.7317 16.2758 8.225C16.2758 5.71826 15.1663 3.47344 13.4165 1.96482C14.8376 0.739625 16.6809 0 18.6952 0C23.1896 0 26.8331 3.68246 26.8331 8.225C26.8331 12.7675 23.1896 16.45 18.6952 16.45C16.6809 16.45 14.8376 15.7104 13.4165 14.4852Z" fill="#F9A000" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4168 14.485C15.1666 12.9764 16.276 10.7316 16.276 8.22493C16.276 5.71824 15.1666 3.47346 13.4168 1.96484C11.6671 3.47346 10.5576 5.71824 10.5576 8.22493C10.5576 10.7316 11.6671 12.9764 13.4168 14.485Z" fill="#FF5E00" />
                            </svg>
                            </div>
                        </div>
                    </div>

                    <div className="summary">

                        <div>
                            <span>Subtotal</span>
                            <span>US$10.00</span>
                        </div>

                        <div>
                            <span>Delivery</span>
                            <span>US$0.00</span>
                        </div>

                        <div>
                            <span>Tax</span>
                            <span>US$0.00</span>
                        </div>

                        <div className="total">
                            <strong>Total</strong>
                            <strong>US$10.00</strong>
                        </div>

                    </div>

                </div>

                <div className="check-divider"></div>

                <div className="check-product">

                    <h3>Item</h3>

                    <div className="product-card">

                        <img
                            src="https://i.postimg.cc/cJCKPLBx/e12f0cd8567add6287f75b773008a91e1c4bfa3b.png"
                            alt=""
                        />

                        <div>
                            <span className="green-text">
                                Jordan Essentials
                            </span>

                            <h4>
                                Jordan Essentials
                            </h4>

                            <p>
                                Men's Fleece Pullover Hoodie
                            </p>
                        </div>

                    </div>

                </div>

                <div className="check-buttons">

                    <button className="track-btn222">
                        Track Order Status
                    </button>

                    <button className="continue-btn222">
                        Continue Shopping
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Check;
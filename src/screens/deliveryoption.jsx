
function Deliveryoption() {

    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="delivery-page">

                    <div className="delivery-header">
                        <button className="close-btn1 ">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <h3>Jordan Flight Essentials</h3>
                    </div>

                    <div className="delivery-content">

                        <h2>Delivery</h2>

                        <div className="delivery-input">
                            <label>Email</label>

                            <input
                                type="email"
                               
                                placeholder="Email"
                            />
                        </div>

                    </div>

                    <div className="delivery-divider"></div>

                    <div className="delivery-options">

                        <h2>Delivery Options</h2>

                        <div className="delivery-option">
                            <h4>Free No-Rush Delivery</h4>
                            <p>Arrives Thu, 12 May</p>
                        </div>

                        <div className="delivery-option">
                            <h4>Free Delivery</h4>
                            <p>Arrives Wed, 11 May</p>
                        </div>

                        <div className="delivery-option">
                            <h4>US$10.00 Delivery</h4>
                        </div>

                        <p className="delivery-note">
                            All dates and prices are subject to change.
                            Actual delivery options will be calculated at checkout.
                        </p>

                       <a href="/bagempty"> <button className="continue-btn9">
                            Continue
                        </button></a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Deliveryoption;
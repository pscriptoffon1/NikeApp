import { useState } from "react";
import Bottomnavbag from "../components/bottomnavbag";

function Bag() {
    const [showPromoDrawer, setShowPromoDrawer] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="bag-page">

                    <h1 className="bag-title">Bag</h1>

                    <div className="bag-info">
                        <div>
                            <h3>Get Your Gear Faster</h3>
                            <p>Look for store pick up at checkout.</p>
                        </div>

                        <div className="bag-dots">
                            <span></span>
                            <span></span>
                            <span className="active"></span>
                        </div>
                    </div>

                    <div className="bag-product">

                        <img
                            src="https://i.postimg.cc/MGpXpnSd/d188632c840b126c89d081644a33726835ddb4b4.png"
                            alt=""
                            className="bag-image"
                        />

                        <div className="bag-product-info">

                            <div>
                                <h4>Jordan Essentials</h4>

                                <p>
                                    Men's Fleece Pullover Hoodie
                                </p>
                            </div>

                            <div className="bag-bottom">

                                <div className="qty">
                                    <span>Qty 1</span>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>

                                <span className="price">
                                    US$10.00
                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="delivery-section">

                        <div className="delivery-block">
                            <h4>Delivery</h4>

                            <p>Arrives Wed, 11 May</p>

                            <div className="delivery-links">
                                <span>to Fri, 13 May</span>
                                <a href="#">Edit Location</a>
                            </div>
                        </div>

                        <div className="delivery-block">
                            <h4>Pick-Up</h4>

                            <a href="#">Find a Store</a>
                        </div>

                    </div>

                    <div
                        className="promo-code"
                        onClick={() => setShowPromoDrawer(true)}
                    >
                        <span>Have a Promo Code?</span>
                        <i className="fa-solid fa-plus"></i>
                    </div>

                    <div className="bag-summary">

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>US$10.00</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>Standard - Free</span>
                        </div>

                        <div className="summary-row total">
                            <span>Estimated Total</span>
                            <span>US$10.00 + Tax</span>
                        </div>

                    </div>
                   <a href="/deliveryoption"> <svg width="333" height="53" viewBox="0 0 333 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="332" height="52" rx="26" fill="black" />
                        <rect x="0.5" y="0.5" width="332" height="52" rx="26" stroke="black" />
                        <path d="M136.516 33.32C134.959 33.32 133.7 32.7653 132.74 31.656C131.769 30.5573 131.284 29.1067 131.284 27.304C131.284 25.512 131.769 24.0773 132.74 23C133.7 21.912 134.959 21.368 136.516 21.368C137.807 21.368 138.889 21.7147 139.764 22.408C140.617 23.1013 141.119 24.04 141.268 25.224H139.38C139.231 24.5413 138.916 24.0133 138.436 23.64C137.956 23.256 137.348 23.064 136.612 23.064C135.556 23.064 134.729 23.4427 134.132 24.2C133.535 24.9573 133.236 25.992 133.236 27.304C133.236 28.6267 133.535 29.6773 134.132 30.456C134.74 31.2347 135.567 31.624 136.612 31.624C137.412 31.624 138.057 31.4 138.548 30.952C139.039 30.504 139.343 29.8747 139.46 29.064H141.332C141.193 30.3973 140.697 31.4427 139.844 32.2C138.991 32.9467 137.881 33.32 136.516 33.32ZM147.395 24.536C148.259 24.536 148.931 24.7867 149.411 25.288C149.901 25.7893 150.147 26.4827 150.147 27.368V33H148.275V27.768C148.275 26.7227 147.8 26.2 146.851 26.2C146.264 26.2 145.789 26.4027 145.427 26.808C145.064 27.2027 144.883 27.768 144.883 28.504V33H143.011V21.608H144.883V25.816C145.459 24.9627 146.296 24.536 147.395 24.536ZM159.922 28.92V29.384H153.826C153.868 30.1413 154.082 30.728 154.466 31.144C154.86 31.5493 155.388 31.752 156.05 31.752C156.999 31.752 157.639 31.304 157.97 30.408L159.762 30.568C159.506 31.432 159.052 32.0933 158.402 32.552C157.762 33.0107 156.978 33.24 156.05 33.24C154.77 33.24 153.762 32.8293 153.026 32.008C152.29 31.1973 151.922 30.1413 151.922 28.84C151.922 27.5813 152.279 26.5467 152.994 25.736C153.719 24.936 154.69 24.536 155.906 24.536C157.111 24.536 158.082 24.9253 158.818 25.704C159.554 26.4933 159.922 27.5653 159.922 28.92ZM157.394 26.52C157.031 26.1573 156.551 25.976 155.954 25.976C155.346 25.976 154.86 26.1573 154.498 26.52C154.114 26.8933 153.895 27.416 153.842 28.088H158.05C157.964 27.3947 157.746 26.872 157.394 26.52ZM165.123 33.24C163.907 33.24 162.952 32.856 162.259 32.088C161.565 31.32 161.219 30.264 161.219 28.92C161.219 27.5653 161.571 26.4987 162.275 25.72C162.979 24.9307 163.939 24.536 165.155 24.536C166.168 24.536 166.995 24.7973 167.635 25.32C168.275 25.8427 168.669 26.584 168.819 27.544H167.011C166.776 26.5413 166.168 26.04 165.187 26.04C164.493 26.04 163.965 26.2853 163.603 26.776C163.24 27.256 163.059 27.96 163.059 28.888C163.059 29.7947 163.24 30.4987 163.603 31C163.976 31.4907 164.499 31.736 165.171 31.736C166.163 31.736 166.776 31.2027 167.011 30.136H168.819C168.659 31.128 168.259 31.896 167.619 32.44C166.979 32.9733 166.147 33.24 165.123 33.24ZM178.095 33H175.887L173.391 29.048L172.383 30.024V33H170.511V21.608H172.383V28.04L175.599 24.744H177.951L174.687 27.896L178.095 33ZM185.681 32.008C184.913 32.8293 183.926 33.24 182.721 33.24C181.505 33.24 180.523 32.8347 179.777 32.024C179.009 31.2027 178.625 30.1573 178.625 28.888C178.625 27.5973 179.009 26.5467 179.777 25.736C180.545 24.936 181.537 24.536 182.753 24.536C183.958 24.536 184.939 24.936 185.697 25.736C186.454 26.5467 186.833 27.5867 186.833 28.856C186.833 30.1467 186.449 31.1973 185.681 32.008ZM182.721 31.736C183.425 31.736 183.979 31.4747 184.385 30.952C184.801 30.4293 185.009 29.7307 185.009 28.856C185.009 27.9813 184.806 27.2933 184.401 26.792C183.995 26.2907 183.435 26.04 182.721 26.04C182.017 26.04 181.462 26.296 181.057 26.808C180.662 27.32 180.465 28.0133 180.465 28.888C180.465 29.752 180.667 30.4453 181.073 30.968C181.478 31.48 182.027 31.736 182.721 31.736ZM193.853 29.24V24.744H195.725V33H193.933L193.901 31.848C193.325 32.7547 192.471 33.208 191.341 33.208C190.477 33.208 189.799 32.9573 189.309 32.456C188.829 31.9547 188.589 31.2613 188.589 30.376V24.744H190.461V29.976C190.461 31.0213 190.935 31.544 191.885 31.544C192.471 31.544 192.946 31.3467 193.309 30.952C193.671 30.5467 193.853 29.976 193.853 29.24ZM202.028 26.152L200.332 26.088V30.68C200.332 30.9787 200.39 31.1867 200.508 31.304C200.625 31.4213 200.828 31.48 201.116 31.48H202.028V33H200.54C199.804 33 199.27 32.84 198.94 32.52C198.62 32.1893 198.46 31.656 198.46 30.92V26.104L197.276 26.152V24.744L198.46 24.792V22.2H200.332V24.792L202.028 24.744V26.152Z" fill="white" />
                    </svg></a>
                </div><br /><br />

                {showPromoDrawer && (
                    <div
                        className="promo-overlay"
                        onClick={() => setShowPromoDrawer(false)}
                    >
                        <div
                            className="promo-drawer"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className="drawer-line"></div>

                            <h3 className="promo-remove">
                                Remove
                            </h3>

                            <div className="promo-progress">
                                <div className="progress-fill"></div>
                            </div>

                            <div className="promo-levels">
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>

                            <button
                                className="promo-btn1"
                                onClick={() => setShowPromoDrawer(false)}
                            >
                                Done
                            </button>


                        </div>
                    </div>
                )}

                <Bottomnavbag />

            </div>
        </div>
    );
}

export default Bag;
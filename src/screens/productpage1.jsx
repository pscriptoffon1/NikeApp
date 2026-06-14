

import { useState } from "react";
import Bottomnavshop from "../components/bottomnavshop"



function Productpage1() {
    const [showSizeDrawer, setShowSizeDrawer] = useState(false);
    return (

        <div className="mobile-wrapper">
            <div className="page product-page1">

                {/* Header */}
                <div className="control-bar">
                    <a className="text-back" href="/search2">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        Best Sellers
                    </h3>
                    </a>
                    <div className="control-right">
                        <a className="tt2" href="/filter"><i className="fa-solid fa-sliders"></i></a>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* Main Image */}
                <div className="product-main-image">
                    <img
                        src="https://i.postimg.cc/cJCKPLBx/e12f0cd8567add6287f75b773008a91e1c4bfa3b.png"
                        alt="product"
                    />

                    <button className="favorite-btn">

                    </button>
                </div>

                {/* Scroll */}
                <div className="scroll-bar">
                    <div className="scroll-active"></div>
                </div>

                {/* Thumbnails */}
                <div className="thumbnail-list">
                    <img
                        src="https://inter-sport.s3.amazonaws.com/products/DX1158/white_100/DX1158-1_resized_800X800.png"
                        alt=""
                    />

                    <img
                        src="https://png.klev.club/uploads/posts/2024-04/png-klev-club-5w4k-p-noski-naik-png-18.png"
                        alt=""
                    />

                    <img
                        src="https://destroyshop.ru/images/detailed/14188/95c6529f014111ed8990ac1f6b72b910_3f312fad014611ed8990ac1f6b72b910.png"
                        alt=""
                    />
                </div>

                {/* Content */}
                <div className="product-content">

                    <div className="product-header-info">
                        <div className="product-title-group">
                            <span className="product-category">
                                Training Crew Socks
                            </span>

                            <h1 className="product-title">
                                Nike Everyday Plus Cushioned
                            </h1>
                        </div>

                        <div className="product-price">
                            US$10
                        </div>
                    </div>

                    <p className="product-description">
                        The Nike Everyday Plus Cushioned Socks bring comfort to your workout
                        with extra cushioning under the heel and forefoot and a snug,
                        supportive arch band. Sweat-wicking power and breathability up top
                        help keep your feet dry and cool to help push you through that extra
                        set.
                        <br /><br />
                        Shown: Multi-Color
                        <br />
                        Style: SX6897-965
                    </p>

                    <a href="#" className="product-details-link">
                        View Product Details
                    </a>

                </div>
                {/* Button Group */}
                <div className="product-buttons">

                    <button
                        className="size-btn"
                        onClick={() => setShowSizeDrawer(true)}
                    >
                        <span>Select Size</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    <a href="/productpage2"><button className="bag-btn">
                        Add to Bag
                    </button>
                    </a>
                    <button className="fav-btn">
                        <span>Favourite</span>
                        <i className="fa-regular fa-heart"></i>
                    </button>

                </div>
                {showSizeDrawer && (
                    <div className="size-drawer">

                        <div className="drawer-header">
                            <h3>Select size to see options</h3>


                            <button
                                className="close-btn"
                                onClick={() => setShowSizeDrawer(false)}
                            >
                                <i className="fa-solid fa-xmark xx"></i>
                            </button>
                        </div>

                        <div className="drawer-size">
                            S (3Y-5Y / W 4-6)
                        </div>

                        <div className="drawer-size">
                            M (5Y-7Y / W 6-10 / M 6-8)
                        </div>

                        <div className="drawer-size">
                            L (W 10-13 / M 8-12)
                        </div>

                    </div>
                )}
                {/* Related Products */}
                <div className="product-category">
                    <div className="category-title">
                        <h2>New Arrivals</h2>
                    </div>

                    <div className="category-products">

                        <div className="category-product">
                            <img
                                src="https://destroyshop.ru/images/detailed/14188/95c6529f014111ed8990ac1f6b72b910_3f312fad014611ed8990ac1f6b72b910.png"
                                alt="product"
                            />

                            <div className="category-info">
                                <h4>Jordan Essentials</h4>
                                <span>US$120</span>
                            </div>
                        </div>

                        <div className="category-product">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzc8ogHUxakzvlb3nxBXMJXFHnAu8Bs-F7tg&s"
                                alt="product"
                            />

                            <div className="category-info">
                                <h4>Jordan Essentials</h4>
                                <span>US$120</span>
                            </div>
                        </div>

                    </div>
                </div>


                <Bottomnavshop />
            </div>
        </div>

    );
}

export default Productpage1;
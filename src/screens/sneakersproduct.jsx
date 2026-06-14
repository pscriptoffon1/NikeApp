
import Bottomnavshop from "../components/bottomnavshop";

function Sneakersproduct() {
    return (
        <div className="mobile-wrapper">
            <div className="page1111">
                <div className="color-p">

                    {/* Header */}

                    {/* Control Bar */}
                    <div className="control-bar">
                        <a className="text-back" href="/search2">
                            <div className="control-left">
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                        </a>

                        <a className="t2" href="/home3"> <h3 className="control-title">
                            Sneakers
                        </h3>
                        </a>
                        <div className="control-right">
                            <a className="tt2" href="/filter"><i className="fa-solid fa-sliders"></i></a>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="tab-bar">
                        <div className="tab active">All</div>
                        <div className="tab">Shoes</div>
                        <div className="tab">Top & T-Shirt</div>
                        <div className="tab">Hoodie</div>
                        <div className="tab">FAST</div>
                    </div>

                    {/* Products */}
                    <div className="product-cube">

                        <div className="product-row">

                            <div className="col-6">
                                <div className="product-card">
                                    <a href="/productpage1">
                                        <div className="product-image" >
                                            <div className="product-image">
                                                <img src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-e999-p-kartinki-krossovki-nike-na-prozrachnom-fon-3.png" alt="Jordan Essentials" />

                                                <button className="favorite-btn">
                                                    <i className="fa-regular fa-heart"></i>
                                                </button>
                                            </div>
                                            <button className="favorite-btn">
                                                <i className="fa-regular fa-heart"></i>
                                            </button>
                                        </div>
                                    </a>
                                </div>
                                <div className="product-info">
                                    <h4>Jordan Essentials</h4>
                                    <p>Men's Fleece Pullover Hoodie</p>
                                    <p>5 Colours</p>
                                    <span>US$60</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product-card">

                                    <div className="product-image">
                                        <img src="https://sochi.streetfoot.ru/wp-content/uploads/2019/02/144120f7c-600x428.jpg" alt="Jordan Essentials" />
                                        <button className="favorite-btn">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>

                                    <div className="product-info">
                                        <h4>Jordan Essentials</h4>
                                        <p>Men's Fleece Pullover Hoodie</p>
                                        <p>5 Colours</p>
                                        <span>US$60</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-row">
                            <div className="col-6">
                                <div className="product-card">

                                    <div className="product-image">
                                        <img src="https://png.pngtree.com/png-clipart/20241210/original/pngtree-nike-shoes-transparent-png-image_17778783.png" alt="Jordan Essentials" />
                                        <button className="favorite-btn">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>

                                    <div className="product-info">
                                        <h4>Jordan Essentials</h4>
                                        <p>Men's Fleece Pullover Hoodie</p>
                                        <p>5 Colours</p>
                                        <span>US$60</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product-card">
                                    <div className="product-image">
                                        <img src="https://png.pngtree.com/png-vector/20250129/ourmid/pngtree-trendy-nike-dunk-low-shoes-comfortable-top-sneakers-png-image_15363998.png" alt="Jordan Essentials" />
                                        <button className="favorite-btn">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>

                                    <div className="product-info">
                                        <h4>Jordan Essentials</h4>
                                        <p>Men's Fleece Pullover Hoodie</p>
                                        <p>5 Colours</p>
                                        <span>US$60</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Bottomnavshop />
                </div>
            </div>
        </div>
    );
}

export default Sneakersproduct;
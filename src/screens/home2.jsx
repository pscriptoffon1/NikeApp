import Btnnext from "../components/btnnext"
import Bottomnav2 from "../components/bottomnav2"



function Discover() {

    return (

        <div className="mobile-wrapper">
            <div className="page1111">

                {/* Control Bar */}
                <div className="control-bar">
                    <a className="text-back" href="/discover">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        Jordan Flight Essentials
                    </h3>
                    </a>
                    <div className="control-right">
                        <i className="fa-solid fa-sliders"></i>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* Tabs */}
                <div className="tab-bar">
                    <div className="tab active">Men</div>
                    <div className="tab">Jordan Flight Essentials</div>
                    <div className="tab">Jordan Flight Essentials</div>
                </div>

                {/* Products */}
                <div className="product-cube">

                    <div className="product-row">
                        <div className="col-6">
                            <div className="product-card">
                                <div className="product-image" >
                                    <div className="product-image">
                                        <img src="https://i.postimg.cc/1trJ3rHQ/bf10b0d66f255b014500a613b7b9e508cf7163be.png" alt="Jordan Essentials" />

                                        <button className="favorite-btn">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>
                                    <button className="favorite-btn">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
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
                                    <img src="https://i.postimg.cc/mD11dLPy/6d3b05b17acb1da5fdcba38b88d7ff803baa82be.png" alt="Jordan Essentials" />
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
                                    <img src="https://i.postimg.cc/P5fLgzLD/f2e2e2a7c8a54ab583d4ffa7ce60b2e5dace288e.png" alt="Jordan Essentials" />
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
                                    <img src="https://i.postimg.cc/FHnK2t5P/33ced400c6ff9157bf3e8b1f54561b2e86dd5e16.png" alt="Jordan Essentials" />
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

                {/* Home 01 nav */}
                <Bottomnav2 />

            </div>
        </div>
    );
}

export default Discover;
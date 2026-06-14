
import Bottomnavshop from "../components/bottomnavshop";

function Socksproduct() {
    return (
        <div className="mobile-wrapper">
            <div className="page1111">

                {/* Header */}
                {/* Control Bar */}
                <div className="control-bar">
                    <a className="text-back" href="/search2">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        socks
                    </h3>
                    </a>
                    <div className="control-right">
                        <i className="fa-solid fa-sliders"></i>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* Tabs */}
              

                {/* Products */}
                <div className="product-cube">

                    <div className="product-row">
                        <div className="col-6">
                            <div className="product-card">
                                <div className="product-image" >
                                    <div className="product-image">
                                        <img src="https://m.media-amazon.com/images/I/71zD+sTQxUL._AC_UY1000_.jpg" alt="Jordan Essentials" />

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
                                    <img src="https://images.asos-media.com/products/nike-training-everyday-cushioned-plus-3-pack-crew-socks-in-orange-blue-and-red/206091063-1-orange?$n_640w$&wid=513&fit=constrain" alt="Jordan Essentials" />
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
                                    <img src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bfd9489-a9cb-41ce-9523-e65f0018c4ad/U+NK+EVERYDAY+CSH+CRW+3PR+132.png" alt="Jordan Essentials" />
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
                                    <img src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4f9b277d-94f4-40ac-b717-e529ec98ec49/NIKE+X+LEGO+COLLECTION+SOCKS.png" alt="Jordan Essentials" />
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
    );
}

export default Socksproduct;
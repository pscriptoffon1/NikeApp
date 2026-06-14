import Bottomnavprofile from "../components/Bottomnavprofile";

function Purshases() {
    return (
        <div className="mobile-wrapper">
            <div className="page purchases-page">

                <div className="control-bar55">
                    <div className="back-btn">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>

                    <h3 className="page-title">
                        Jordan Flight Essentials
                    </h3>

                    <div className="empty-block"></div>
                </div>

                <div className="purchases-content55">

                    <div className="product-card55">
                        <div className="product-image">
                            <img
                                src="https://i.postimg.cc/cJCKPLBx/e12f0cd8567add6287f75b773008a91e1c4bfa3b.png"
                                alt=""
                            />
                        </div>

                        <div className="product-info55">
                            <span className="status">
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

                    <a href="/checkprofile"><button className="buy-again-btn">
                        Buy Again
                    </button></a>

                </div>

              <Bottomnavprofile/>
            </div>
        </div>
    );
}

export default Purshases;
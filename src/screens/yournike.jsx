import Bottomnavprofile from "../components/Bottomnavprofile";

function Yournike() {
    return (
        <div className="mobile-wrapper">
            <div className="yournike-page">

                <div className="yournike-bg"></div>
                <div className="yournike-overlay"></div>

                <div className="yournike-header">
                    <button className="back-btn">
                    </button>

                    <h2 className="yournike-title">
                        Your Nike Membership
                    </h2>

                    <div className="header-empty"></div>
                </div>

                <div className="yournike-content">

                    <div className="yournike-card">
                        <img
                            src="https://i.postimg.cc/rF83ywNB/7d03ff719fc585c2bfd61bce7a91343b32d5254e.png"
                            alt=""
                            className="yournike-image"
                        />
                    </div>

                    <div className="yournike-counter">
                        <span className="active">01</span>
                        <span>/02</span>
                    </div>

                  

                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Yournike;
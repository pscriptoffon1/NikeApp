import Bottomnavshop from "../components/bottomnavshop";

function Qrcode() {
    return (
        <div className="mobile-wrapper">
            <div className="page qr-page">
                {/* Header */}
                <div className="control-bar">
                    <a className="text-back" href="/checkprofile">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        PASS
                    </h3>
                    </a>
                    <div className="control-right">
                        
                    </div>
                </div>
                <div className="qr-content">

                    <div className="qr-card">

                        <div className="qr-header">
                            <h2 className="qr-name">John Smith</h2>

                            <p className="qr-member">
                                Member Since May 2022
                            </p>
                        </div>

                        <img
                            src="https://i.postimg.cc/RhdqKZY2/9f1799c3565af7cf5b86fd6bf8cc32cc5cbe84a3.png"
                            alt="QR Code"
                            className="qr-image"
                        />

                        <p className="qr-description">
                            Check in easily and get personalised service at Nike
                            stores and events. Learn more.
                        </p>

                    </div>

                </div>

                <Bottomnavshop />
            </div>
        </div>
    );
}

export default Qrcode;
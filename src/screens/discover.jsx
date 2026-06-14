import Btnnext from "../components/btnnext"
import Bottomnav from "../components/bottomnav"



function Discover() {

    return (

        <div className="mobile-wrapper">
            <div className="page1111">

                <div className="home01">

                    <div className="home-header">
                        <h1>Discover</h1>
                        <p>Tuesday, 3 May</p>
                    </div>

                    <div className="hero-image">
                        <img src="https://i.postimg.cc/SxxGKVpK/bb351e19e79d34332ea94a41ed8cd1c4f14fcd64.png" alt="" />
                    </div>

                    <div className="new-section">

                        <div className="new-title">
                            <span>What's new</span>
                            <h2>The latest arrivals from Nike</h2>
                        </div>

                        <div className="products-slider">

                            <div className="product-card">
                                <img src="https://i.postimg.cc/g03cTxYv/68816feee61ad123691ab5a8dbc4d2aebb0d0c20.png" alt="" />
                                <div className="product-info">
                                    <h3>Air Jordan XXXVI</h3>
                                    <p>US$185</p>
                                </div>
                            </div>

                            <div className="product-card">
                                <img src="https://i.postimg.cc/g03cTxYv/68816feee61ad123691ab5a8dbc4d2aebb0d0c20.png" alt="" />
                                <div className="product-info">
                                    <h3>Air Jordan XXXVI</h3>
                                    <p>US$185</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bottom-banner">
                        <img src="https://i.postimg.cc/sxxrsxrz/8e51b235b8181479d2f7a6286beebcf74934f6ff.png" alt="" />
                    </div>

                  <Bottomnav/>

                </div>

            </div>
        </div>
    );
}

export default Discover;
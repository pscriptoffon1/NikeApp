import Bottomnavshop from "../components/bottomnavshop";

function Shop() {
    return (
        <div className="mobile-wrapper">
            <div className="page shop-page">

                <header className="control-bar">
                    <h1 className="shop-title">Shop</h1>

                    <a className="tt2" href="/shop2"><div className="header-icons">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div></a>
                </header>

                <div className="tab-bar">
                    <button className="tab active">Men</button>
                    <button className="tab">Women</button>
                    <button className="tab">Kids</button>
                </div>

                <section className="must-have-section">
                    <h2>Must-Haves, Best Sellers & More</h2>

                    <div className="cards-row">
                        <div className="shop-card">
                            <img
                                src="https://www.polar.com/blog/wp-content/uploads/2021/07/Frame-12-1.png"
                                alt="Best Sellers"
                            />
                            <p>Best Sellers</p>
                        </div>

                        <div className="shop-card">
                            <img
                                src="https://assets.fiba.basketball/image/upload/v1723150016/kl9vxmu4hudkrnkyhqvg.jpg"
                                alt="Featured in Nike Air"
                            />
                            <p>Featured in Nike Air</p>
                        </div>
                    </div>
                </section>

                <section className="banner-section">
                    <div className="banner">
                        <img
                            src="https://i.postimg.cc/sxxrsxrz/8e51b235b8181479d2f7a6286beebcf74934f6ff.png"
                            alt="New & Featured"
                        />
                        <h3>New & Featured</h3>
                    </div>

                    <div className="banner">
                        <img
                            src="https://i.postimg.cc/RFtBFFpC/b3d8e9acccb6e3d76d2d9645ca2249ebd7ba9c6f.png"
                            alt="New & Featured"
                        />
                        <h3>New & Featured</h3>
                    </div>
                </section>

                <Bottomnavshop />

            </div>
        </div>
    );
}

export default Shop;
import Bottomnavshop from "../components/bottomnavshop";

function Shop2() {
    return (
        <div className="shop2-page">

            <header className="shop2-header">
                <a href="/shop"><button className="back-btn">
                    ←
                </button></a>

                <h3>Jordan Flight Essentials</h3>

                <button className="search-btn">
                     <a className="tt2" href="/search"><div className="header-icons">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div></a>
                </button>
            </header>

            <main className="shop2-content">

                <section className="product-category">
                    <div className="category-header">
                        <h2>New Arrivals</h2>
                        <span>View All</span>
                    </div>

                    <div className="products-row">
                        <div className="sport-card">
                            <img src="https://i.postimg.cc/kMzdSxPC/4dd6f300790cff9b95fdbc7662256130e99f641a.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>

                        <div className="sport-card">
                            <img src="https://i.postimg.cc/RCkZmrFR/8d623e67a98f49763b09eee4b65c8c197f220624.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-category">
                    <div className="category-header">
                        <h2>Featured</h2>
                    </div>

                    <div className="products-row">
                        <div className="sport-card">
                            <img src="https://i.postimg.cc/PfYkmCXk/fa5a0567f36afd5e57d76fa310a7273930332449.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>

                        <div className="sport-card">
                            <img src="https://i.postimg.cc/BbGkhCST/3f542dbcb366e5e4d46ba1258d605f6cf8199acf.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-category">
                    <div className="category-header">
                        <h2>Shop by Sport</h2>
                        <span>View All</span>
                    </div>

                    <div className="products-row">
                        <div className="sport-card">
                            <img src="https://i.postimg.cc/9FLgT27c/dee041d23ce8a33dd9bb46c54e8a00bcf84df350.png" alt="" />
                            <span>Running</span>
                        </div>

                        <div className="sport-card">
                            <img src="https://i.postimg.cc/D025Jpfp/a94b78075bd05b1bd1a0fe541f93fcfaf24658f1.png" alt="" />
                            <span>Basketball</span>
                        </div>
                    </div>
                </section>

                <section className="product-category">
                    <div className="category-header">
                        <h2>Popular Products</h2>
                    </div>

                    <div className="products-row">
                        <div className="sport-card">
                            <img src="https://i.postimg.cc/63hfXVVB/130fe1a9fa193fce8b9c705a70974c2e66b06678.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>

                        <div className="sport-card">
                            <img src="https://i.postimg.cc/LsKtgQNp/0c4f0a61f34ca153ac5d864c6fc11137a8185f6b.png" alt="" />
                            <div className="product-info">
                                <h4>Jordan Essentials</h4>
                                <p>US$120</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Bottomnavshop />
        </div>
    );
}

export default Shop2;
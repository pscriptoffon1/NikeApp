

import Bottomnavshop from "../components/bottomnavshop"

function Reviews() {
    return (

        <div className="mobile-wrapper">
            <div className="page1111">
                {/* Header */}
                <div className="control-bar">
                    <a className="text-back" href="/search2">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        Reviews
                    </h3>
                    </a>
                    <div className="control-right">
                        <a className="tt2" href="/filter"><i className="fa-solid fa-sliders"></i></a>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <div className="review-title">

                    <h1>Nike Everyday Plus Cushioned</h1>

                    <span className="review-count">2863 Reviews</span>

                    <div className="rating-row">
                        <span>4.87 Stars</span>

                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                </div>

                <div className="review-stats">

                    <div className="stat-block">
                        <h4>Size</h4>

                        <div className="progress-line">
                            <div className="progress-dot size-dot"></div>
                        </div>

                        <div className="stat-labels">
                            <span>Fits Small</span>
                            <span>Run Large</span>
                        </div>
                    </div>

                    <div className="stat-block">
                        <h4>Comfort</h4>

                        <div className="progress-line">
                            <div className="progress-dot comfort-dot"></div>
                        </div>

                        <div className="stat-labels">
                            <span>Uncomfortable</span>
                            <span>Comfortable</span>
                        </div>
                    </div>

                    <div className="stat-block">
                        <h4>Durability</h4>

                        <div className="progress-line">
                            <div className="progress-dot durability-dot"></div>
                        </div>

                        <div className="stat-labels">
                            <span>Non-Durable</span>
                            <span>Durable</span>
                        </div>
                    </div>

                </div>

                <div className="reviews-list">

                    <div className="review-card">
                        <h3>True Classic, Impressive QC</h3>

                        <div className="review-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <span className="review-user">
                            b89237-bs8ad-cadu
                        </span>

                        <p>
                            Just as I expected. Reliable comfort, and still cool.
                            I was very impressed by the quality, all seams and
                            overlays are stitched nicely and...
                        </p>

                        <button>More</button>
                    </div>

                    <div className="review-card">
                        <h3>Disappointing</h3>

                        <div className="review-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>

                        <span className="review-user">
                            90302-fcw98efhw-v98wd8fh
                        </span>

                        <p>
                            A bit of a narrow toebox, not wide by any stretch.
                        </p>
                    </div>

                    <div className="review-card">
                        <h3>I would definitely buy this product again!!</h3>

                        <div className="review-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <span className="review-user">
                            2hg8-d8gadiu-a87dfydfba
                        </span>

                        <p>
                            Socks came fast, they are very durable and a good
                            quality. My kids love wearing them with all their
                            outfits! Fits just about any style!
                        </p>

                        <button>More</button>
                    </div>

                </div><br /><br /><br /><br /><br />

                <Bottomnavshop />
            </div>
        </div>

    );
}

export default Reviews;
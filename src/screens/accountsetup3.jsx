function Accountsetup3() {
    return (
        <div className="mobile-wrapper">
            <div className="page account-setup3">

                <div className="account3-overlay"></div>

                <div className="account3-content">

                    <div className="account3-header">
                        <div className="account3-progress">
                            <div className="account3-progress-fill"></div>
                        </div>

                        <h1 className="account3-title">
                            First up, which product do you use the most?
                        </h1>
                    </div>

                    <div className="account3-options">
                        <a className="acc-text" href="/accountsetup4">
                            <div className="account3-option">
                                <div className="account3-avatar"><img className="account3-avatar" src="https://www.yourtango.com/sites/default/files/image_blog/2025-12/simple-ways-be-happy-person-work-happiness-being-state-of-being.png" alt="" /></div>

                                <span className="account3-option-text">
                                    Mens
                                </span>

                                <input className="account3-radio" type="radio" />
                            </div>
                        </a>
                        <a className="acc-text" href="/accountsetup4">
                            <div className="account3-option">
                                <div className="account3-avatar"><img className="account3-avatar" src="https://thumbs.dreamstime.com/b/laugh-happy-portrait-black-woman-home-relaxing-chill-rest-weekend-apartment-house-person-sofa-living-room-316506396.jpg" alt="" /></div>

                                <span className="account3-option-text">
                                    Womens
                                </span>

                                <input className="account3-radio" type="radio" />
                            </div>
                        </a>
                    </div>

                    <div className="account3-other">

                        <h2 className="account3-subtitle">
                            Any others?
                        </h2>
                        <a className="acc-text" href="/accountsetup4">
                            <div className="account3-option">
                                <div className="account3-avatar"><img className="account3-avatar" src="https://cdn.pixabay.com/photo/2015/10/17/00/59/boy-992080_1280.jpg" alt="" /></div>

                                <span className="account3-option-text">
                                    Boys
                                </span>

                                <input className="account3-radio" type="radio" />
                            </div>
                        </a>
                        <a className="acc-text" href="/accountsetup4">
                            <div className="account3-option">
                                <div className="account3-avatar"><img className="account3-avatar" src="https://img.magnific.com/premium-photo/little-girl-isolated-pink-background-keeping-arms-crossed-frontal-position_1368-216317.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>

                                <span className="account3-option-text">
                                    Girls
                                </span>


                                <input className="account3-radio" type="radio" />
                            </div>
                        </a>
                    </div>
                  

                </div>


            </div>
        </div>
    );
}

export default Accountsetup3;
import Btnnext from "../components/btnnext"

function Accountsetup4() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="account6">

                    <div className="account6-overlay"></div>

                    <div className="account6-content">

                        <div className="account6-progress">
                            <div className="progress-bg">
                                <div className="progress-fill"></div>
                            </div>
                        </div>

                        <h1 className="account6-title">
                            What sports, brands and collections are you interested in?
                        </h1>

                        <div className="account6-selections">

                            <div className="selection active">
                                <img src="https://i.postimg.cc/bwMDx946/043b570173981b347c1037538e853b51d87505a8.png" alt="" />
                                <span>Football</span>
                                <input className="check-circle"  type="radio" />
                            </div>

                            <div className="selection active">
                                <img src="https://i.postimg.cc/FH2zdsJx/3e3a572297d8438068ad2adbbe17a6b0243f2626.png' border='0' alt='3e3a572297d8438068ad2adbbe17a6b0243f2626" alt="" />
                                <span>Basketball</span>
                                
                                <input className="check-circle"  type="radio" />
                            </div>

                            <div className="selection">
                                <img src="https://i.postimg.cc/Y0nqppH2/2db5b8ae924745278effa898d87d3c7116922885.png" alt="" />
                                <span>Nike</span>
                              <input className="check-circle"  type="radio" />
                            </div>

                            <div className="selection">
                                <img src="https://i.postimg.cc/rFHF3Fgz/9e4a82b3c8eea62e6ed9bedeb5af9464681c9dd3.png" alt="" />
                                <span>Adidas</span>
                                <input className="check-circle"  type="radio" />
                            </div>

                            <div className="selection">
                                <img src="https://i.postimg.cc/prTRcgFr/6e6b31954af71d87a6e0e611b4e1178e7b3d00e4.png" alt="" />
                                <span>Puma</span>
                                <input className="check-circle"  type="radio" />
                            </div>

                            <div className="selection">
                                <img src="https://i.postimg.cc/X7t4x17C/6efa12ba373813479287d0f88f369220f0c3838f.png" alt="" />
                                <span>Jordan</span>
                               <input className="check-circle"  type="radio" />
                            </div>

                        </div>

                        <a href="/accountsetup5"><Btnnext/></a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Accountsetup4;
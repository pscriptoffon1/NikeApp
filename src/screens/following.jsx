import Bottomnavprofile from "../components/bottomnavprofile";

function Following() {
    return (
        <div className="mobile-wrapper">
            <div className="page19 bg-white">

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between px-3 border-bottom py-3">

                    <a href="/profile"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_399_5895)">
                            <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_399_5895">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></a>

                    <h6 className="m-0">Following</h6>
                    <div></div>
                </div>

                {/* Tabs */}
                <div className="d-flex border-bottom">
                    <div className="px-4 py-3 border-bottom border-2 border-dark">
                        Men
                    </div>
                    <div className="px-4 py-3 text-secondary">
                        Women
                    </div>
                    <div className="px-4 py-3 text-secondary">
                        Kids
                    </div>
                    <div className="px-4 py-3 text-secondary">
                        Jordan
                    </div>
                    <div className="px-4 py-3 text-secondary">
                        ACG
                    </div>
                </div>

                {/* Training */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Training</span>

                </div>

                {/* Lifestyle */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Lifestyle</span>
                </div>

                {/* Running */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Running</span>

                </div>

                {/* Soccer */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Soccer</span>
                </div>

                {/* Tennis */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Tennis</span>
                </div>

                {/* Golf */}
                <div className="d-flex align-items-center p-3 border-bottom">
                    <img
                        src="https://i.postimg.cc/85dH6Lmq/2db5b8ae924745278effa898d87d3c7116922885-(1).png"
                        alt=""
                        width="70"
                        height="70"
                    />
                    <span className="ms-3 flex-grow-1">Golf</span>
                </div>

            </div>
        </div>
    );
}

export default Following;
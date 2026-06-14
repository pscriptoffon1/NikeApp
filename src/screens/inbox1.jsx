import Bottomnavprofile from "../components/bottomnavprofile";

function Inbox1() {
    return (
        <div className="mobile-wrapper">
            <div className="page inbox-page">

                {/* Header */}
                <div className="inbox-header">
                    <a className="tt2" href="/profile"> <i className="fa-solid fa-chevron-left"></i>
                     

                    </a>
                    <h2 className="inbox-title">Inbox</h2>

                    <div className="header-empty"></div>
                </div>

                {/* Content */}
                <div className="inbox-content">

                    <a className="tt2" href="/profileinfo"><div className="message-card">
                        <img
                            src="https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg"
                            alt=""
                            className="message-image"
                        />

                        <div className="message-info">
                            <div className="message-text">
                                <h4>Nike Order Update</h4>
                                <p>Order C298392834 Confirmed</p>
                            </div>

                            <span className="message-time">
                                2 minutes ago
                            </span>
                        </div>
                    </div></a>

                    <div className="message-card">
                        <img
                            src="https://media.istockphoto.com/id/2153823097/photo/cheerful-athletic-couple-jogging-through-the-park.jpg?s=612x612&w=0&k=20&c=7ZDGNkOSuXWxEmJkKpbisVSvo5mM3d3VcHkVhLhSD1Q="
                            alt=""
                            className="message-image"
                        />

                        <div className="message-info">
                            <div className="message-text">
                                <h4>Welcome to the Nike App</h4>
                                <p>
                                    Thanks for joining us as a Member in the
                                    Nike App. Let’s get you started.
                                </p>
                            </div>

                            <span className="message-time">
                                48 minutes ago
                            </span>
                        </div>
                    </div>

                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Inbox1;
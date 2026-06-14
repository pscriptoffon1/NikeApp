import Bottomnavprofile from "../components/Bottomnavprofile";

function Dated() {
    return (
        <div className="mobile-wrapper">
            <div className="page dated-page">

                {/* Header */}
                <div className="dated-header">
                    <div className="dated-header-left">
                       <a className="tt2" href="/profile"><i className="fa-solid fa-chevron-left"></i></a> 
                       
                    </div>
                </div>

                {/* Content */}
                <div className="dated-content">

                    <div className="dated-top">
                        <h2>Update your notifications</h2>

                        <p>
                            Never miss a product drop. Set up your default
                            Notify Me product release reminders.
                        </p>
                    </div>

                    <div className="dated-list">

                        <div className="dated-item">
                            <span>1 week before</span>

                            <label className="toggle-switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="dated-item">
                            <span>1 day before</span>

                            <label className="toggle-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="dated-item">
                            <span>15 minutes before</span>

                            <label className="toggle-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>

                    </div>

                    <div className="dated-text">
                        You can manage your app notification permissions in your
                        Phone Settings.
                    </div>

                </div>

                <div className="dated-btn-wrapper">
                    <a href="/profile"><button className="dated-btn">
                        Confirm
                    </button></a>
                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Dated;
import Bottomnavprofile from "../components/Bottomnavprofile";

function Settings() {
    return (
        <div className="mobile-wrapper">
            <div className="page settings-page">

                <div className="settings-header">

                    <h3>Settings</h3>
                    <div></div>
                </div>

                <div className="settings-row">
                    <span>Email</span>
                    <span className="orange">john@mail.com</span>
                </div>

                <div className="settings-row">
                    <span>Date of Birth</span>
                    <span className="orange">18/2/95</span>
                </div>

                <div className="settings-row">
                    <span>Units of Measure</span>

                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Delivery Information</span>
                </div>

                <div className="settings-row">
                    <span>Payment Information</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Country / Region</span>
                </div>

                <a className="tt2" href="/language">  <div className="settings-row">
                    <span>Language</span>
                </div>
                </a>
                <div className="settings-row">
                    <span>Shopping Settings</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Location Settings</span>
                </div>

                <div className="settings-row">
                    <span>Notification Preferences</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Privacy</span>
                </div>

             <a className="tt2" href="/visibility"><div className="settings-row">
                    <span>Profile Visibility</span>
                </div>
</a>
                <div className="settings-row">
                    <span>Blocked Users</span>
                </div>

                <div className="settings-row">
                    <span>Workout Info</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Find a Nike Store</span>
                </div>

                <div className="settings-row">
                    <span>Get Support</span>
                </div>

                <div className="settings-row">
                    <span>Explore Our Apps</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>About this Version</span>
                </div>

                <div className="settings-row">
                    <span>Terms of Use</span>
                </div>

                <div className="settings-row">
                    <span>Terms of Sale</span>
                </div>

                <div className="settings-row">
                    <span>Privacy Policy</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Got a Swoosh account?</span>
                </div>

                <div className="settings-space"></div>

                <div className="settings-row">
                    <span>Delete Account</span>
                </div>

                <div className="settings-space"></div>

               <a className="tt2" href="/signup2"> <div className="settings-row logout">
                    <span>Log Out</span>
                </div></a>
                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Settings;
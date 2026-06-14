import Bottomnavprofile from "../components/bottomnavprofile";

function Visibility() {
    return (
        <div className="mobile-wrapper">
            <div className="page visibility-page">

                          <div className="control-bar">
                    <a className="text-back" href="/checkprofile">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/profile"> <h3 className="control-title">
                        ViSIBILITY
                    </h3>
                    </a>
                    <div className="control-right">
                        
                    </div>
                </div>

                <div className="visibility-info">
                    Your privacy setting applies across all Nike apps. When you
                    change your setting in one app, it will change in the others.
                </div>

                <div className="visibility-option">
                    <div className="option-content">
                        <h3>Everyone (public)</h3>
                        <p>
                            Any Nike Member can search you, view your full
                            profile, send you invites and see your activity.
                        </p>
                    </div>

                    <div className="radio-circle"></div>
                </div>

                <div className="visibility-option">
                    <div className="option-content">
                        <h3>Friends (social)</h3>
                        <p>
                            Any Nike Member can search you, view your limited
                            profile and send you invites. Only your friends can
                            view your full profile and see your activity.
                            Activity shared to Group is visible to other
                            members.
                        </p>
                    </div>

                    <div className="radio-circle active">
                    </div>
                </div>

                <div className="visibility-option">
                    <div className="option-content">
                        <h3>Only Me (private)</h3>
                        <p>
                            Nobody can search for you, view your profile or
                            view your activity. You will not be able to add
                            friends.
                        </p>
                    </div>

                    <div className="radio-circle"></div>
                </div>


            </div>
        </div>
    );
}

export default Visibility;
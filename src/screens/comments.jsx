import Bottomnav from "../components/bottomnav";

function Comments() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <a className="tt1" href="/home3"> <i className="fa-solid fa-chevron-left"></i>
                </a>

                <div className="comments-section">

                    <div className="comments-header">
                        <h3>Comments (19)</h3>



                        <input className="comment-input-top1" placeholder="Add a comment ..." type="text" />

                    </div>

                    <a className="tt1" href="/infoh7"> <div className="comment-item">
                        <div className="comment-user">
                            <div className="avatar"><img className="avatar" src="https://img.magnific.com/free-photo/student-woman-isolated-blue-background-showing-victory-gesture_231208-14291.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
                            <h4>Bolor Bathkuyag</h4>
                        </div>

                        <div className="comment-content">
                            <p>Wow</p>
                            <span>53 minutes ago</span>
                        </div>
                    </div>
                    </a>
                    <div className="comment-item">
                        <div className="comment-user">
                            <div className="avatar"><img className="avatar" src="https://img.magnific.com/free-photo/full-length-shot-positive-carefree-woman-sits-crossed-legs-smiles-gently-dressed-casually-enjoys-domestic-atmosphere-isolated-yellow-wall-empty-space-people-lifestyle_273609-37742.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
                            <h4>Maineski Bandz</h4>
                        </div>

                        <div className="comment-content">
                            <p>😂</p>
                            <span>7 hours ago</span>
                        </div>
                    </div>

                    <div className="comment-item">
                        <div className="comment-user">
                            <div className="avatar"><img className="avatar" src="https://i.pinimg.com/236x/02/a2/8e/02a28e30d88ef9daf590b315a615e104.jpg" alt="" /></div>
                            <h4>Wyatt Card</h4>
                        </div>

                        <div className="comment-content">
                            <p>Hook me up with a head band</p>
                            <span>1 day ago</span>
                        </div>
                    </div>

                </div>

                <div className="comment-bottom">
                    <input
                        type="text"
                        placeholder="Add a comment"
                    />

                    <button>
                        Post
                    </button>
                </div>
                <Bottomnav />

            </div>
        </div>
    );
}

export default Comments;
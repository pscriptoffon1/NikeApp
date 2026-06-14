import Bottomnav from "../components/bottomnav";

function Home3() {
    return (
        <div className="mobile-wrapper">
            <div className="page home3">

                {/* Header */}
                <div className="control-bar">
                    <a className="tt2" href="/home2"><i className="fa-solid fa-chevron-left"></i></a>

                    <h3 className="control-title">
                        Soyeon's Dance Challenge 😎
                    </h3>

                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {/* Main Image */}
                <img
                    src="https://i.postimg.cc/tTVQ7fcX/7f9e74066359cedf376d812287dd271112e1002a.png"
                    alt=""
                    className="cover-image"
                />

                {/* Content */}
                <div className="content">
                    <h1>Soyeon's Dance Challenge 😎</h1>

                    <p>
                        Hip hop dancer Soyeon Jang shows us an epic dance
                        challenge in the latest Playlist episode. Soyeon dances
                        three parts of the routine - first fast, then slow.
                        Then she combines all the moves for an awesome dance
                        party with her buddy, Disco Dancer.
                    </p>
                </div>

                {/* Actions */}
                <div className="actions">
                    <i className="fa-solid fa-share-nodes"></i>
                    <i className="fa-regular fa-comment"></i>
                </div>

                {/* Second Image */}
                <img
                    src="https://i.postimg.cc/25bXxWxY/decde0805ddcff171ce5e71d3168dd507e73611c.png' border='0' alt='decde0805ddcff171ce5e71d3168dd507e73611c"
                    alt=""
                    className="second-image"
                />

                {/* Button */}
                <button className="join-btn66">
                    Explore
                </button>

                {/* Comments */}
                <div className="comments">

                    <h3>Comments (19)</h3>

                      <a className="t1" href="/comments"><input placeholder="Add a comment..." className="comment-input"  type="text" /></a>

                    <div className="comment-item">
                        <div className="comment-header">
                            <img src="https://img.magnific.com/free-photo/student-woman-isolated-blue-background-showing-victory-gesture_231208-14291.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                            <h4>Bolor Bathkuyag</h4>
                        </div>

                        <div className="comment-body">
                            <p>Wow</p>
                            <span>53 minutes ago</span>
                        </div>
                    </div>

                    <div className="comment-item">
                        <div className="comment-header">
                            <img src="https://img.magnific.com/free-photo/full-length-shot-positive-carefree-woman-sits-crossed-legs-smiles-gently-dressed-casually-enjoys-domestic-atmosphere-isolated-yellow-wall-empty-space-people-lifestyle_273609-37742.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                            <h4>Maineski Bandz</h4>
                        </div>

                        <div className="comment-body">
                            <p>😂</p>
                            <span>7 hours ago</span>
                        </div>
                    </div>

                    <div className="comment-item">
                        <div className="comment-header">
                            <img src="https://i.pinimg.com/236x/02/a2/8e/02a28e30d88ef9daf590b315a615e104.jpg" alt="" />
                            <h4>Wyatt Card</h4>
                        </div>

                        <div className="comment-body">
                            <p>Hook me up with a head band</p>
                            <span>1 day ago</span>
                        </div>
                    </div>

                </div>

                <Bottomnav />

            </div>
        </div>
    );
}

export default Home3;
function Bottonnav() {
    return (
        <div className="bottom-nav">

            <a className="t1" href="/home2"><div className="nav-item active1">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </div>
            </a>

            <a className="tt2" href="/shop"><div className="nav-item">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
            </div></a>

            <a className="tt2" href="/favorites"><div className="nav-item">
                <i className="fa-regular fa-heart"></i>
                <span>Favorites</span>
            </div>
            </a>
            <a className="tt2" href="/bag"><div className="nav-item">
                <i className="fa-solid fa-bag-shopping"></i>
                <span>Bag</span>
            </div></a>

           <a className="tt2" href="/profile"> <div className="nav-item">
                <i className="fa-regular fa-user"></i>
                <span>Profile</span>
            </div></a>

        </div>
    );
}

export default Bottonnav;
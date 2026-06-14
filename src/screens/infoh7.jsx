import Bottomnav2 from "../components/bottomnav2";

function Infoh7() {
    return (
        <div className="mobile-wrapper">
            <div className="page">

                <div className="control-bar1">
                    <a href="/comments"> <button className="back-btn">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button></a>
                </div>

                <div className="hero-image">
                    <img
                        src="https://i.postimg.cc/0jPTZCnS/f3a3ac4ee49ea1dd1f5b6e87b09afc82d5c893b0.png"
                        alt="banner"
                    />
                </div>

                <h1 className="article-title">
                    “The future of women in sneaker culture looks like a tidal wave of
                    opportunities, new seats at new tables, and growth.”
                </h1>

                <div className="author">
                    <div className="author-avatar"><img className="author-avatar" src="https://i.postimg.cc/cCFbhGrW/5256ce05a2bc93ae8baa7552732928ea681d70e9.jpg" alt="" /></div>
                    <span>Keia Kodama</span>
                </div>

                <p className="article-text">
                    To Keia, Air Max is an emblem of who she is—an unstoppable creative
                    force that’s telling her community’s truth. To honor how far female
                    designers and collaborators have pushed streetwear forward, Keia’s
                    carving out space for a new wave of women creatives destined to shake
                    up the sneaker industry.
                </p>

                <a href="/shop"><button className="join-btn88">
                    Shop Air Max
                </button></a>

                <Bottomnav2 />

            </div>
        </div>
    );
}

export default Infoh7;
import Bottomnavprofile from "../components/bottomnavprofile";

function Profileinfo() {
    return (
        <div className="mobile-wrapper">
            <div className="page bg-white">

                {/* Header */}
                <div className="profileinfo-header">
                    <a className="tt2" href="/inbox1">
                    <button className="profileinfo-back">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    </a>
                

                    <div className="profileinfo-empty"></div>
                </div>

                {/* Top Image */}
                <img
                    src="https://i.postimg.cc/0QPrXS7z/54d15d7af2bc12219bfc3d0b58928e9ff0898168.png"
                    alt=""
                    className="profileinfo-image"
                />

                {/* Content */}
                <div className="profileinfo-content">
                    <h2>
                        Welcome to the Nike App
                    </h2>

                    <p>
                        This is where you'll find the best of Nike —
                        personalized for you. As a Nike Member, you have
                        access to a community helping to create the future
                        of sport together.
                    </p>
                </div>

                {/* Second Image */}
                <img
                    src="https://i.postimg.cc/2jH3TVy8/e24b0bf78696b292a1e85c6df12a06f9568cbe0f.png"
                    alt=""
                    className="profileinfo-image"
                />

                {/* Benefits */}
                <div className="profileinfo-content">
                    <h2>
                        As a Nike Member, All of This Is Yours:
                    </h2>

                    <div className="profileinfo-item">
                        <h6>Daily Sport</h6>
                        <p>
                            Inspiration, workout plans and advice in our
                            suite of world-class sport apps.
                        </p>
                    </div>

                    <div className="profileinfo-item">
                        <h6>Member Access</h6>
                        <p>
                            Get dibs on the best Nike products,
                            promotions, experiences and content.
                        </p>
                    </div>

                    <div className="profileinfo-item">
                        <h6>Nike Experiences</h6>
                        <p>
                            Sport is better together. Join us for Member
                            Experiences in your city and online.
                        </p>
                    </div>

                    <div className="profileinfo-item">
                        <h6>Member Rewards</h6>
                        <p>
                            Let us celebrate your birthday and reward
                            you with surprises throughout the year.
                        </p>
                    </div>
                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Profileinfo;
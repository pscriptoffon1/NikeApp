import Bottomnavprofile from "../components/bottomnavprofile";

function City() {
    const cities = [
        "Worldwide Experience",
        "Barcelona",
        "Beijing",
        "Berlin",
        "Chengdu",
        "Chicago",
        "Chongqing",
        "Guangzhou",
        "Istanbul",
        "Worldwide Experience"
    ];

    return (
        <div className="mobile-wrapper">
            <div className="page23 bg-white">

                {/* Search Bar */}
                  <div className="search-header">
                        <button className="search-btn">
                            <div className="header-icons">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </button>
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="search-input"
                        />

                        <button className="cancel-btn">
                          <a className="tt2" href="/events">Cancel</a>  
                        </button>
                    </div>
                
                 
               

              

                 
                

                {/* Cities */}
                <div
                    style={{
                        padding: "0 20px",
                        marginBottom: "82px"
                    }}
                >
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="d-flex align-items-center"
                            style={{
                                padding: "24px 0",
                                gap: "22px",
                                borderBottom: "1px solid #E4E4E4"
                            }}
                        >
                            <i className="fa-solid fa-location-dot"></i>

                            <span
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "#000"
                                }}
                            >
                                {city}
                            </span>
                        </div>
                    ))}
                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default City;
import Bottomnavprofile from "../components/Bottomnavprofile";


function Events() {
    return (
        <div className="mobile-wrapper">
            <div className="page events-page">

                <div className="events-header">
                    <a href="/profile"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_369_5673)">
                            <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_369_5673">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></a>

                    <h3 className="events-title">
                        Jordan Flight Essentials
                    </h3>
                    <a href="/dated">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_369_5678)">
                                <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 2.25V5.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 2.25V5.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.75 8.25H20.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_369_5678">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>

                <div className="events-content">

                    <div className="events-hero">
                        <h1>NIKE EXPERIENCES</h1>
                        <p>Community That Moves You</p>

                        <div className="events-city">
                            <span>Find your city</span>
                        </div>
                    </div>

                    <div className="events-empty">
                        <h4>
                            There are currently no experiences scheduled in this city.
                        </h4>

                        <p>
                            Try searching for experiences in another city or
                            check back later.
                        </p>
                    </div>

                    <div className="events-notify">
                        <h4>Stay in the Know.</h4>

                        <p>
                            Turn on Notifications and get invitations to
                            experiences, First Access to products,
                            personalised offers and order updates.
                        </p>

                        <a href="/city"><button className="events-btn">
                            Turn On Notifications
                        </button></a>
                    </div>

                </div>

                <Bottomnavprofile />
            </div>
        </div>
    );
}

export default Events;
import { useState } from "react";

function Language() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="page1111 language-page">

                <div className="language-header">
                </div>

                <div className="language-content">
                    <img src="/nike-logo.svg" alt="" />

                    <h1>Select Your Language</h1>

                    <p>
                        Please update to a language supported in the Nike App.
                    </p>

                    <button
                        className="language-btn"
                        onClick={() => setOpen(!open)}
                    >
                        <span>English</span>
                    </button>
                </div>

               <a href="/language2"> <button className="join-btn121">
                    Okay
                </button></a>

                {open && (
                    <div className="language-modal">
                        <div className="language-item">
                            English
                        </div>

                        <div className="language-item">
                            Русский
                        </div>

                        <div className="language-item">
                            Кыргызча
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Language;
function Editprfile() {
    return (
        <div className="mobile-wrapper">
            <div className="page bg-white">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center px-3 pt-5 pb-3 border-bottom">
                    <a href="/profile"><button className="btn p-0 border-0 bg-transparent">
                        Cancel
                    </button></a>

                    <button className="btn p-0 border-0 bg-transparent text-secondary">
                        Save
                    </button>
                </div>

                {/* Profile */}
                <div className="d-flex flex-column align-items-center py-4">
                    <div
                        className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center"
                        style={{ width: "84px", height: "84px" }}
                    >
                        <i className="fa-solid fa-user fs-1"></i>
                    </div>

                    <span className="text-secondary small mt-2">
                        Edit
                    </span>
                </div>

                {/* Form */}
                <div className="px-3">

                    {/* Name */}
                    <div className="mb-4">
                        <label className="form-label text-secondary small">
                            First & Last Name
                        </label>

                        <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="John"
                        />

                        <input
                            type="text"
                            className="form-control rounded-0 mt-1"
                            placeholder="Smith"
                        />
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="form-label text-secondary small">
                            Location
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Bishkek"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <div className="d-flex justify-content-between mb-2">
                            <label className="form-label text-secondary small m-0">
                                Bio
                            </label>

                            <span className="text-secondary small">
                                0/150
                            </span>
                        </div>

                        <textarea
                            className="form-control"
                            rows="4"
                            maxLength="150"
                            placeholder="Tell us about yourself..."
                        ></textarea>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Editprfile;
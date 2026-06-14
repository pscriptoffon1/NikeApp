

function Filter() {
    return (
        <div className="mobile-wrapper">
            <div className="page">
                <div className="filter-page">

                    {/* Header */}
                    <div className="filter-header">
                        <h2>Filter</h2>

                       <a href="/sneakersproduct"> <button className="close-btn">
                            <i className="fa-solid fa-xmark"></i>
                        </button></a>
                    </div>

                    {/* Sort By */}
                    <div className="filter-section">
                        <h3>Sort By</h3>

                        <label className="radio-item">
                            <input type="radio" name="sort" defaultChecked />
                            <span>Featured</span>
                        </label>

                        <label className="radio-item">
                            <input type="radio" name="sort" />
                            <span>Newest</span>
                        </label>

                        <label className="radio-item">
                            <input type="radio" name="sort" />
                            <span>Price: Low to High</span>
                        </label>

                        <label className="radio-item">
                            <input type="radio" name="sort" />
                            <span>Price: High to Low</span>
                        </label>
                    </div>

                    {/* Gender */}
                    <div className="filter-section">
                        <h3>Gender</h3>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Men</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Women</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Kids</span>
                        </label>
                    </div>

                    {/* Shop By Price */}
                    <div className="filter-section">
                        <h3>Shop By Price</h3>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>$0 - $50</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>$50 - $100</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>$100 - $200</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>$200+</span>
                        </label>
                    </div>

                    {/* Colors */}
                    <div className="filter-section">
                        <h3>Color</h3>

                        <div className="colors-grid">
                            <div className="color-item">
                                <span className="color purple"></span>
                                <p>Purple</p>
                            </div>

                            <div className="color-item">
                                <span className="color black"></span>
                                <p>Black</p>
                            </div>

                            <div className="color-item">
                                <span className="color red"></span>
                                <p>Red</p>
                            </div>

                            <div className="color-item">
                                <span className="color orange"></span>
                                <p>Orange</p>
                            </div>

                            <div className="color-item">
                                <span className="color blue"></span>
                                <p>Blue</p>
                            </div>

                            <div className="color-item">
                                <span className="color white"></span>
                                <p>White</p>
                            </div>

                            <div className="color-item">
                                <span className="color brown"></span>
                                <p>Brown</p>
                            </div>

                            <div className="color-item">
                                <span className="color green"></span>
                                <p>Green</p>
                            </div>

                            <div className="color-item">
                                <span className="color yellow"></span>
                                <p>Yellow</p>
                            </div>

                            <div className="color-item">
                                <span className="color grey"></span>
                                <p>Grey</p>
                            </div>

                            <div className="color-item">
                                <span className="color pink"></span>
                                <p>Pink</p>
                            </div>
                        </div>
                    </div>

                    {/* Brand */}
                    <div className="filter-section">
                        <h3>Brand</h3>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Nike</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Adidas</span>
                        </label>
                    </div>

                    {/* Sports */}
                    <div className="filter-section">
                        <h3>Sports & Activities</h3>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Running</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Training</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Basketball</span>
                        </label>

                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Football</span>
                        </label>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="filter-buttons">
                        <button className="clear-btn">
                            Reset
                        </button>

                      <button className="apply-btn">
                          <a className="tt3" href="/search">   Apply</a> 
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Filter;
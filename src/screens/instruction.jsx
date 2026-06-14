

import Bottomnavshop from "../components/bottomnavshop"

function Instruction() {
    return (

        <div className="mobile-wrapper">
            <div className="page1111">
                {/* Header */}
                <div className="control-bar">
                    <a className="text-back" href="/search2">
                        <div className="control-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </a>

                    <a className="t2" href="/home3"> <h3 className="control-title">
                        View Product Details
                    </h3>
                    </a>
                    <div className="control-right">
                        <a className="tt2" href="/filter"><i className="fa-solid fa-sliders"></i></a>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <div className="product-content22">

                    <div className="content-section">
                        <h2>LEGENDARY STYLE REFINED.</h2>

                        <p>
                            The Nike Everyday Plus Cushioned Socks bring comfort to your
                            workout with extra cushioning under the heel and forefoot and a
                            snug, supportive arch band. Sweat-wicking power and breathability
                            up top help keep your feet dry and cool to help push you through
                            that extra set.
                        </p>
                    </div>

                    <div className="content-section22">
                        <h2>Benefits</h2>

                        <p>
                            Cushioning under the forefoot and heel helps soften the impact of
                            your workout.
                            <br /><br />
                            Dri-FIT technology helps your feet stay dry and comfortable.
                            <br /><br />
                            Band around the arch feels snug and supportive.
                            <br /><br />
                            Breathable knit pattern on top adds ventilation.
                            <br /><br />
                            Reinforced heel and toe are made to last.
                        </p>
                    </div>

                    <div className="content-section22">
                        <h2>Product Details</h2>

                        <p>
                            Fabric: 61–67% cotton / 30–36% polyester / 2% spandex / 1% nylon
                            <br /><br />
                            Machine wash
                            <br /><br />
                            Imported
                            <br /><br />
                            Note: Material percentages may vary slightly depending on color.
                            Check label for actual content.
                            <br /><br />
                            Shown: Multi-Color
                            <br />
                            Style: SX6897-965
                        </p>

                    </div>
                    <button className="reviews"><a className="tt3" href="/reviews">Reviews</a></button><br /><br />

                </div>
                

                <Bottomnavshop />
            </div>
        </div>

    );
}

export default Instruction;
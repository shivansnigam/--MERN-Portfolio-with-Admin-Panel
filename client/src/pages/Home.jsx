import {Analytics} from "../Components/Analytics"
export const Home = () => {

    return (
        <>

            <main>
                {/* 1st section */}
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                            <h1>welcome th shivansh technical</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, esse? Aliquam saepe culpa, consectetur iusto officiis voluptas accusamus. Blanditiis, consequatur eligendi esse iure delectus cumque voluptatum natus eos ratione provident?</p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        {/* hero image */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="" width="400" height="500" />

                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}

           <Analytics />
            {/* 3rd section */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero image */}
                    <div className="hero-image">
                        <img src="/images/design.png" alt="" width="400" height="500" />

                    </div>
                    <div className="hero-content">
                        <p>We are here to help you </p>
                        <h1>get started today</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, esse? Aliquam saepe culpa, consectetur iusto officiis voluptas accusamus. Blanditiis, consequatur eligendi esse iure delectus cumque voluptatum natus eos ratione provident?</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

        </>

    )

};
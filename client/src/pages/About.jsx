import { useAuth } from "../store/auth"; // useAuth hook import kar rahe hain
import { Analytics } from "../Components/Analytics";
import { NavLink } from "react-router-dom";

export const About = () => {
    const { user } = useAuth(); // useAuth hook se user data le rahe hain

    const usernameStyle = {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "#3498db",
        backgroundColor: "#f0f8ff",
        padding: "5px 10px",
        borderRadius: "5px",
        display: "inline-block",
    };

    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                {/* <p>We care to cure your Health</p> */}
                
                <p style={usernameStyle}>Welcome, {user ? `${user.username} To Our Website` : 'To Our Website'}</p> {/* Username ko display kar rahe hain */}

                <h1>Why Choose Us? </h1>
                <p>
                  Expertise: Our team consists of experienced IT professionals who
                  are passionate about staying up-to-date with the latest industry
                  trends.
                </p>
                <p>
                  Customization: We understand that every business is unique.
                  Thats why we create solutions that are tailored to your specific
                  needs and goals.
                </p>
                <p>
                  Customer-Centric Approach: We prioritize your satisfaction and
                  provide top-notch support to address your IT concerns.
                </p>
                <p>
                  Affordability: We offer competitive pricing without compromising
                  on the quality of our services.  
                </p>
                <p>
                  Reliability: Count on us to be there when you need us. We're
                  committed to ensuring your IT environment is reliable and
                  available 24/7.
                </p>
                <div className="btn btn-group">
                  <NavLink to="/contact">
                    <button className="btn"> Connect Now</button>
                  </NavLink>
                  <button className="btn secondary-btn">learn more</button>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="/images/about.png"
                  alt="coding buddies "
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
        <Analytics />
      </>
    );
};

import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Stay Connected</h2>
                <p>&copy; ShivanshTechnical 2024. All rights reserved.</p>
                <p>Follow us on:</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="contact-info">
                    <p>Contact us at: <a href="mailto:info@shivanshtechnical.com">info@shivanshtechnical.com</a></p>
                </div>
            </div>
        </footer>
    );
};
// --------------------------------------
// option h yeh agr achch nhi lga toh yeh chalo kar lena 
// --------------------------------------




// import "./Footer.css";

// export const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <p>&copy; ShivanshTechnical 2024. All rights reserved.</p>
//                 <p>Follow us on:</p>
//                 <div className="social-icons">
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-instagram"></i>
//                     </a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-linkedin-in"></i>
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

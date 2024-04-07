import { Link } from "react-router-dom";
import './index.css';

export default function HomePage(){
    return(
        <>
            <div className="main-content">
                <div className="video-container">
                    <video autoPlay muted loop playsInline id="vid">
                        <source src='/vid.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className="nav-bar">
                    <div className="nav-links">
                        <div className="links">
                            <div className="randompic-link">
                                <Link to="/random">Random</Link>
                            </div>
                            <div className="login-link">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="name">INTEREACT</div>
                <div className="about-section-container">
                    <div className="about-content">
                        <p>
                           
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="contacts">
                        <div className="contact-title">Contacts</div>
                        <div>Phno : 9061940749</div>
                        <a>Instagram: _a_rya</a>
                        <a>gmail: aryasuresh2719@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    );
}

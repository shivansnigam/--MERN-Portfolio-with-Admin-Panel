import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData)

    const [userData, setUserData] = useState(true);

    const { user, isLoggedin } = useAuth();

    useEffect(() => {
        if (userData && user) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
            setUserData(false);
        }
    }, [user, userData]);
    

    useEffect(() => {
        if (!isLoggedin) {
            setContact({
                username: "",
                email: "",
                message: "",
            });
        }
    }, [isLoggedin]); // ye useEffect logout hone par fields clear karta hai

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/api/form/contact",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact),
               
            });

            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
              
                toast.success("Message sent successfully");
            }
        }catch(error){

            toast.error("Message not sent successfully");
            console.log(error)
        }
    }

    return (
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">contact us</h1>
            </div>
            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/support.png" alt="we are always ready to help" />
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" cols="30" rows="5" autoComplete="off" value={contact.message} onChange={handleInput} required></textarea>
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <section className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34595964893!2d77.24107768462868!3d23.19963946710726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715603035322!5m2!1sen!2sin"
                    width="600" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
         
        </section>
    )
};

import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
const URL = "http://localhost:5000/api/auth/register"
export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });



    const navigate = useNavigate();
// storen token here

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)

            try {
                const response = await fetch(URL, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user),
                });
                // yha agr rigistration success hoga toh ham login me redirect ho jayege

                 const res_data = await response.json();
                   console.log('res form data:',res_data.extraDetails)
                   
                if(response.ok){
                   
                //    stored the token in localhost;

                 storeTokenInLS(res_data.token);

                    setUser({
                        username: "",
                        email: "",
                        phone: "",
                        password: "",
                    })
                    toast.success("Registration Successful")

                    navigate("/login")
                }else{
                      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
                } 
               
            }catch(error){
             console.log("register: ",error)
            }
       

    }

    // yha agr aage koi proble aati h toh yeh wala code chalo kr denge

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(user)
    //     try {
    //         const response = await fetch("http://localhost:5000/api/auth/register", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(user),
    //         });
    
    //         if (response.ok) {
    //             const responseData = await response.json();
    //             console.log("User registered successfully:", responseData);
    //         } else {
    //             const errorData = await response.json();
    //             console.log("Error registering user:", errorData);
    //         }
    //     } catch (error) {
    //         console.log("Error:", error);
    //     }
    // }
    
    // end of advanced code 

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/register.png" alt="a girl trying to do registration" width="400" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb3">Registration form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="enter your phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="enter your password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};


// import { useState } from "react";
// export const Register = () => {
//     const [user,setUser] = useState({
//         username:"",
//         email:"",
//         phone:"",
//         password:"",
//     });

//     // handling the input values
//     const handleInput =(e)=>{
//         console.log(e);
//         let name = e.target.name;
//         let value = e.target.value;

//         setUser({
//             ...user,
//             [name]:value,

//         })

//         // handling the form submission
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             alert(user)
//         }
//     }
//     return(
//         <>
//        <section>
//         <main>
//             <div className="section-registration">
//                 <div className="container grid grid-two-cols">
//                     <div className="registration-image">
//                     <img src="/images/register.png" alt="a girl trying to do registration" width="400"height="500" />
//                     </div>
//                     <div className="registration-form">
//                         <h1 className="main-heading mb3">registration form</h1>
//                        <br />

//                        <form onSubmit = {handleSubmit}>
//                         <div>
//                             <label htmlFor="username"> username</label>
//                             <input
//                             type="text"
//                             name="username"
//                             placeholder="username"
//                             id="username"
//                             required
//                             autoComplete="off"
//                             value={user. username}
//                             onChange={handleInput}
//                             />
//                         </div>
//                          <div>
//                             <label htmlFor="email"> email</label>
//                             <input
//                             type="email"
//                             name="email"
//                             placeholder="enter your email"
//                             id="email"
//                             required
//                             autoComplete="off"
//                             value={user.email}
//                             onChange={handleInput}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="phone">phone</label>
//                             <input
//                             type="number"
//                             name="phone"
//                             placeholder="enter your phone"
//                             id="phone"
//                             required
//                             autoComplete="off"
//                             value={user.phone}
//                             onChange={handleInput}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="password"> password</label>
//                             <input
//                             type="password"
//                             name="password"
//                             placeholder="enter your password"
//                             id="password"
//                             required
//                             autoComplete="off"
//                             value={user.password}
//                             onChange={handleInput}
//                             />
//                         </div>
//                         <br />
//                         <button type="submit"className="btn btn-submit">Register Now</button>
//                        </form>
//                     </div>
//                 </div>
//             </div>
//         </main>
//        </section>

//     </>
//     )
// };
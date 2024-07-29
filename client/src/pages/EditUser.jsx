import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const EditUser = () => {
    const [user, setUser] = useState({ username: "", email: "", phone: "" });
    const { id } = useParams();
    const { authorizationToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, [id, authorizationToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(user),
            });
           

            if (response.ok) {
                toast.success("Successfully Updated")
                navigate("/admin/users");
            } else {
                toast.error("Not Updated")
                console.log("Failed to update the user");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="edit-user-section">
            <div className="container">
                <h1>Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Update</button>
                </form>
            </div>
        </section>
    );
};

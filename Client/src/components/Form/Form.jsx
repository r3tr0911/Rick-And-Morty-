import React from "react";
import Validation from "./validation";
// import style from "./Form.module.css"

export default function Form(props){

    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })
    const [errors, setErros] = React.useState({});
    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErros(Validation({
            ...userData,
            [name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.login(userData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input 
                    placeholder="Email..." 
                    type="text" name="email" 
                    value={userData.email}
                    onChange={handleChange}
                />
                <p> {errors.email ? errors.email : null} </p>

                <label>Password: </label>
                <input 
                    placeholder="Password..." 
                    type="password" name="password" 
                    value={userData.password} 
                    onChange={handleChange}
                />
                <p> {errors.password ? errors.password : null} </p>
                <hr/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
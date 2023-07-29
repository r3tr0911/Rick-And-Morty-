import React from "react";
import styles from "./Form.module.css";
import Validation from "./validation";


export default function Form(props){

    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })
    const [errors, setErros] = React.useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErros(Validation({
            ...userData,
            [name]: value
        })
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData);
    }
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>Email: </label>
                <input 
                className={styles.input}
                    placeholder="Email..." 
                    type="text" 
                    name="email" 
                    value={userData.email}
                    onChange={handleChange}
                />
                <p className={styles.error}>{errors.email && errors.email} </p>

                <label className={styles.label}>Password: </label>
                <input className={styles.input}
                    placeholder="Password..." 
                    type="password" name="password" 
                    value={userData.password} 
                    onChange={handleChange}
                />
                <p className={styles.error}>{errors.password && errors.password} </p>
                <hr/>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        </div>
    )
}
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import React, {useContext, useState} from "react";
import { TYPES } from "../reducer/authReducer";

const Login = () => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext)

    // const {setUser : setUsername, setIsAuth} = useContext(AuthContext);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email } = user;
        const data = {
            user: {
                username: 'nico',
                email: email,
            },
            token: '1233324125145',
        };


        dispatch({type: TYPES.LOGIN, payload:data})

        navigate('/Browse', {
            replace:true
        });

    };

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='email'
                onChange={handleChange}
                value={user.email}/>
                                <input
                type='password'
                name='password'
                onChange={handleChange}
                value={user.password}/>
                <button type='submit'>Iniciar sesión</button>
            </form>
        </div>

    )


}

export default Login;
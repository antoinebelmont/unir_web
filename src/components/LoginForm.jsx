import React, {use, useState} from "react";
import axios from "axios";

export default function LoginForm() {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const payload = {
        user: user,
        password: password
    }
    const loginAction = (e) => {
        e.preventDefault()
            localStorage.setItem("stringify", 'tbd')
            localStorage.setItem("MyToken", 'tbd')
    }
    return (

        <div className="flex h-screen justify-center items-center">

            <form onSubmit={loginAction}
                  className="component-login border-2 rounded w-1/2 lg:1/4 mx-auto p-4 text-center flex flex-col">

                <label htmlFor="user">Usuario</label>
                <input className="border" id="user" type="text" name="user" required={true}
                       onChange={(e) => setUser(e.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input className="border" id="password" type="password" name="password" required={true}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button
                    type="submit"
                    className="w-1/2 h-12 px-4 text-indigo-100 mt-2 mx-auto transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 text-center"
                    >Aceptar
                </button>

            </form>

        </div>

    );

}
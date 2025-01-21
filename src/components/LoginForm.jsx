import React, {use, useState} from "react";
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const payload = {
        user: user,
        password: password
    }
    const loginAction = (e) => {
        e.preventDefault()
            localStorage.setItem("stringify", 'tbd')
            localStorage.setItem("MyToken", 'tbd')
        return navigate("/")
    }
    return (

        <div className="component-loginForm flex h-screen justify-center items-center">

            <form onSubmit={loginAction}
                  className="component-loginForm-form border-2 rounded w-3/4 xl:w-1/4 mx-auto p-4 text-center flex flex-col">
                <div
                    className="component-loginForm-form-logo max-w-screen-xl lg:max-w-fit flex flex-row items-center justify-between lg:mx-0 mx-auto p-4 object-left">
                    <div className="component-loginForm-form">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="component-loginForm-form-logo-image" alt="Flowbite Logo"/>
                        <span
                            className="component-loginForm-form-logo-name self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Estrella</span>
                    </div>

                </div>
                <label className="component-loginForm-form-label-user" htmlFor="user">Usuario</label>
                <input className="component-loginForm-form-input-user border px-1" id="user" type="text" name="user" required={true}
                       onChange={(e) => setUser(e.target.value)}/>
                <label className="component-loginForm-form-label-password" htmlFor="password">Contraseña</label>
                <input className="component-loginForm-form-input-password border px-1" id="password" type="password" name="password" required={true}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button
                    type="submit"
                    className="component-loginForm-form-submit-button w-1/2 h-12 px-4 text-indigo-100 mt-2 mx-auto transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 text-center"
                >Aceptar
                </button>

            </form>

        </div>

    );

}
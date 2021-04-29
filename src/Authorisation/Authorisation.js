import React, { useState } from 'react';
import './Authorisation.css'

const AuthorizationForm = () => {
    // state функционального компонента пароль, логин и.... 
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    // состояние скрытия компонента авторизации
    const [authIsValid, setAuthIsValid] = useState(false)

    // функция проверяющая соответсвие пароля установленным и меняющая state если пароль и логин введен правильно
    const AuthorisationIsValid = (login, password) => {
        if (login === "irma@gmail.com" && password === "12345678") {
             setAuthIsValid(true)
           
        } else {
            // сообщении об ошибке
            alert("bad decision")
        }
    }


    return (
        <div style={{ display: authIsValid ? "none" : "flex" }} className="AuthForm">
            <div className="dws-form">
                <div className="Title" htmlFor="tab-1" title="Вкладка 1"> Авторизация </div>
                <div id="form-1" className="tab-form">
                    {/* логин */}
                    <div className="box-input">
                        <input className="input" is aria-label="Введите E-mail" role='textbox' type="text" required onChange={(e) => setLogin(e.currentTarget.value)} placeholder={login} />
                        <label>Введите E-mail</label>
                    </div>
                    {/* пароль */}
                    <div className="box-input">
                        <input className="input" aria-label="Введите пароль" type="password" required onChange={(e) => setPassword(e.currentTarget.value)} placeholder={password} />
                        <label >Введите пароль</label>
                    </div>
                    {/* кнопка загрузки */}
                    <a href="#" className="button"  onClick={() => AuthorisationIsValid(login, password)}>Войти</a>
                 
                    <a href="#">Забыли пароль?</a>
                </div>

            </div>
        </div>

    )
}
export default AuthorizationForm
import React from "react";
import classes from "./Auth.module.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useStore } from "effector-react";
import { setToken } from "../../effector/store";
import { authWithEmailandPassword } from "../../helpers/api";
import { serverDataDecoder } from "../../helpers/decoder";
import * as t from "io-ts";
import { authData, clearUserName, setAuthData } from "containers/Auth/store";

export const AuthRes = t.type({
    idToken: t.string,
    email: t.string,
    refreshToken: t.string,
    expiresIn: t.string,
    localId: t.string,
    registered: t.boolean
}, "AuthRes");

authData.on(setAuthData, (s, p) => ({ ...s, ...p }));
authData.reset(clearUserName);

export const Auth: React.FC = () => {

    const errMess = "Не верное имя пользовтеля или пароль";
    const userData = useStore(authData);

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = userData.email;
        const password = userData.password;

        try {
            const res = await authWithEmailandPassword(email, password);
            const val = serverDataDecoder(AuthRes, res, errMess);
            localStorage.setItem("authToken", val.idToken);
            setToken(val.idToken);
            clearUserName();
        } catch (e) {
            alert("Не верное имя пользователя или пароль");
        }
    };

    return (
        <div className={classes.Auth}>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={submitHandler}>
                    <Input label="User Name"
                           type="email"
                           value={userData.email} onChange={v => setAuthData({ email: v })} />
                    <Input label="User Password"
                           type="password"
                           value={userData.password} onChange={v => setAuthData({ password: v })} />
                    <Button type="success">Войти</Button>
                </form>
            </div>
        </div>
    );
};



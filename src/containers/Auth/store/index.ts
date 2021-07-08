import { createEvent, createStore } from "effector";

type User = {
    email: string
    password: string
};

export const authData = createStore<User>({
    email: "",
    password: "",
});
export const setAuthData = createEvent<Partial<User>>("change_user_name");
export const clearUserName = createEvent<void>("clear_user_name");
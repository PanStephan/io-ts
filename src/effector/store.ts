import { createEvent, createStore } from "effector";
import { Pizza } from "api/pizzaModel";

export const token = createStore<string>("");

export const setToken = createEvent<string>("setToken");
export const clearToken = createEvent<void>("clearToken");

token
    .on(setToken, (_state, payload) => payload);

export const pizzasList = createStore<Pizza[]>([]);

export const setPizzasArr = createEvent<Pizza[]>();
export const addToPizzasArr = createEvent<Pizza>();
export const deleteFromPizzasArr = createEvent<string>();

pizzasList
    .on(setPizzasArr, (_s, p): Pizza[] => p)
    .on(addToPizzasArr, (s, p): Pizza[] => [...s, p])
    .on(deleteFromPizzasArr, (s, id) => s.filter(item => item.id !== id));

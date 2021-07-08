import * as t from "io-ts";

export const Pizza = t.type({
    id: t.string,
    name: t.string,
    flavour: t.string,
    crust: t.string,
    size: t.string
}, "Pizza");

export const PizzaListType = t.record(t.string, Pizza);

export type Pizza = t.TypeOf<typeof Pizza>;
export type PizzaListType = t.TypeOf<typeof PizzaListType>;

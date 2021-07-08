import React, { FC } from "react";
import classes from "./PizzaItem.module.css";
import { deleteFromPizzasArr } from "../../effector/store";
import { deletePizza } from "../../helpers/api";
import { Pizza } from "api/pizzaModel";

async function onDelete(deleteId: string): Promise<void>{
    await deletePizza(deleteId);
    deleteFromPizzasArr(deleteId);
}

export const PizzaItem: FC<Pizza> = ({ name, flavour, crust, size, id }) => {
    return (
        <li className={classes.PizzaItem}>
            <p>Pizza: { name }</p>
            <p>Flavour: { flavour }</p>
            <p>Crust: { crust }</p>
            <p>Size: { size }</p>

            <button onClick={() => {
                onDelete(id);
            }}>Delete</button>
        </li>
    );
};

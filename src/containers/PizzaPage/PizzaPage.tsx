import React, { FC, useState } from "react";
import classes from "./PizzaPage.module.css";
import { getPizza } from "helpers/api";
import { useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { PizzaItem } from "components/PizzaItem.js/PizzaItem";
import { PizzaCreateForm } from "components/PizzaForm/PizzaCreateForm";
import { useStore } from "effector-react";
import { pizzasList, setPizzasArr } from "effector/store";
import { serverDataDecoder } from "helpers/decoder";
import { Pizza, PizzaListType } from "api/pizzaModel";

export const PizzaPage: FC = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const pizzaArr = useStore(pizzasList) as Pizza[];

    const errMessage = "Что-то пошло не так, попробуйте обновить страницы";

    useEffect(() => {
        getPizza().then(result => {
            if(Object.keys(result ?? {}).length){
                const val = serverDataDecoder(PizzaListType, result, errMessage);
                setPizzasArr(Object.values(val));
            }
        }).then(() => {
            setIsLoaded(true);
        });
    }, []);

    return (
        <div>
            <PizzaCreateForm />
            { console.log(pizzaArr) }
            { isLoaded ?
                <ul className={classes.PizzaList}>
                    { pizzaArr.map((item: Pizza) =>
                        <PizzaItem key={item.id} name={item.name} flavour={item.flavour} crust={item.crust} size={item.size} id={item.id} />) }
                </ul>
                :
                <Loader /> }
        </div>
    );
};


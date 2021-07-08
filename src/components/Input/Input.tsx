import React from "react";
import classes from "./Input.module.css";

interface InputProps {
    label: string
    value: string
    type?: string
    onChange: (value?: string) => void
}

export const Input = ({ label, type = "text", value, onChange }: InputProps): React.ReactElement => {
    return <div className={classes.Input}>
        <label>
            { label }
            <input type={type}
                   value={value}
                   onChange={(e: React.FormEvent<HTMLInputElement>) => { 
                       const target = e.target as HTMLInputElement;
                       onChange(target.value); 
                   }}>
            </input>
        </label>
    </div>;
};
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./users/slice";

export const store = configureStore ({
    reducer:{
        users: userReducer,
    },
});

/* De esta forma le decimos que de la funcion store
de este tipo de funciones el valor o tipado es el que tenemos 
en el RootState, siendo este el estado inicial*/
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
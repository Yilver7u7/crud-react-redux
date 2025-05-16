import { type Middleware, configureStore } from "@reduxjs/toolkit";
import userReducer, {
	persistanceMiddleware as persistanceLocalStorageMiddleware,
} from "./users/slice";

/*Un Middleware es algo que se ejecuta dentro un proceso
Lo que sucede aqui es que estamos llamando a una funcion que se ejecuta 
en un punto en especifico y esta a su vez a otra que hace lo mismo, cada una
con el fin de obtener el Action que consiste en el Payload
Debido a que solo en ese punto podemos hacer la modificacion deseada
para conseguir persistencia en la DATA*/
const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log(store.getState());
		console.log(action);
		next(action);
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
		console.log(store.getState());
	};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

/* De esta forma le decimos que de la funcion store
de este tipo de funciones el valor o tipado es el que tenemos 
en el RootState, siendo este el estado inicial*/
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

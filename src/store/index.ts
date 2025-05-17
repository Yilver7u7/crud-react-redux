import { type Middleware, configureStore } from "@reduxjs/toolkit";
import userReducer, {
	persistanceMiddleware as persistanceLocalStorageMiddleware,
} from "./users/slice";
import { toast } from "sonner";
import { rollbackUser } from "./users/slice";

/*Un Middleware es algo que se ejecuta dentro un proceso
Lo que sucede aqui es que estamos llamando a una funcion que se ejecuta 
en un punto en especifico y esta a su vez a otra que hace lo mismo, cada una
con el fin de obtener el Action que consiste en el Payload
Debido a que solo en ese punto podemos hacer la modificacion deseada
para conseguir persistencia en la DATA*/

// biome-ignore lint/suspicious/noRedeclare: <explanation>
const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log(store.getState());
		console.log(action);
		next(action);
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
		console.log(store.getState());
	};

const syncWithDatabase: Middleware = store => next => action => {
	//fase 1 funciona como un peaje quiere decir que lo que deseas ejecutar no se efectua hasta que se valide
	console.log({action, state: store.getState()})
	const { type, payload } = action
	const previousState = store.getState()
	next(action)

	if (type === 'users/deleteUserById') {
		// Simulamos la llamada API ya que JSONPlaceholder no permite DELETE real
		const userToRemove = previousState.users.find((user: UserWithId ) => user.id === payload)
		new Promise((resolve) => {
		  setTimeout(() => {
			console.log(`Simulando DELETE para usuario ${payload}`);
			resolve(true);
		  }, 500);
		})
		.then(() => {
		  toast.success(`Usuario ${payload} eliminado correctamente`);
		})
		.catch(err => {
			if(userToRemove) store.dispatch(rollbackUser(userToRemove))
		  console.error('Error:', err);
		  toast.error(`Error al eliminar usuario ${payload}`);
		});
	  }

	// Como podrias hacer una consulta real
	// if(type === 'users/deleteUserById'){
	// 	fetch(`https://jsonplaceholder.typicode.com/users${payload}`, {
	// 		method:'DELETE'
	// 	})
	// 	.then(res => {
	// 		if(res.ok){
	// 			toast.success(`Usuario ${payload} eliminado correctamente`)
	// 		}
	// throw new Error('Error al eliminar el usuario')
	// 	})
	// 	.catch(err => {
	// toast.error('Eror deleting user ${action.payload}')
	// 		console.log('Error', err)
	// 	})
	// }

	//fase 2 en este punto se ejecuta la action y conseguimos el nuevo estado
}

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(persistanceLocalStorageMiddleware,syncWithDatabase),
});

/* De esta forma le decimos que de la funcion store
de este tipo de funciones el valor o tipado es el que tenemos 
en el RootState, siendo este el estado inicial*/
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

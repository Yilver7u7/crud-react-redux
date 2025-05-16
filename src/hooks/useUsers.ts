import { type User,type UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

/*Se puede pensar que es como un services, debido
a que este es la abstraccion de todas las acciones
que va a tener ese objeto en un customHook */
export const useUserActions = () => {
	const dispatch = useAppDispatch();

	
	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	  };
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};
	return { addUser, removeUser };
};

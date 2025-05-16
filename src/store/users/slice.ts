import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "John Doe",
		email: "Live",
		github: "yilver7u7",
	},
	{
		id: "2",
		name: "lucho",
		email: "Live",
		github: "luisfosg",
	},
	{
		id: "3",
		name: "midudev",
		email: "Inactive",
		github: "midudev",
	},
	{
		id: "4",
		name: "Jane Smith",
		email: "Live",
		github: "$5,720.00",
	},
	{
		id: "5",
		name: "Mike Johnson",
		email: "Inactive",
		github: "$4,200.00",
	},
	{
		id: "6",
		name: "Alice Brown",
		email: "Inactive",
		github: "$2,100.00",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux_state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
	// if(persistedState) return JSON.parse(persistedState).users;
	// return DEFAULT_STATE
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, { id, ...action.payload}]
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
/*Obtenemos el dato que requerimos el Id obtenido del Payload */
export const { addNewUser, deleteUserById } = usersSlice.actions;

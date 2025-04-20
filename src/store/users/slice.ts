import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User{
    id: string;
}

const initialState: UserWithId[] = [
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
        name: "David Clark",
        email: "Inactive",
        github: "$800.00",
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;
import * as api from "../../api/contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const isDublicate = ({title, author}, books) => {
//     const normalizedTitle = title.toLowerCase();
//     const normalizedAuthor = author.toLowerCase();

//     const result = books.find(item => {
//         return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
//     });
//     return Boolean(result);
// }

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            console.log(thunkApi);
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
    );


export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    // {
    //     condition: (data, { getState }) => {
    //         const { books } = getState();
    //         if(isDublicate(data, books.items)) {
    //             return alert(`${data.title} - ${data.author} is already exist`)
    //         }
    //     }
    // }
)



export const removeBook = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)


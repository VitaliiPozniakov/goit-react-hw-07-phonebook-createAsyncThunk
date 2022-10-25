import axios from "axios";

const instanceBooks = axios.create({
    // baseURL: "https://6356dec49243cf412f8f494e.mockapi.io/api/books",
    baseURL: "https://6356dec49243cf412f8f494e.mockapi.io/api/books",
    // params: {
    //     _limit: 12,
    // }
});

export const getContacts = async() => {
    const {data} = await instanceBooks.get("/contacts");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instanceBooks.post("/contacts", data);
    return result;
}

export const removeContact = async(contactId) => {
    const {data} = await instanceBooks.delete(`/contacts/${contactId}`);
    return data;
}
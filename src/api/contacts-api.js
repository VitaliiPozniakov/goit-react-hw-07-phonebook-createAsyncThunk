import axios from "axios";

const instanceBooks = axios.create({
    baseURL: "https://62d69e8549c87ff2af288379.mockapi.io",
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
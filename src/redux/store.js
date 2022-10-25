// import { configureStore } from '@reduxjs/toolkit';
// import { contactApi } from './contacts/contactApi';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import filterReducer from './filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     filter: filterReducer,
//     [contactApi.reducerPath]: contactApi.reducer,
//   },

//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactApi.middleware,
//   ],

//   devTools: process.env.NODE_ENV === 'development',
// });

// setupListeners(store.dispatch);

import { configureStore } from '@reduxjs/toolkit';

// reducers
import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }
});

export default store;

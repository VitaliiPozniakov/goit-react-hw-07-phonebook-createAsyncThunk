import { getFilter } from '../../redux/filter/filter-selectors';

export const getContacts = ({contacts}) => contacts.items;
// export const getContacts = state => state.contacts.contacts;
export const getState = ({contacts}) => ({isLoading: contacts.isLoading, error: contacts.error});


export const getIsLoading = ({contacts}) => contacts.isLoading;
export const getError = ({contacts}) => contacts.error;


export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };


// export const getFilteredBooks = ({books, filter}) => {
//     if (!filter) {
//         return books.items;
//     }

//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredBooks = books.items.filter(({title, author}) => {
//         const normalizedTitle = title.toLocaleLowerCase();
//         const normalizedAuthor = author.toLocaleLowerCase();
//         const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
//         return result;
//     })

//     return filteredBooks;
// }

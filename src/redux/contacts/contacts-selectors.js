import { getFilter } from '../../redux/filter/filter-selectors';

export const getContacts = ({ contacts }) => contacts?.items;
export const getState = ({ contacts }) => ({
  isLoading: contacts.isLoading,
  error: contacts.error,
});
export const getIsLoading = ({ contacts }) => contacts.isLoading;
export const getError = ({ contacts }) => contacts.error;
export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

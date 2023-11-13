export const selectContacts = state => state.contacts.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectLoader = state => state.contacts.contacts.loading;

export const selectUser = state => state.user.user;

export const selectLogin = state => state.user.isLoggedIn;

export const selectRefresh = state => state.user.isRefreshing;

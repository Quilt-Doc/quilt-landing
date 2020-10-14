import { api } from '../apis/api';

export const addUserToContacts = (email) => async () => {
    const response = await api.post(`/verify/add_contact`, { email });
    const {success, error} = response.data;
    if (!success) {
        alert(error.toString());
    }
}
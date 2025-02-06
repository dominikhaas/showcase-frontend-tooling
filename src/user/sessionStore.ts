import {defineStore} from 'pinia'
import axios from "axios";
import {ref} from "vue";

export const useSessionStore = defineStore('session', () => {

    const loggedIn = ref(false);

    const signIn = (token: string, username: string) => {
        window.sessionStorage.setItem('token', token)
        window.sessionStorage.setItem('username', username)
        axios.defaults.headers.common.Authorization = `Token ${token}`
        loggedIn.value = true;
    };

    const signOut = () => {
        window.sessionStorage.clear()
        loggedIn.value = false;
    };

    return {loggedIn, signIn, signOut};
});



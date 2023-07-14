import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state() {
        return {
            token: undefined
        }
    },
    actions: {
       async login(username, password) {
            const response = await axios.post(
                // путь и данные
            )
           // this.token = response.data.token
        }
    }
})
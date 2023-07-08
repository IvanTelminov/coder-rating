import { defineStore } from 'pinia'
import axios from "../axios.js"

export const useCoderStore = defineStore('coder', {
    state: () => ({
        list: []
    }),
    getters: {

    },
    actions: {
        async load() {
            const response = await axios.get("/backend/coders/")
            this.list = response.data
        }
    },
})
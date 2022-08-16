import {defineStore} from 'pinia'
import env from '@/env'

export const useHomeStore = defineStore('home', {
    state: () => ({
        items: [],
        newVideos:[]
    }),
    getters: {

    },
    actions: {
        async fetchItems(){
            const res = await fetch(`https://62f01d0b57311485d12d76cd.mockapi.io/item`)
            const data = await res.json()
            this.items = data
        },
        async fetchNewVideos(){
            const res = await fetch(`https://62f01d0b57311485d12d76cd.mockapi.io/new`)
            const data = await res.json()
            this.newVideos = data
        }
    }
})
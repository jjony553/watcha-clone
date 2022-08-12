import {defineStore} from 'pinia'
import env from '@/env'

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movie: [],
        searchList:[]
    }),
    getters: {

    },
    actions: {
        async fetchMovies(){
            const res = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=hot}`)
            const data = await res.json()
            this.movie = data.Search
        },

        async fetchMovieSearch(text){
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${text}`).then(response => response.json()).then(data => {
                this.searchList = data.Search
            })
        }
    }
})
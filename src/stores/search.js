import {defineStore} from 'pinia'
import { useRoute } from 'vue-router'


export const useSearchStore = defineStore('search', {
    state: () => ({
        isSearchView: false,
    }),
    getters: {

    },
    actions: {
        handleSearchBar(){
            if( useRoute().path == "/search"){
                this.isSearchView = true
            }
            else{
                this.isSearchView = false
            }
            console.log(useRoute().path)
            console.log(this.isSearchView)
        }
    }
})
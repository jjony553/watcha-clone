# watcha-clone
### Watcha Made by Vue3 

## Used
- Skills
```
Vue3, Cli, Composition API, Pinia
```
- API
```
User API from https://mockapi.io/
Movie API from http://www.omdbapi.com/
```
- Font, Library
```
Font from https://fonts.google.com/icons

Library
- vue-horizontal from https://github.com/fuxingloh/vue-horizontal
```

## Screen Shot
#### Evaluate, Library, Watched Page
![ezgif com-gif-maker](https://user-images.githubusercontent.com/55618626/184413375-0e370e0d-348b-44df-b260-f344495f6ea7.gif)


## Folder Structure 
```
  App.vue
│  env.js
│  main.js
│
├─api
├─assets
│  │  logo.png
│  │
│  └─footer
│          blog.svg
│          instagram.svg
│          meta.svg
│          twitter.svg
│
├─components
│  │  Footer.vue
│  │  Header.vue
│  │  MyCard.vue
│  │  Nav.vue
│  │  ProfileMenu.vue
│  │
│  ├─content
│  │      ContentInfo.vue
│  │      RelatedContent.vue
│  │
│  ├─evaluate
│  │      EvaluateCard.vue
│  │
│  ├─home
│  │      AllProgram.vue
│  │      MainCard.vue
│  │      MovieProgram.vue
│  │      TopCard.vue
│  │      TvProgram.vue
│  │      WatchaMovie.vue
│  │
│  ├─search
│  │  │  BasicCard.vue
│  │  │  PopularCard.vue
│  │  │
│  │  └─SearchResult
│  │          SearchResult.vue
│  │          SearchResultList.vue
│  │          SearchResultMovie.vue
│  │          SearchResultPeople.vue
│  │          SearchResultPopular.vue
│  │          SearchResultTv.vue
│  │
│  └─watch
│          VideoPlayer.vue
│
├─layouts
│      DefaultLayout.vue
│      WatchLayout.vue
│
├─router
│      index.js
│
├─stores
│      home.js
│      movie.js
│      search.js
│
└─views
        ContentView.vue
        EvaluateView.vue
        HomeView.vue
        LibraryView.vue
        PopularListView.vue
        SearchView.vue
        StaffMadeView.vue
        TagSuggestionsView.vue
        WatchedView.vue
        WatchView.vue
```

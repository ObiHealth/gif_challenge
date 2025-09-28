You are a developer tasked with creating a web application that adds features to our gif displaying frontend.

Currently, the application displays paginated trending gifs.

You have been tasked with adding some functionality to the application:
1. Add a search bar that allows gifs to be searched for while retaining ability to see trending gifs
- Users should be able to switch between trending and search mode
- In search mode, the search bar should be visible and the trending gifs should be hidden
- Searching and submitting search query should hit the kplipy search endpoint and display results

2. Remove pagination and replace with infinite scroll
- Remove explicit pagination controls
- Instead, implement infinite scroll: before user reaches bottom of the page, load more gifs

3. Users should be able to favorite gifs and see their favorited gifs in a separate section
- Add a favorite button to each gif
- Persist favorites to local storage or persistence of choice
- Allow users to view their favorited gifs in a separate section

4. Sort favorites by most recent
- Allow favorite section to be sorted by most recent, ascending or descending

4. Implement autocomplete with search suggestions API
- Klipy has an autocomplete API - use it to render dropdowns in response to typed input in search query
- Give user a way to select an autocomplete suggestion and use that for search query
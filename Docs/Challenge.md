You are a developer tasked with creating a web application that adds features to our gif displaying frontend.

# Expectations
- You can search whatever documentation you need
- You can use whatever AI tools you'd like except for embedded IDE agents -
The idea here is that this could be done by AI, but in this scenario we are building core functionality that needs to be understood in a very intentional way.
- Although we want to guage coding productivity, you will be assessed less on completion and how far you get and more on the quality of your code and the thought process behind it

# The Challenge:
Currently, the application displays paginated trending gifs.

You have been tasked with adding some functionality to the application:

1. Fetch trending gifs on component mount and when page changes
- State has been set up - consult the Klip_Docs.md for information on how to use the trending gifs endpoint
- Figure out what structure gif data is in and pass it into the GifGrid component

2. Add a search bar that allows gifs to be searched for while retaining ability to see trending gifs
- Users should be able to switch between trending and search mode
- In search mode, the search bar should be visible and the trending gifs should be hidden
- Searching and submitting search query should hit the kplipy search endpoint and display results

3. Remove pagination and replace with infinite scroll
- Remove explicit pagination controls
- Instead, implement infinite scroll: before user reaches bottom of the page, load more gifs

4. Users should be able to favorite gifs and see their favorited gifs in a separate section
- Add a favorite button to each gif
- Persist favorites to local storage or persistence of choice
- Allow users to view their favorited gifs in a separate section

5. Sort favorites by most recent
- Allow favorite section to be sorted by most recent, ascending or descending

6. Implement autocomplete with search suggestions API
- Klipy has an autocomplete API - use it to render dropdowns in response to typed input in search query
- Give user a way to select an autocomplete suggestion and use that for search query
# GIF Coding Challenge Overview
You are a developer tasked with creating a web application that adds features to our gif displaying frontend.

# Get started
Run the following standard commands:
```bash
npm i
npm run dev
```

# Expectations
- You can search whatever documentation you need
- You can use whatever AI tools you'd like except for embedded IDE agents -
The idea here is that this could be done by AI, but in this scenario we are building core functionality that needs to be understood in a very intentional way.
- Although we want to guage coding productivity, you will be assessed less on completion and how far you get and more on the quality of your code and the thought process behind it

# The Klipy API
API Docs:
https://docs.klipy.com/gif-api

Create API Key (For interviwer):
https://partner.klipy.com/api-keys

# The Challenge:
Currently, the application displays paginated trending gifs.

You have been tasked with adding some functionality to the application:


###  1) Fetch trending gifs
- Fetch trending gifs on component mount and pagination change
- See above info on Klipy API Docs about this endpoint
- Pass the gif data into the GifGrid component


### 2) Add search bar
- Retain trending gif page
- Allow user to switch between trending and search mode
- In search mode, the search bar is visible and trending gifs are hidden
- Searching and submitting search query should hit the kplipy search endpoint and display results


### 3) Remove pagination and replace with infinite scroll
- Remove explicit pagination controls
- Instead, implement infinite scroll: before user reaches bottom of the page, load more gifs


### 4) Add favorite button
- Add a favorite button to each gif
- Persist favorites to local storage or persistence of choice
- Allow users to view their favorited gifs in a separate section (trending, search, favorites)


### 5) Sort favorites by most recent
- Add a favorite button to each gif
- Persist favorites to local storage or persistence of choice
- Allow users to view their favorited gifs in a separate section
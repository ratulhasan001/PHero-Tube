# PHero-Tube

A small video-listing web app built with HTML, CSS, Bootstrap and vanilla JavaScript. It fetches video data from the Programming Hero public API, renders it as a grid of cards, lets the user filter by category and sort by view count, and includes a separate blog page answering three JavaScript/web questions.

**Live site:** https://ratul-phero-tube.netlify.app/ (mirror: https://ratulhasan001.github.io/PHero-Tube/)

## Features

- Category buttons (All, Music, Comedy, Drawing) that load videos for the selected category with `fetch`
- Video cards showing thumbnail, title, author avatar and name, a verified badge for verified authors, and view count
- Posted time converted from seconds to "X hours Y minutes" when available
- "Sort By View" button that sorts the current category by views, toggling between descending and ascending on each click
- An empty-state message ("Oops!! Sorry, There is no content here") when a category has no videos
- Blog page (`blog.html`) with a Bootstrap accordion answering:
  - the scope of `var`, `let` and `const`
  - the use cases of `null` and `undefined`
  - what a REST API is

## Tech stack

- HTML5, CSS3, JavaScript (ES6, Fetch API)
- [Bootstrap 5.3.2](https://getbootstrap.com/) (via CDN)
- [Font Awesome](https://fontawesome.com/) icons (via CDN)

## API

The app uses the Programming Hero public video API:

| Purpose | Endpoint |
| --- | --- |
| All categories | `https://openapi.programming-hero.com/api/videos/categories` |
| Videos by category | `https://openapi.programming-hero.com/api/videos/category/${id}` |

Category IDs used in `script.js`: `1000` All, `1001` Music, `1003` Comedy, `1002` Drawing.

## Project structure

```
PHero-Tube/
├── index.html   # Main page: header, category buttons, video grid
├── blog.html    # Q&A blog page
├── script.js    # Fetching, rendering, filtering and sorting logic
├── style.css    # Custom styles
└── img/         # Logo and empty-state icon
```

## Getting started

Serve the folder with any static file server:

```bash
git clone https://github.com/ratulhasan001/PHero-Tube.git
cd PHero-Tube
python3 -m http.server 8000
# then open http://localhost:8000
```

An internet connection is required for the API and the CDN files.

## Limitations

- The app depends entirely on the external Programming Hero API. When last checked (November 2026), the endpoints above returned `{"error":"Not found"}`, so videos may not load on the live site.
- If no category has been selected yet, or Drawing is selected, "Sort By View" loads and sorts the Music category instead.

---

Ratul Hasan · [ratulhasan.dev](https://ratulhasan.dev)

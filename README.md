# 🍿 usePopcorn

A modern movie search and tracking application built with React. Search for movies, view detailed information, and maintain your personal watchlist with ratings.

## Features

- **Movie Search**: Real-time search powered by TMDB API
- **Detailed Information**: View comprehensive movie details including cast, director, plot, and ratings
- **Personal Watchlist**: Track movies you've watched with your own ratings
- **Star Rating System**: Interactive rating component
- **Persistent Storage**: Your watchlist is saved locally
- **Keyboard Shortcuts**: Press Enter to focus search, Escape to close details
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## Tech Stack

- React 18
- Vite
- TMDB API
- Custom Hooks (useMovies, useLocalStorageState, useKey)
- Local Storage for data persistence

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/kshfahmd/usepopcorn-react.git
cd usepopcorn-react
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## How to Use

1. **Search for movies**: Type in the search bar to find movies
2. **View details**: Click on any movie to see full details
3. **Rate movies**: Use the star rating system to rate movies
4. **Add to watchlist**: Click "Add to List" after rating
5. **Remove from watchlist**: Click the X button on watched movies

## Project Structure

```
src/
├── AppV1.jsx              # Main application component
├── StarRating.jsx         # Reusable star rating component
├── useMovies.js           # Custom hook for movie search
├── useLocalStorageState.js # Custom hook for localStorage
├── useKey.js              # Custom hook for keyboard events
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Custom Hooks

- **useMovies**: Handles movie search with debouncing and error handling
- **useLocalStorageState**: Manages state synced with localStorage
- **useKey**: Abstracts keyboard event listeners

## What I Learned

- Building custom React hooks for reusable logic
- Working with external APIs and handling async operations
- Managing complex state across components
- Implementing localStorage for data persistence
- Creating responsive layouts with CSS
- Handling keyboard events for better UX

## Future Improvements

- Add user authentication
- Implement movie recommendations
- Add sorting and filtering options
- Create a dark/light theme toggle
- Add movie trailers and additional media

## Author

**Kashif Ahmed**  
Full Stack Developer

- 📧 Email: kashifahmed2604@gmail.com
- 💼 LinkedIn: [linkedin.com/in/kshfahmd](https://www.linkedin.com/in/kshfahmd/)
- 📍 Location: Delhi, India
- 🔗 GitHub: [github.com/kshfahmd](https://github.com/kshfahmd)

Open to opportunities and available for freelance work!

## License

MIT

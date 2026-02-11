# 🍿 usePopcorn

A modern, responsive movie search and tracking application built with React. Search for movies, view detailed information, and maintain your personal watchlist with ratings.

## 🚀 Live Demo
🔗 https://usepopcorn-react-pearl.vercel.app/

## ✨ Features

- **🔍 Real-time Movie Search**: Powered by TMDB API with instant results
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices
- **🎬 Detailed Information**: View comprehensive movie details including cast, director, plot, and ratings
- **⭐ Personal Watchlist**: Track movies you've watched with your own ratings
- **🌟 Interactive Star Rating**: Custom-built rating component
- **💾 Persistent Storage**: Your watchlist is automatically saved locally
- **⌨️ Keyboard Shortcuts**: 
  - Press `Enter` to focus search
  - Press `Escape` to close movie details
- **🎨 Modern UI**: Clean interface with smooth animations and transitions

## 🛠️ Tech Stack

- **React 18** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **TMDB API** - Movie database and information
- **Custom Hooks** - Reusable logic (useMovies, useLocalStorageState, useKey)
- **CSS3** - Responsive design with Flexbox and Grid
- **Local Storage API** - Client-side data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kshfahmd/usepopcorn-react.git
cd usepopcorn-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```bash
VITE_TMDB_API_KEY=your_api_key_here
```

**Note:** A working API key is already included in the `.env` file. For your own projects, get a free API key from [TMDB](https://www.themoviedb.org/settings/api).

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:5173](http://localhost:5173)

## 📖 How to Use

1. **Search for movies**: Type in the search bar (minimum 3 characters)
2. **View details**: Click on any movie card to see full information
3. **Rate movies**: Use the interactive star rating system
4. **Add to watchlist**: Click "Add to List" after rating
5. **Manage watchlist**: Remove movies by clicking the X button
6. **View statistics**: See average ratings and total runtime at a glance

## 📁 Project Structure

```
src/
├── AppV1.jsx                   # Main application component
├── StarRating.jsx              # Reusable star rating component
├── useMovies.js                # Custom hook for movie search
├── useLocalStorageState.js     # Custom hook for localStorage
├── useKey.js                   # Custom hook for keyboard events
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and responsive design
```

## 🎯 Custom Hooks

### useMovies
Handles movie search functionality with:
- API request management
- Loading and error states
- Request debouncing
- Abort controller for cleanup

### useLocalStorageState
Manages state synchronized with localStorage:
- Automatic persistence
- Initial state from storage
- Updates on state changes

### useKey
Abstracts keyboard event handling:
- Clean event listener management
- Automatic cleanup
- Reusable across components

## 💡 What I Learned

- Building and composing custom React hooks for reusable logic
- Working with external APIs and handling async operations
- Managing complex state across multiple components
- Implementing localStorage for data persistence
- Creating responsive layouts with CSS Grid and Flexbox
- Handling keyboard events for improved UX
- Securing API keys with environment variables
- Component composition and prop drilling optimization

## 🔒 Environment Variables

This project uses environment variables to secure API keys. See `ENV_SETUP_GUIDE.md` for detailed setup instructions.

Key points:
- All environment variables must be prefixed with `VITE_`
- Never commit `.env` file to version control
- Use `.env.example` as a template for others
- Restart dev server after changing env variables

## 🎨 Responsive Design

The app is built with a mobile-first approach and includes:
- Breakpoints at 600px (tablet) and 900px (desktop)
- Flexible layouts that adapt to screen size
- Touch-friendly interfaces on mobile devices
- Optimized font sizes across devices

## 🚀 Future Improvements

- [ ] Add user authentication
- [ ] Implement movie recommendations based on watch history
- [ ] Add sorting and filtering options (genre, year, rating)
- [ ] Create a dark/light theme toggle
- [ ] Add movie trailers and video previews
- [ ] Implement infinite scroll for search results
- [ ] Add movie categories (trending, top-rated, upcoming)

## 👨‍💻 Author

**Kashif Ahmed**  
Full Stack Developer

- 📧 Email: [kashifahmed2604@gmail.com](mailto:kashifahmed2604@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/kshfahmd](https://www.linkedin.com/in/kshfahmd/)
- 📍 Location: Delhi, India
- 🔗 GitHub: [github.com/kshfahmd](https://github.com/kshfahmd)

**Open to opportunities and available for freelance work!**



## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built as part of learning modern React development
- Inspired by the need for a simple, clean movie tracking app

---

⭐ If you found this project helpful, please consider giving it a star!

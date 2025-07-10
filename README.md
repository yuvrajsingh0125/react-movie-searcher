# 🎬 React Movie Searcher

**React Movie Searcher** is a modern web application that allows users to search for movies in real-time and explore trending titles. Built using **React** for the frontend and **Appwrite** for backend services like tracking search queries and managing trending data.

---

## 🚀 Features

- 🔍 **Live Movie Search** using external movie APIs  
- 📈 **Trending Section** showing the top 5 most searched movies  
- 🧠 **Search Logging** with Appwrite to track query frequency  
- 💻 **Responsive Design** for mobile and desktop devices  
- ⚡ **Fast & Modular** React components using hooks and clean architecture  

---

## 🛠 Tech Stack

- **Frontend**: React (Hooks, JSX)  
- **Backend Services**: Appwrite (Database + Serverless)  
- **API**: Movie data from [TMDB](https://www.themoviedb.org/) or [OMDb](http://www.omdbapi.com/)  
- **Styling**: CSS Modules or Styled Components (based on setup)  

---

## 📁 Project Structure

```
react-movie-searcher/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── services/         # API and Appwrite logic
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yuvrajsingh0125/react-movie-searcher.git
cd react-movie-searcher
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Appwrite
- Set up your Appwrite project and database.
- Create a collection to track search terms.
- Update your Appwrite service file with your **project ID** and **endpoint URL**.

### 4. Run the App
```bash
npm start
```

---

## 📈 Future Enhancements

- 🔐 User login and personalized watchlists  
- 🎭 Filter search by genre, year, or rating  
- 🌓 Dark/Light theme toggle  
- 🎞️ Movie details modal with extended info  

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)  
- [Appwrite](https://appwrite.io/)  
- [TMDB API](https://www.themoviedb.org/) / [OMDb API](http://www.omdbapi.com/)

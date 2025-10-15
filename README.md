# Tech News Reader
A Vue.js application that fetches and displays the latest tech news in an interactive table format. Users can search through news articles by title and click on any row to view the full content of the article.

## Features
**📰 Tech News Feed**: Fetches the latest technology news from a reliable API

**🔍 Search Functionality**: Filter news articles by title using the search bar

**📖 Full Content View**: Click on any news row to read the complete article content

**🎨 Responsive Design**: Clean, modern interface that works on all devices

**⚡ Fast Performance**: Built with Vue.js for smooth user interactions

## Project Structure
```text
tech-news-reader/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SectionItem.vue
│   ├── views/
│   │   └── TechNews.vue
│   ├── services/
│   │   └── api.ts
│   │   └── newsApi.ts
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```
## Prerequisites
Before running this project, make sure you have the following:

- Docker installed on your system
- Docker Compose installed
- Docker Daemon or Docker Desktop is running

## Quick start
### 1. Clone the repository
```bash
git clone https://github.com/lucky-ba/neoway-test.git
cd tech-news-reader
```
### 2. Run the application:
```bash
docker-compose up
```
### 3. Access the application:
The application will start and be available at http://localhost:5173/neoway-test/.

## Available Scripts
- ```npm run dev``` - Starts the development server with hot-reload

- ```npm run build``` - Builds the project for production

- ```npm run lint``` - Runs ESLint for code quality checks

## Usage
**View News:** When the application loads, you'll see a table of recent tech news articles

**Search:** Use the search bar at the top to filter articles by title

**Read Full Content:** Click on any news row to open a modal with the complete article content

**Close Modal:** Click the close button or outside the modal or pressing ESC to return to the news table

## API Information
This application fetches news from a tech news API. The current implementation uses:

- **Endpoint:** Tech news API (specifics may vary)

- **Category:** Technology

- **Update Frequency:** Real-time or as configured

## Technologies Used
- Vue.js 3 - Progressive JavaScript framework

- Axios - HTTP client for API requests

- CSS3 - Styling and responsive design

- Modern JavaScript (ES6+) - Latest JavaScript features

## Browser Support
This application supports all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting
### 1. API errors:

- Check your internet connection
- Verify API keys in environment variables
- Check API rate limits

### 2. Dependencies issues:

```bash
rm -rf node_modules package-lock.json
npm install
```
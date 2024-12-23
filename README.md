# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Weather App - Daily Forecast 🌦️

This is a simple weather application that provides daily forecasts using React.js. It shows weather information like temperature, humidity, and wind speed for a selected location. The app is designed to be responsive, offering a user-friendly experience across various devices.

## Features

- 🌍 Get weather forecasts for any location.
- 📅 Daily forecast with details like temperature, humidity, wind speed, and more.
- 📱 Responsive design for both desktop and mobile devices.
- 🕑 Real-time updates based on user input.

## Technologies Used

- **React.js**: Front-end framework for building the UI.
- **OpenWeather API**: Used to fetch real-time weather data.
- **TailwindCSS**: For styling the application.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yanarkhan/weather-app-forecast.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app-forecast
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following content: Get your API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file:

   ```bash
   VITE_REACT_APP_API_KEY=your_openweathermap_api_key
   VITE_REACT_APP_API_BASE_URL=https://api.openweathermap.org/data/2.5/

   ```

5. Start the development server:
   ```bash
   npm start
   ```
6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

- Search for a city to get its daily weather forecast.
- View detailed weather data including temperature, humidity, and wind speed.
- The app is responsive and adapts to both desktop and mobile screens.

## Demo

You can check out the live demo of the Weather App [here](https://weather-app-forecast-sand.vercel.app/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

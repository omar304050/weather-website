'use client';
import { useEffect, useState } from 'react';
import useWeatherStore from './store/store.ts';

export default function Home() {
  const { city, weather, loading, error, setCity, fetchWeather } = useWeatherStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        fetchWeather(searchTerm);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white dark:text-gray-100 mb-4 animate-fade-in transition-colors duration-300">Weather App</h1>
          <p className="text-xl text-white/80 dark:text-gray-300 transition-colors duration-300">Search for weather in any city around the world</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a city..."
              className="w-full p-4 rounded-xl text-lg bg-white/10 dark:bg-gray-800/50 text-white dark:text-gray-100 placeholder-white/50 dark:placeholder-gray-400 border border-white/20 dark:border-gray-700 focus:outline-none focus:border-white/50 dark:focus:border-gray-600 focus:ring-2 focus:ring-white/20 dark:focus:ring-gray-600 transition-all duration-300 pr-12"
            />
            {loading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white dark:border-gray-300 border-t-transparent"></div>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-500/90 dark:bg-red-600/90 text-white p-4 rounded-xl mb-8 text-center shadow-lg animate-fade-in max-w-2xl mx-auto transition-colors duration-300">
            {error}
          </div>
        )}

        {loading && !weather && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-32 w-32 bg-white/20 dark:bg-gray-700/50 rounded-full mb-4"></div>
              <div className="h-8 w-48 bg-white/20 dark:bg-gray-700/50 rounded mb-4"></div>
              <div className="h-4 w-32 bg-white/20 dark:bg-gray-700/50 rounded"></div>
            </div>
          </div>
        )}

        {weather && (
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white dark:text-gray-100 mb-2 transition-colors duration-300">{weather.location.name}</h2>
              <p className="text-xl text-white/80 dark:text-gray-300 transition-colors duration-300">{weather.location.country}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {weather.forecast.forecastday.map((day, index) => (
                <div 
                  key={day.date} 
                  className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold text-white dark:text-gray-100 mb-4 transition-colors duration-300">
                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                    </p>
                    <div className="relative w-24 h-24 mb-4">
                      <img
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <p className="text-4xl font-bold text-white dark:text-gray-100 mb-4 transition-colors duration-300">
                      {day.day.avgtemp_c}°C
                    </p>
                    <p className="text-lg text-white/80 dark:text-gray-300 mb-6 transition-colors duration-300">{day.day.condition.text}</p>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-white/10 dark:bg-gray-700/50 p-3 rounded-lg text-center transition-colors duration-300">
                        <p className="text-sm text-white/80 dark:text-gray-300 mb-1 transition-colors duration-300">Humidity</p>
                        <p className="text-lg font-bold text-white dark:text-gray-100 transition-colors duration-300">{day.day.avghumidity}%</p>
                      </div>
                      <div className="bg-white/10 dark:bg-gray-700/50 p-3 rounded-lg text-center transition-colors duration-300">
                        <p className="text-sm text-white/80 dark:text-gray-300 mb-1 transition-colors duration-300">Wind</p>
                        <p className="text-lg font-bold text-white dark:text-gray-100 transition-colors duration-300">{day.day.maxwind_kph} km/h</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
'use client';

import { create } from 'zustand';


type WeatherData = any;
interface WeatherState {
  city: string;
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  setCity: (city: string) => void;
  setWeather: (weather: WeatherData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  fetchWeather: (city: string) => void;
}


const useWeatherStore = create<WeatherState>((set) => ({
  city: '',
  weather: null,
  loading: false,
  error: null,

  setCity: (city) => set({ city }),
  setWeather: (weather) => set({ weather }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  fetchWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const API_KEY = '49a0f320b7c54514ae4132421241312';
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      set({ weather: data });
    } catch (error) {
      set({ error: 'An error occurred. Please try again later' });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useWeatherStore;


import './App.css';
import useLocalStorageState from "use-local-storage-state";
import Form from './components/Form/index';
import List from './components/List';
import { useState } from 'react';
import { useEffect } from "react";
import {uid} from 'uid'

const initialActivities =[
  {
    id:1,
    name: "raus gehen",
    isForGoodWeather: "on"
  }
]

function App() {

    const [activities, setActivities] = useLocalStorageState("activities", {
      defaultValue: initialActivities,
    });
    const [weather, setWeather] = useLocalStorageState("weather", {
      defaultValue: null,
    });



 function handleAddActivity(newActivity){
    setActivities([{id: uid(), ...newActivity}, ...activities]);
  }

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Bad server response");
        }
        console.log(weather)
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchWeather();
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [weather]);

  const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === "on");


  
  return (
    <div className="App">
      <h1 className="app__heading">
            <span>{weather.condition}</span>
            <span>{weather.temperature} °C</span>
          </h1>
      <List activities={filteredActivities} isGoodWeather={weather?.isGoodWeather}/>
      <Form onAddActivity={handleAddActivity}/>
    </div>
  );
}

export default App;

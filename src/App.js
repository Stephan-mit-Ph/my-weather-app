
import './App.css';
import Form from './components/Form/index';
import List from './components/List';
import { useState } from 'react';
import {uid} from 'uid'

const initialActivities =[
  {
    id:1,
    name: "raus gehen",
    isForGoodWeather: "on"
  }
]

function App() {
  const [activities, setActivities]= useState(initialActivities);

 function handleAddActivity(newActivity){
    setActivities([{id: uid(), ...newActivity}, ...activities]);
  }
  console.log(activities)
  return (
    <div className="App">
      <List activities={activities}/>
      <Form onAddActivity={handleAddActivity}/>
    </div>
  );
}

export default App;

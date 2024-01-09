
import { useState } from 'react';
import './App.css';
import BarChart from './Components/BarChart';
import { UserData } from './Data';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
function App() {
  const [userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"User Gained",
      data:UserData.map((data)=>data.userGain),
      backgroundColor:["lightgreen","cyan","lightblue","whitesmoke","red"],
      borderColor:"black",
      borderWidth:2
    }],


  })
  return (
    <div className="App">
      <div style={{width:700}}>
      <BarChart chartData={userData}/>
      </div>
      <div style={{width:500}}>
      <LineChart chartData={userData}/>
      </div>
      <div style={{width:500}}>
      <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;

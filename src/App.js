// import './App.css';
import Calendar from './components/calendar';
import React, {useState} from 'react';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import ParentCalendar from './components/parentCalendar';


function App() {
    return (
        <div>
            <ParentCalendar />
        </div>
    )
}

export default App;

import React, { useState } from 'react';
import Calendar from "./calendar"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


const ParentCalendar = () => {
    const a = new Date();
    console.log()
    console.log(a.getTime())
    const [values, setValues] = useState(
        {
            startDate: new Date(),
            startTime: setHours(setMinutes(new Date(), 0), 6)
        }
    );

    const onChange = (e) => {
        console.log(e)
        // setValues(e)
        setValues({...values, startDate: e, startTime: e})
    };  

    const isWeekday = (date) => {
        
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const filterPassedTime = (time) => {
            const currentDate = new Date();
            const selectedDate = new Date(time);
        
            return currentDate.getTime() < selectedDate.getTime()

        // console.log(time); 
        // const x = new Date(); 
        // console.log(x); 
        // const selectedDate = new Date(time); 
        // const currentDate = values.startDate; 
        
        // const selectedDateToStringDate = selectedDate.toDateString();
        // const xToDateString = x.toDateString();

        // console.log(currentDate.getTime(), selectedDate.getTime());
        // ///TODO: thers an issue here. when I pick a time the time on the other dates grey out
        // /// these two values are the date of the selected date and the current date.
        // if(selectedDateToStringDate === xToDateString) { /// if they are the same then the user can not select times before the current hour
        //     return currentDate.getTime() < selectedDate.getTime(); 
        // }else{ /// they can pick any times
        //     console.log("false"); 
        //     return currentDate.getTime() < selectedDate.getTime(); 
        // }
    }
    

    return (
        <div className="App">
        <Calendar
            values={values}
            minDate={new Date()} 
            selected={values.startDate} 
            onChange={onChange}
            filterDate={isWeekday}
            filterTime={filterPassedTime}            
            excludeTime={[ 
                setHours(setMinutes(new Date(), 30), 17), 
                setHours(setMinutes(new Date(), 0), 18), 
                setHours(setMinutes(new Date(), 30), 18), 
                setHours(setMinutes(new Date(), 0), 19), 
                setHours(setMinutes(new Date(), 30), 19), 
                setHours(setMinutes(new Date(), 0), 20), 
                setHours(setMinutes(new Date(), 30), 20), 
                setHours(setMinutes(new Date(), 0), 21), 
                setHours(setMinutes(new Date(), 30), 21), 
                setHours(setMinutes(new Date(), 0), 22), 
                setHours(setMinutes(new Date(), 30), 22), 
                setHours(setMinutes(new Date(), 0), 23), 
                setHours(setMinutes(new Date(), 30), 23), 
                setHours(setMinutes(new Date(), 0), 24), 
                setHours(setMinutes(new Date(), 30), 24), 
                setHours(setMinutes(new Date(), 30), 24), 
                setHours(setMinutes(new Date(), 0), 1), 
                setHours(setMinutes(new Date(), 30), 1), 
                setHours(setMinutes(new Date(), 0), 2), 
                setHours(setMinutes(new Date(), 30), 2), 
                setHours(setMinutes(new Date(), 0), 3), 
                setHours(setMinutes(new Date(), 30), 3), 
                setHours(setMinutes(new Date(), 0), 4), 
                setHours(setMinutes(new Date(), 30), 4), 
                setHours(setMinutes(new Date(), 0), 5), 
                setHours(setMinutes(new Date(), 30), 5), 
            ]}
        />
            
        </div>
    );
}

export default ParentCalendar;

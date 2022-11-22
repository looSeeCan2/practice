import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../calendar.css"


const Calendar = (props) => {
    console.log(props);
    // console.log(props.i)
    
    const confirm = () => {
        console.log("Ricki Is Awesome")

    }

    // function handleBlur(event) {
    //     console.log(event);
    // }

    const handleBlur = (e) => {///TODO: asign variables the values of the dates, if they are true disable button
        console.log(e);
        console.log("test")
    }

    return (
        <div>
            <DatePicker
                shouldCloseOnSelect={false}
                dateFormat={"MMMM d, yyyy h:mm aa"}
                className='datePicker'
                minDate={props.minDate} 
                selected={props.selected} 
                onChange={props.onChange} 
                showTimeSelect
                // timeFormat={"HH:mm"}
                filterDate={props.filterDate}
                filterTime={props.filterTime}
                excludeTimes={props.excludeTime}
                onBlur={handleBlur()}
                />
            <button disabled={true} onClick={confirm}>Confirm Reservation</button>

        </div>
    );
}

export default Calendar;

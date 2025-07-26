function Header({selectedDate, currentDate}){
    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth() + 1;
    const currentDay = selectedDate.getDate();
    console.log(selectedDate, currentDate);
    return(
    <header className="header">
       { console.log(selectedDate === currentDate) }

        <h1>Activity Tracker</h1>
        {selectedDate.getDate() == currentDate.getDate ? 
         <p>Today is: {currentMonth} / {currentDay} / {currentYear} </p>
       : <p> {currentMonth} / {currentDay} / {currentYear} </p>
        }
    </header>
    );
}

export default Header
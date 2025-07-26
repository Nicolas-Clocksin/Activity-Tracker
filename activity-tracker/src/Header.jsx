function Header(){
    const currentDate = new Date(Date.now());
    const currentYear = currentDate.getYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    return(
    <header className="header">
        <h1>Activity Tracker</h1>
        <p>Today is: {currentMonth} / {currentDay} / {currentYear} </p>
    </header>
    );
}

export default Header
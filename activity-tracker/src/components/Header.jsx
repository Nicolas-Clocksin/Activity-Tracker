import ChangeDateModal from "../modals/ChangeDateModal"
import React, {useState} from 'react'
function Header({selectedDate, setSelectedDate}){
    const currentDate = new Date(Date.now());
    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth() + 1;
    const currentDay = selectedDate.getDate();
    const [showChangeDateModal, setShowChangeDataModal] = useState(false);
    function handleShowChangeDateModal(){
        setShowChangeDataModal(true);
    }
    function handleCloseChangeDateModal() {
        setShowChangeDataModal(false);
      }
    return(
    <header className="header">
       
        <h1>Activity Tracker</h1>
        {selectedDate.getDate() == currentDate.getDate ? 
         <p>Today is: {currentMonth} / {currentDay} / {currentYear} </p>
       : <p> {currentMonth} / {currentDay} / {currentYear} </p>
        }
            <button onClick={()=> handleShowChangeDateModal()}>Change Date</button>
        {
            showChangeDateModal && (
                <ChangeDateModal selectedDate={selectedDate} setSelectedDate={setSelectedDate} show={true} onClose={handleCloseChangeDateModal}/>
            )
        }
     
    </header>
    );
}

export default Header
import { Button } from "react-bootstrap";
import ChangeDateModal from "../modals/ChangeDateModal"
import React, {useState} from 'react'
function Header({selectedDate, setSelectedDate}){
    const currentDate = new Date();
    const [showChangeDateModal, setShowChangeDataModal] = useState(false);
    const isToday =
    selectedDate.getFullYear() === currentDate.getFullYear() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getDate() === currentDate.getDate();

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    function handleShowChangeDateModal(){
        setShowChangeDataModal(true);
    }
    function handleCloseChangeDateModal() {
        setShowChangeDataModal(false);
      }
    return(
        <header className="header text-center">
        <h1 className="mb-3">Activity Tracker</h1>
        <div className="mb-3">
          <span id="span" className="me-3 fs-5" onClick={handleShowChangeDateModal}>
            {isToday ? 'Today is: ' : ''}
            <strong>{formattedDate}</strong>
          </span>
        </div>
        {
            showChangeDateModal && (
                <ChangeDateModal selectedDate={selectedDate} setSelectedDate={setSelectedDate} show={true} onClose={handleCloseChangeDateModal}/>
            )
        }
     
    </header>
    );
}

export default Header
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangeDateModal({ selectedDate, setSelectedDate, onClose, show }) {
  const [dateChangeSelected, setDateChangeSelected] = useState('');

  useEffect(() => {
    if (show && selectedDate) {
      const date = new Date(selectedDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formatted = `${year}-${month}-${day}`;
      setDateChangeSelected(formatted);
    }
  }, [show, selectedDate]);

  function updateDate(event) {
    console.log(event.target.value);
    setDateChangeSelected(event.target.value);
  }

  function handleChangeDate() {
    const [year, month, day] = dateChangeSelected.split('-');
    const newDate = new Date(Number(year), Number(month) - 1, Number(day));
    setSelectedDate(newDate);
    onClose();
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Activity Date</Modal.Title>
      </Modal.Header>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            type="date"
            value={dateChangeSelected}
            onChange={updateDate}
          />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleChangeDate}>
          Update Date
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeDateModal;

import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import Icon from "@material-ui/core/Icon";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
const format = "DD/MM/YYYY";
function AddSlotModal({ onFormSubmit, data, isEdit }) {
  const default_slots = [
    { id: 1, value: "4.30AM - 9.30AM", selected: false },
    { id: 2, value: "10.30AM - 3.30PM", selected: false },
    { id: 3, value: "4.30Pm - 9.30PM", selected: false },
  ];

  const [available, setAvailable] = useState();
  const [slot, setSlot] = useState(default_slots);
  const [dates, setDates] = useState([]);
  const formatDates = (avail_Date) => {
    // eslint-disable-next-line array-callback-return
    let availableDates = [];
    avail_Date.map((date) => availableDates.push(date.format()));
    setAvailable(availableDates);
  };
  useEffect(() => {
    setDates([]);
    setSlot(default_slots);
  }, []);
  useEffect(() => {
    formatDates(dates);
  }, [dates]);

  useEffect(() => {
    if (isEdit) {
      const slotData = data.slots.map((slot, i) => {
        return { id: i, value: slot, selected: true };
      });
      formatDates([data.date]);
      setDates([data.date]);
      setSlot(slotData);
    } else {
      setDates([]);
      setSlot(default_slots);
    }
  }, [data, isEdit]);
  const handleCheckboxChange = (event) => {
    let slotIndex = slot.findIndex((s) => s.value === event.target.value);

    const newArray = slot;
    newArray[slotIndex].selected = !newArray[slotIndex].selected;

    setSlot([...newArray]);
  };
  const handleSubmit = () => {
    const slotData = slot
      .filter((s) => s.selected)
      .map((s, i) => {
        return s.value;
      });

    onFormSubmit(available, slotData);
  };
  return (
    <>
      <div className="form-group " style={{ border: "1px solid #fff" }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <InputLabel id="demo-simple-select-helper-label">
              Select Dates
            </InputLabel>
            <DatePicker
              style={{ left: "186px" }}
              value={dates}
              onChange={setDates}
              multiplesort
              format={format}
              calendarPosition="bottom-center"
              plugins={[<DatePanel />]}
            />
          </Grid>

          {slot?.map((slide, i) => (
            <Grid item xs={3}>
              <div className="custom-control custom-checkbox" key={`row-${i}`}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={slide.id}
                  onChange={handleCheckboxChange}
                  value={slide.value}
                  checked={slide.selected}
                />
                <label className="custom-control-label" htmlFor={slide.id}>
                  {slide.value}
                </label>
              </div>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit()}
          >
            Save
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default AddSlotModal;

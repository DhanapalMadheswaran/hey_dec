import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const format = "DD/MM/YYYY";

function EditSlotModal({ onFormSubmit }) {
  const [available, setAvailable] = useState();
  const [slot, setSlot] = useState({ slots: [] });
  const [dates, setDates] = useState([]);
  //console.log(available);
  const formatDates = (avail_Date) => {
    // eslint-disable-next-line array-callback-return
    let availableDates = [];
    avail_Date.map((date) => availableDates.push(date.format()));
    setAvailable(availableDates);
  };
  useEffect(() => {
    formatDates(dates);
  }, [dates]);
  const handleCheckboxChange = (event) => {
    let newArray = [...slot.slots, event.target.value];

    if (slot.slots.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setSlot({
      slots: newArray,
    });
  };
  return (
    <>
      <div className="form-group " style={{ border: "1px solid #fff" }}>
        edit Modal
        <Grid container spacing={3}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Grid item sm={2}>
              Available Slots
            </Grid>
            <div className="custom-control custom-checkbox ">
              <input
                type="checkbox"
                className="custom-control-input"
                id="slot_1"
                onChange={handleCheckboxChange}
                value="4.30AM - 9.30AM"
              />
              <label className="custom-control-label" htmlFor="slot_1">
                4.30AM - 9.30AM
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="slot_2"
                onChange={handleCheckboxChange}
                value="10:30AM - 3:30PM"
              />
              <label className="custom-control-label" htmlFor="slot_2">
                10:30AM - 3:30PM
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="slot_3"
                onChange={handleCheckboxChange}
                value="3:30PM - 9:30PM"
              />
              <label className="custom-control-label" htmlFor="slot_3">
                3:30PM - 9:30PM
              </label>
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => onFormSubmit(available, slot)}
          >
            Save
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default EditSlotModal;

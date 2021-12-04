import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Toast from "../../../components/toast";
import SlotsService from "../../../services/SlotsService";
const format = "DD/MM/YYYY";
export default function AddSlotsForm() {
  const history = useHistory();
  let slotservice = new SlotsService();
  const [dates, setDates] = useState([]);
  const [available, setAvailable] = useState();

  const [slot, setSlot] = useState({ slots: [] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line no-undef
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

  const onFormSubmit = async () => {
    let objDate = Object.assign({}, available);
    let finalData = {
      vendorID: "6125cdeba9d8b67d2d488057",
      date: available,
      slots: slot.slots,
    };

    try {
      await slotservice.create(finalData).then((res) => {
        Toast("success", "🦄 Slots Added Successfully!");
        //history.push("/add_slots");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <InputLabel id="demo-simple-select-helper-label">
            Select Dates
          </InputLabel>
          <DatePicker
            value={dates}
            onChange={setDates}
            multiplesort
            format={format}
            calendarPosition="bottom-center"
            plugins={[<DatePanel />]}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid item sm={2}>
            Available Slots
          </Grid>
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input"
              id="slot_1"
              value="4.30am-9.30pm"
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor="slot_1">
              4.30am-9.30pm
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="slot_2"
              value="10:30am - 3:30pm"
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor="slot_2">
              10:30am - 3:30pm
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="slot_3"
              value="3:30pm - 9:30pm"
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor="slot_3">
              3:30pm - 9:30pm
            </label>
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={onFormSubmit}>
          Save
        </Button>
      </Grid>
      {/* <ul>
        {dates.map((date, index) => (
          <li key={index}>{date.format()}</li>
        ))}
      </ul> */}
    </div>
  );
}

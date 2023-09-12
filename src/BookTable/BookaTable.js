import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { BookATableForm } from "./BookATableForm";

const BookaTable = () => {
  const [people, setPeople] = useState("");
  const [booking, setBooking] = useState([
    {
      name: "Apoo",
      email: "abc@gmail.com",
      datetime: "12/12/2023",
      people: "people 1",
      specialRequest: "extra cheese",
    },
  ]);
  const [open, setOpen] = useState(0);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(0);
  };

  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  const addBooking = (event) => {
    event.preventDefault();
    let input = event.target;
    console.log(input);
    let newBooking = {
      name: input.username.value,
      email: input.email.value,
      datetime: input.date.value,
      people: input.people.value,
      specialRequest: input.special.value,
    };
    input.people.value = "None";
    let newState = [...booking, newBooking];
    setBooking(newState);
    setOpen(1);
    console.log(booking);
  };

  return (
    <div>
      <div className="table">
        <h2 className="italic-style">Timings: 8am - 12pm</h2>
        {/*<video className="video" width="320" height="240" controls>
        <source
          src="https://vod-progressive.akamaized.net/exp=1694382444~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3768%2F5%2F143842659%2F432971114.mp4~hmac=b460910a3f9c8018cc4efc32813fbb83da67a4de1aaa0dd835a886cd1206e8d6/vimeo-prod-skyfire-std-us/01/3768/5/143842659/432971114.mp4?filename=file.mp4 
"
          type="mp4"
        />
  </video>*/}

        <Snackbar
          open={open === 1}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Table Booked Succesfully !
          </Alert>
        </Snackbar>
        <iframe
          autolpay="true"
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/22lkZIGaj9I?si=mSr-i4637uwM6WBg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="book-table">
          <BookATableForm
            addBooking={addBooking}
            people={people}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookaTable;

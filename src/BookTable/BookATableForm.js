import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const BookATableForm = ({ addBooking, people, handleChange }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "burlywood",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <h3>
        <i>Reservation ---</i>
      </h3>
      <h1>Book a Table Online</h1>

      <form onSubmit={addBooking}>
        <Item>
          <TextField
            className="input"
            id="standard-basic"
            label="Name"
            variant="standard"
            name="username"
            required={true}
          />
        </Item>

        <Item>
          <TextField
            className="input"
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            required={true}
          />
        </Item>

        <Item>
          <TextField type="datetime-local" name="date" required={true} />
        </Item>

        <Item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">people</InputLabel>
            <Select
              className="input"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={people}
              label="No. of People"
              name="people"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>People 1-2</MenuItem>
              <MenuItem value={20}>People 2-3</MenuItem>
              <MenuItem value={30}>People 4+</MenuItem>
            </Select>
          </FormControl>
        </Item>

        <Item>
          <TextField
            className="input"
            id="outlined-multiline-flexible"
            label="Special Request"
            multiline
            maxRows={4}
            name="special"
          />
        </Item>
        <Item>
          <button className="input-btn" type="submit">
            Book Now
          </button>
        </Item>
      </form>
    </div>
  );
};

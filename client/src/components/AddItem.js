import {useState, useEffect} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";

const api_base = "http://127.0.0.1:5000";
const styles = {
  select: {
    marginLeft: 50,
    marginRight: 50,
  },
  Button: {
    backgroundColor: "#000",
  },
};
const AddItem = (props) => {
  const addItem = props.addItem;

  const [state, setState] = useState({
    item: "",
    user: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(api_base + "/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.error("Error: ", err));
  }, []);

  const handleChange = (e) => {
    setState({
      item: document.querySelector("#item").value,
      user: document.querySelector("#user").value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(state);
    setState({item: "", user: ""});
    document.querySelector("#item").value = "";
    document.querySelector("#user").value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="item"
          name="item"
          placeholder="item"
          required
          onChange={handleChange}
          variant="standard"
        />

        {users.length ? (
          <NativeSelect
            style={styles.select}
            inputProps={{
              name: "user",
              id: "user",
            }}
            onChange={handleChange}
            required
          >
            {users.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </NativeSelect>
        ) : (
          <h3>No users</h3>
        )}

        <Button variant="contained" type="submit" style={styles.Button}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddItem;

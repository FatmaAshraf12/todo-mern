import React, {Component, useState} from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
const api_base = "http://127.0.0.1:5000";

const styles = {
  Icon: {
    marginLeft: "auto!important",
    color: "#000",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    marginTop: 10,
    width: 500,
    justifyContent: "space-between",
  },
};

const EditItem = (props) => {
  let {changeEditStatus} = props.changeEditStatus;
  const item = props.item;
  const [state, setState] = useState({
    item: "",
  });

  const handleChange = (e) => {
    setState({
      item: e.target.value,
      id: item._id,
    });
  };

  const editItemApi = (item) => {
    console.log(item);
    axios.put(api_base + `/task/update/${item.id}`, item).then((response) => {
      console.log(response);

      changeEditStatus = false;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItemApi(state);
    document.querySelector("#item").value = "";
  };

  return (
    <Paper elevation={2} style={styles.Paper} key={item._id}>
      <form onSubmit={handleSubmit}>
        <p style={styles.Paragraph}></p>
        <TextField
          type="text"
          id="item"
          name="item"
          placeholder="item"
          required
          onChange={handleChange}
          variant="standard"
          defaultValue={item.item}
        />

        <Button variant="contained" type="submit" style={styles.Button}>
          Edit
        </Button>
      </form>
    </Paper>
  );
};

export default EditItem;

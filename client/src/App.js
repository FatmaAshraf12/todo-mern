import TodoItemss from "./components/TodoItemss";
import {useState, useEffect, Component, Fragment} from "react";
import AddItem from "./components/AddItem";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import EditItem from "./components/EditItem";

const api_base = "http://127.0.0.1:5000";
const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
  },
};
function App() {
  const [state, setState] = useState([]);
  const [edit, setEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState({});
  useEffect(() => {
    getItems();
  }, [changeStatus]);

  const getItems = () => {
    axios
      .get(api_base + "/tasks")
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => console.error("Error: ", err));
  };

  function deleteItem(id) {
    axios
      .delete(api_base + `/tasks/delete/${id}`)
      .then((response) => getItems());
  }
  var status = false;
  function updateItem(item) {
    setEdit(true);
    setItemEdit(item);
  }

  function changeStatus(sts) {
    setEdit(sts);
  }

  function addItem(item) {
    axios.post(api_base + "/task/new", item).then((response) => getItems());
    setEdit(false);
  }

  return (
    <div className="App">
      <Fragment>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper style={styles.Paper}>
              <AddItem addItem={addItem} />
            </Paper>
          </Grid>
          <Grid item xs={12} style={styles.Paper}>
            <TodoItemss
              items={state}
              deleteItems={deleteItem}
              updateItem={updateItem}
            />
            {edit == true ? (
              <EditItem item={itemEdit} changeEditStatus={changeStatus} />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
}

export default App;

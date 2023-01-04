import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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

const TodoItems = (props) => {
  const {items, deleteItems, updateItem} = props;
  let length = items.length;

  const list = length ? (
    items.map((item) => {
      return (
        <Paper elevation={2} style={styles.Paper} key={item._id}>
          <p style={styles.Paragraph}>{item.item}</p>
          <p style={styles.Paragraph}>User : {item.user.name}</p>
          <p style={styles.Paragraph}>
            {item.complete ? <span>done</span> : <span>not yet</span>}
          </p>

          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={() => deleteItems(item._id)}
          >
            <DeleteIcon style={styles.Icon} />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={() => updateItem(item)}
          >
            <EditIcon style={styles.Icon} />
          </IconButton>
        </Paper>
      );
    })
  ) : (
    <tr>
      <td>No items</td>
    </tr>
  );
  return <Grid>{list}</Grid>;
};

export default TodoItems;

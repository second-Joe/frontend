import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const SolutionList = () => {
  const list = [1, 2, 3, 4];
  return (
    <List>
      {list.map((item) => (
        <ListItem>{item}</ListItem>
      ))}
    </List>
  );
};

export default SolutionList;

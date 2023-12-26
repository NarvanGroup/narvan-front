import React from "react";
import classes from "./index.module.scss";

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;

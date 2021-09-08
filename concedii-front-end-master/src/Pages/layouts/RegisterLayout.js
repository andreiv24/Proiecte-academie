import React from "react";
import RegisterForm from "../../components/Registration/RegisterForm";

import Card from "../../components/layout/Card";

import classes from "../styles/RegisterLayout.module.css";

const RegisterLayout = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Card>
          <RegisterForm />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default RegisterLayout;

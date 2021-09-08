import React from "react";
import Card from "../../components/layout/Card";
import AuthForm from "../../components/Auth/AuthForm";
import classes from "../styles/AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <>
      <div className={classes.container}>
        <Card>
          <AuthForm />
        </Card>
      </div>
    </>
  );
};

export default AuthLayout;

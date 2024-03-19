import React from "react";
import Header from "../components/header/Header";
import loginStyle from "../css/login.module.scss";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className={loginStyle.login_main}>
      <div className={loginStyle.account_left}></div>
      <div className={loginStyle.companies}>
        <div>
          <h2>BUSINESS</h2>
          <h1>
            For <span className={loginStyle.comp_title}>Companies</span>
          </h1>
          <p>
            We are the market–leading technical interview platform to identify
            and hire developers with the right skills.
          </p>
          <button>Login</button>
          <div className={loginStyle.create_acc_bottom}>
            <h4>Don't have an account?</h4>
            <strong>
              <Link>Contact</Link>
            </strong>
            <span>or</span>
            <strong>
              <Link> Get free trial</Link>
            </strong>
          </div>
        </div>
      </div>
      {/*  For Developers   */}
      <div className={loginStyle.developers}>
        <div className={loginStyle.login_acc}>
          <h1>
            For <span className={loginStyle.comp_title}>Developers</span>
          </h1>
          <p>
            Join over 21 million developers, practice coding skills, prepare for
            interviews, and get hired.
          </p>
          <NavLink to="/signUp">
            <button>Login</button>
          </NavLink>
        </div>
        <div className={loginStyle.dev_acco}>
          <h4>Don't have an account?</h4>
          <Link>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

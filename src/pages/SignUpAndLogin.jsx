import React, { useState } from "react";
import signLogin from "../css/signUpAndLogin.module.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import googleImg from "../images/google.png";
import gitHubImg from "../images/gitHub.png";
import facebookImg from "../images/facebook.png";
import linkedinImg from "../images/linkedin.png";

import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function SignUp() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username ? e.target.username.value : null;

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up successfully: ", user);
          history("/home");
        })
        .catch((error) => {
          const errorMessage = error.message;
          // alert(errorMessage);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in successfully: ", user);
          history("/home");
        })
        .catch((error) => {
          const errorMessage = error.message;
          // alert(errorMessage);
        });
    }
  };


  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("Google sign-in success: ", user);
        history("/home")();
      })
      .catch((error) => {
        // Handle errors here.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleGitHubSignUp = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("GitHub sign-in success: ", user);
        history("/home")();
      })
      .catch((error) => {
        // Handle errors here.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };



  return (
    <div className={signLogin.auth_box}>
      <div className={signLogin.logo}>
        <img
          src="https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg"
          alt=""
        />
      </div>
      <div className={signLogin.auth_cotegory_text}>
        <h2 className={signLogin.auth_category_title}>For Developers</h2>
        <p className={signLogin.auth_category_subtitle}>
          Practice coding, prepare for interviews, and get hired.
        </p>
      </div>

      <div className={signLogin.userForms}>
        <div className={signLogin.auth_signLogin}>
          <div
            className={
              login === false ? signLogin.activeColor : signLogin.pointer
            }
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>
          <div
            className={
              login === true ? signLogin.activeColor : signLogin.pointer
            }
            onClick={() => setLogin(true)}
          >
            SignIn
          </div>
        </div>
        <form
          className={signLogin.form_user}
          onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
        >
          {login === false && (
            <div className={signLogin.form_item}>
              <FaRegUser />
              <input
                name="username"
                type="text"
                placeholder="First & Last name"
              />
            </div>
          )}
          <div className={signLogin.form_item}>
            <MdOutlineMail />
            <input name="email" placeholder="Email" />
          </div>
          <div className={signLogin.form_item}>
            <RiLockPasswordLine />
            <input name="password" type="text" placeholder="Password" />
          </div>
          <div className={signLogin.form_checkbox}>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              I agree to HackerRank's <span>Terms of Service </span> and{" "}
              <span>Privacy Policy</span>.
            </label>
          </div>
          <button className={signLogin.btn}>
            {login ? "SignIn" : "SignUp"}
          </button>
        </form>
        <div className={signLogin.social_local}>
          <div className={signLogin.social_local_label}>
            <span className={signLogin.label_text}>or connect with</span>
          </div>
          <div className={signLogin.social_media}>
            <ul>
              <li onClick={handleGoogleSignUp}>
                <img src={googleImg} alt="" />
              </li>
              <li onClick={handleGitHubSignUp}>
                <img src={gitHubImg} alt="" />
              </li>
              <li>
                <img src={facebookImg} alt="" />
              </li>
              <li>
                <img src={linkedinImg} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

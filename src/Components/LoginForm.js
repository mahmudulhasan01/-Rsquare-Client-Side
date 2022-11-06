import React from "react";
import "./loginFrom.css";

const LoginForm = () => {
  return (
    <div className="login_Form_Container">
      <div className="login_From_Content">
        <h1>Welcome back!</h1>
        <p>Please Enter your details.</p>
        <div className="">
          <form action="">
            <label htmlFor="">Email Address</label>
            <input type="email" name="" id="" placeholder="Jhonathan@abc.com" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </form>

          {/* <form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
  <input type="submit" value="Submit">
</form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

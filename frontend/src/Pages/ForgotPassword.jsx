import { useState } from "react";
import "../styles/ForgotPassword.css";  // Import the CSS file for styling

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Forgot Password</h2>
      <p className="forgot-password-text">
        Enter your email address below and we will send you a link to reset your password.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="forgot-password-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="forgot-password-button" onClick={handleReset}>
        Reset Password
      </button>
    </div>
  );
}

export default ForgotPassword;

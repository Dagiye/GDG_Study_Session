import { useState } from "react";
import "./styles.css";
const UserCard = ({ name, email, age, bgColor = "#f3f4f6" }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="user-card">
      <h2 className="user-name">  {name}</h2>
      <p className="user-email"> {email}</p>
      <p className="user-age">Age: {age}</p>
    </div>
  );
};

export default UserCard;

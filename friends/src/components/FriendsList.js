import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./../utilities/axiosWithAuth";

export default function FriendsList() {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setFriendData(res.data);
      })
      .catch((err) => console.log(err));
  }, [friendData]);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

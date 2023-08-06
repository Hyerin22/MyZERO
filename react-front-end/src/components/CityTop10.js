import React from "react";
import "../styles/components/CityTop10.scss";

import { fakeTop10 } from "../mockdata/fakeData";

export default function CityTop10() {

  return (
    <div className="top10-cont">
      {/* <div className="ranking">
        <p>1st</p>
        <p>2nd</p>
        <p>3rd</p>
      </div> */}
      {fakeTop10.length > 0 &&
        fakeTop10.map((user) => (
          <div className="top10-info" key={user.id}>
            <p>
              {user.username.slice(0, 3) + "*".repeat(user.username.length - 3)}
            </p>
            <p>{user.points} pt</p>
          </div>
        ))}
    </div>
  );
}

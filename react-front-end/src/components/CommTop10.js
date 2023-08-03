import React from "react";
import "../styles/components/CommTop10.scss";

import { fakeTop10 } from "../mockdata/fakeData";

export default function CommTop10() {
  // const fakeData = [
  // {
  //   id: 1,
  //   name: "John Doe",
  //   username: "johndoe",
  //   points: 1000,
  // },
  // {
  //   id: 2,
  //   name: "Jane Smith",
  //   username: "janesmith",
  //   points: 1500,
  // },
  // {
  //   id: 3,
  //   name: "Bob Johnson",
  //   username: "bobjohnson",
  //   points: 800,
  // },
  // {
  //   id: 4,
  //   name: "Alice Brown",
  //   username: "alicebrown",
  //   points: 1200,
  // },
  // {
  //   id: 5,
  //   name: "Michael Lee",
  //   username: "michaellee",
  //   points: 1800,
  // },
  // {
  //   id: 6,
  //   name: "Emily Chen",
  //   username: "emilychen",
  //   points: 950,
  // },
  // {
  //   id: 7,
  //   name: "David Kim",
  //   username: "davidkim",
  //   points: 1400,
  // },
  // {
  //   id: 8,
  //   name: "Sophia Nguyen",
  //   username: "sophianguyen",
  //   points: 700,
  // },
  // {
  //   id: 9,
  //   name: "James Wilson",
  //   username: "jameswilson",
  //   points: 1600,
  // },
  // {
  //   id: 10,
  //   name: "Olivia Davis",
  //   username: "oliviadavis",
  //   points: 1100,
  // },
  // ];

  return (
    <div className="top10-cont">
      <div className="ranking">
        <p>1st</p>
        <p>2nd</p>
        <p>3rd</p>
      </div>
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

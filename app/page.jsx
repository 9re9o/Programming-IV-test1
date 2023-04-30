import React from "react";
import styles from './../styles/globals.css';
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div >
        <div className="container">
          <Image id="avatar-profile" src="/../public/img/photo.jpg" alt="avatar-profile" width={200} height={150}></Image>
        </div>
        <div className="contInfo">
          <h2> Gregory Porfolio </h2>
          <p>Hello this is my pofolio page</p>
          <p>actualy im study ing. System</p>
          <h5>Experience</h5>
          <ul>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </>
  );
}

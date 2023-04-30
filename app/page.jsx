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
          <p>im student ing. Systems</p>
          <p>this is a test for mine skills develope</p>
          <h3>Hobbies </h3>
          <p>Play video games</p>
          <p>Work hardly</p>
          <p>Connect with new others persons </p>
          <h3>Experience</h3>
          <ul>
            <li>Java</li>
            <li>JavasCript</li>
            <li>C++</li>
            <li>Python</li>
            <li>TypesCript</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </>
  );
}

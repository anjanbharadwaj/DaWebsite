import React, { Component } from "react";
import { useState, useEffect } from "react";
import PianoKey from "../PianoKey/PianoKey";
import styles from "../Piano/Piano.module.css";
import useSound from "use-sound";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Piano = () => {
  const filePathA: string = "/audio/letsgo.mp3";
  const [playA] = useSound(filePathA, { volume: 0.25 });

  const filePathB: string = "/audio/ha.mp3";
  const [playB] = useSound(filePathB, { volume: 0.25 });

  const filePathC: string = "/audio/yeahyeah.mp3";
  const [playC] = useSound(filePathC, { volume: 0.25 });

  const filePathD: string = "/audio/ipullup.mp3";
  const [playD] = useSound(filePathD, { volume: 0.25 });
  const handleKeyPress = (key: string) => {
    switch (key) {
      case "a":
        playA();
        break;
      case "b":
        playB();
        break;
      case "c":
        playC();
        break;
      case "d":
        playD();
        break;
    }
    if (key === "a") {
      playA();
    }
  };

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={["a", "b", "c", "d"]}
        onKeyEvent={(key: any, e: any) => handleKeyPress(key)}
      />
      <div className={styles.container}>
        <PianoKey keyToPress={"a"} soundEffect={"letsgo"}></PianoKey>
        <PianoKey keyToPress={"b"} soundEffect={"ha"}></PianoKey>
        <PianoKey keyToPress={"c"} soundEffect={"yeahyeah"}></PianoKey>
        <PianoKey keyToPress={"d"} soundEffect={"ipullup"}></PianoKey>
      </div>
      <div className={styles.footerContainer}>
        <p>Created with 🎶 and 🥁 by Anjan Bharadwaj</p>
        <p>
          Check out this project on{" "}
          <a href="https://github.com/anjanbharadwaj/DaWebsite">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Piano;

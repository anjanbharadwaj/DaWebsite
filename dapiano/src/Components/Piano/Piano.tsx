import React, { Component } from "react";
import PianoKey from "../PianoKey/PianoKey";
import styles from "../Piano/Piano.module.css";
const Piano = () => {
  return (
    <div>
      <PianoKey soundEffect={"lets go"}></PianoKey>
      <PianoKey soundEffect={"hah"}></PianoKey>
      <PianoKey soundEffect={"yeah"}></PianoKey>
      <PianoKey soundEffect={"no cap"}></PianoKey>
    </div>
  );
};

export default Piano;

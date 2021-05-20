import React, { Component, useEffect } from "react";
import useSound from "use-sound";
import styles from "../PianoKey/PianoKey.module.css";
enum TileType {
  WHITE = 1,
  BLACK = 2,
}
interface KeyProps {
  soundEffect: string;
  keyToPress?: string;
  tileType: TileType;
}

const PianoKey = (props: KeyProps) => {
  let pianoOptions = {
    volume: 0.25,
    interrupt: true,
  };
  const filePath: string = "/audio/" + props.soundEffect + ".mp3";
  const [play] = useSound(filePath, pianoOptions);
  const playWrapper = (event) => {
    event.currentTarget.blur();
    const element = event.currentTarget;
    element.classList.toggle("mystyle");
    play();
  };
  let tileStyle = styles.whiteTile;
  if (props.tileType === TileType.BLACK) {
    tileStyle = styles.blackTile;
  }

  return (
    <button className={tileStyle} onClick={(e) => playWrapper(e)}>
      {props.keyToPress}
    </button>
  );
  // return <h1>{props.soundEffect}</h1>;
};

export default PianoKey;

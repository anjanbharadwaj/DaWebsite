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
    volume: 0.5,
    interrupt: false,
  };
  const filePath: string = "/audio/" + props.soundEffect + ".mp3";
  const [play] = useSound(filePath, { volume: 0.25 });
  let tileStyle = styles.whiteTile;
  if (props.tileType === TileType.BLACK) {
    tileStyle = styles.blackTile;
  }
  // const handleKeyPress = (event: any) => {
  //   if (event.key === props.keyToPress) {
  //     console.log(event.key, props.keyToPress);
  //     play();
  //   }
  // };
  // useEffect(() => {
  //   console.log("running use effect");
  //   window.addEventListener("keypress", handleKeyPress);
  // }, []);

  // window.addEventListener("keypress", (event: any) => {
  //   if (event.key === props.keyToPress) {
  //     console.log(event.key, props.keyToPress);
  //     play();
  //   }
  // });
  // const filePath: string = "/audio/letsgo.mp3";
  // const [play] = useSound(filePath, { volume: 0.5 });
  // React.useEffect(() => {
  //   window.addEventListener("keypress", (event) => {
  //     if (event.key === "a") {
  //       console.log("enter press here! ");
  //       play();
  //     }
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      <button className={tileStyle} onClick={() => play()}>
        {props.keyToPress}
      </button>
    </div>
  );
  // return <h1>{props.soundEffect}</h1>;
};

export default PianoKey;

import React, { Component } from "react";

interface KeyProps {
  soundEffect: string;
  keyToPress?: string;
}

const PianoKey = (props: KeyProps) => {
  return <h1>{props.soundEffect}</h1>;
};

export default PianoKey;

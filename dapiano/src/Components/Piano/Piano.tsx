import PianoKey from "../PianoKey/PianoKey";
import styles from "../Piano/Piano.module.css";
import useSound from "use-sound";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Piano = () => {
  let pianoOptions = {
    volume: 0.25,
    interrupt: true,
  };
  const filePathA: string = "/audio/letsgo.mp3";
  const [playA] = useSound(filePathA, pianoOptions);

  const filePathB: string = "/audio/ha.mp3";
  const [playB] = useSound(filePathB, pianoOptions);

  const filePathC: string = "/audio/yeahyeah.mp3";
  const [playC] = useSound(filePathC, pianoOptions);

  const filePathD: string = "/audio/ipullup.mp3";
  const [playD] = useSound(filePathD, pianoOptions);

  const filePathE: string = "/audio/nocap.mp3";
  const [playE] = useSound(filePathE, pianoOptions);

  const filePathF: string = "/audio/youknowitsbaby.mp3";
  const [playF] = useSound(filePathF, pianoOptions);

  const filePathG: string = "/audio/ha2.mp3";
  const [playG] = useSound(filePathG, pianoOptions);

  const filePathH: string = "/audio/hot.mp3";
  const [playH] = useSound(filePathH, pianoOptions);

  const filePathI: string = "/audio/okay.mp3";
  const [playI] = useSound(filePathI, pianoOptions);
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
      case "e":
        playE();
        break;
      case "f":
        playF();
        break;
      case "g":
        playG();
        break;
      case "h":
        playH();
        break;
      case "i":
        playI();
        break;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.piano}>
        <KeyboardEventHandler
          handleKeys={["a", "b", "c", "d", "e", "f", "g", "h", "i"]}
          onKeyEvent={(key: any, e: any) => handleKeyPress(key)}
        />
        <PianoKey
          tileType={1}
          keyToPress={"a"}
          soundEffect={"letsgo"}
        ></PianoKey>
        <PianoKey
          tileType={2}
          keyToPress={"f"}
          soundEffect={"youknowitsbaby"}
        ></PianoKey>
        <PianoKey tileType={1} keyToPress={"b"} soundEffect={"ha"}></PianoKey>
        <PianoKey tileType={2} keyToPress={"g"} soundEffect={"ha2"}></PianoKey>
        <PianoKey
          tileType={1}
          keyToPress={"c"}
          soundEffect={"yeahyeah"}
        ></PianoKey>
        <PianoKey tileType={2} keyToPress={"h"} soundEffect={"hot"}></PianoKey>
        <PianoKey
          tileType={1}
          keyToPress={"d"}
          soundEffect={"ipullup"}
        ></PianoKey>
        <PianoKey tileType={2} keyToPress={"i"} soundEffect={"okay"}></PianoKey>
        <PianoKey
          tileType={1}
          keyToPress={"e"}
          soundEffect={"nocap"}
        ></PianoKey>
      </div>
      {/* <div className={styles.blackContainer}>
        
      </div> */}
    </div>
  );
};
export default Piano;

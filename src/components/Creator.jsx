import { useState } from "react";
import Air from "../assets/img/elements/air.svg";
import Earth from "../assets/img/elements/earth.svg";
import Fire from "../assets/img/elements/fire.svg";
import Water from "../assets/img/elements/water.svg";
import Left from "../assets/img/arrow-left.svg";
import Right from "../assets/img/arrow-right.svg";
import Attack from "../assets/img/attack.svg";
import Defense from "../assets/img/defense.svg";

const imgArray = [Air, Earth, Fire, Water];

function Creator(props) {
  const [currentImg, setCurrentImg] = useState(0);
  const [name, setName] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);

  function moveRight() {
    setCurrentImg((currentImg + 1) % imgArray.length);
  }

  function moveLeft() {
    setCurrentImg((currentImg - 1 + imgArray.length) % imgArray.length);
  }

  function addEntry(event) {
    event.preventDefault();

    const newMonster = {
      name: name,
      element: imgArray[currentImg],
      attack: attack,
      defense: defense,
    };

    props.addMonster(newMonster);

    setName("");
    setAttack("");
    setDefense("");
  }

  return (
    <div className="monster-creator__wrapper">
      <div className="monster-creator__element-selector">
        <img
          src={Left}
          alt="previous"
          className="monster-creator__arrow monster-creator__previous"
          onClick={moveLeft}
        />
        <img
          src={imgArray[currentImg]}
          alt="element"
          className="monster-creator__element"
        />
        <img
          src={Right}
          alt="next"
          className="monster-creator__arrow monster-creator__next"
          onClick={moveRight}
        />
      </div>
      <form className="monster-creator__form" onSubmit={addEntry}>
        <input
          type="text"
          placeholder="Name"
          className="monster-creator__input monster-creator__input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="monster-creator__attribute-wrapper">
          <img
            src={Attack}
            alt="attack"
            className="monster-creator__attribute-img"
          ></img>
          <input
            type="number"
            placeholder="0"
            className="monster-creator__input"
            value={attack}
            onChange={(e) => setAttack(e.target.value)}
          />
          <img
            src={Defense}
            alt="defense"
            className="monster-creator__attribute-img"
          ></img>
          <input
            type="number"
            placeholder="0"
            className="monster-creator__input"
            value={defense}
            onChange={(e) => setDefense(e.target.value)}
          />
        </div>
        <div className="monster-creator__submit-wrapper">
          <button type="submit" className="monster-creator__submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Creator;

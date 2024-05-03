import React from "react";
import Attack from "../assets/img/attack.svg";
import Defense from "../assets/img/defense.svg";
import Delete from "../assets/img/trash-can.svg";

function List(props) {
  return (
    <div className="monsters-list__wrapper">
      {props.monsters.map((monster, index) => (
        <div key={index} className="monster-item__wrapper">
          <img
            src={monster.element}
            alt="element"
            className="monster-item__img"
          />
          <div className="monster-item__info-wrapper">
            <p className="monster-item__text monster-item__name">
              {monster.name}
            </p>
            <div className="monster-item__info-stats-wrapper">
              <img
                src={Attack}
                alt="attack"
                className="monster-item__img-stat monster-item__img-attack"
              ></img>
              <p className="monster-item__text monster-item__attack">
                {monster.attack}
              </p>
              <img
                src={Defense}
                alt="defense"
                className="monster-item__img-stat monster-item__img-defense"
              ></img>
              <p className="monster-item__text monster-item__defense">
                {monster.defense}
              </p>
            </div>
          </div>
          <button
            className="monster-item__delete-btn"
            onClick={() => props.deleteMonster(index)}
          >
            <img
              src={Delete}
              alt="delete"
              className="monster-item__delete-img"
            ></img>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;

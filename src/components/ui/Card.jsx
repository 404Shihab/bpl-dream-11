import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa6";

const Card = ({player}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
          <div className="card bg-base-100 shadow-sm flex-1">
            <figure className="h-80 w-full">
              <img
                className="h-full w-full object-cover"
                key={player.id}
                src={player.playerImg}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser /> {player.playerName}
              </h2>
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-between items-center gap-2">
                  <FaFlag />
                  <p>{player.playerCountry}</p>
                </div>
                <button className="btn btn-outline btn-secondary">{player.playerType}</button>
              </div>
              <div className="divider"></div>

              <h2 className="font-bold">Rating {player.rating}</h2>
              <div className="flex justify-between gap-4 font-bold">
                <p>{player.batingStyle}</p>
                <p className="text-right">{player.bowlingStyle}</p>
              </div>
              <div className="card-actions justify-between items-center">
                <p className="font-semibold">Price: ${player.price}</p>
                <button
                onClick={()=> setIsSelected(true)}
                disabled={isSelected ? true : false}
                 className="btn">{isSelected=== true ? "Selected":  "Choose Player"}</button>
              </div>
            </div>
          </div>
    );
};

export default Card;
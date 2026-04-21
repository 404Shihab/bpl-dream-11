import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Card = ({player, setCoin, coin,setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer =() => 
        {
            let newCoin = coin - player.price;
            if(newCoin >=0 ){
                setCoin(coin - player.price);
            }else{
                toast.error("Not enough coin to purchase this player")
                return;
            }
            
            toast.success(`${player.playerName} is selected`);
            setIsSelected(true);
            setSelectedPlayers([...selectedPlayers,player]);


        }
    return (
          <div className="card bg-base-100 shadow-sm flex-1">
            <figure className="h-80 w-full">
              <img
                className="h-full w-full object-cover"
                key={player.id}
                src={player.playerImg}
                alt={player.playerName}
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
                <button className="btn btn-soft btn-secondary">{player.playerType}</button>
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
                onClick={handleChoosePlayer}
                disabled={isSelected ? true : false}
                 className="btn btn-outline btn-primary">{isSelected=== true ? "Selected":  "Choose Player"}</button>
              </div>
            </div>
          </div>
    );
};

export default Card;
import React from "react";
import Card from "../ui/Card";

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
  // console.log(players);
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
        // console.log(player);
        return (
          <Card key={player.id} player={player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          ></Card>
        );
      })}
        </div>
    </div>
  );
};

export default AvailablePlayers;

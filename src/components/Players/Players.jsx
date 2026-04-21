import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise , setCoin, coin}) => {
    const players = use(playerPromise);

    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='max-w-7xl mx-auto px-4 my-8 md:my-[60px]'>

            <div className='flex flex-col md:flex-row justify-between gap-4 items-center mb-6 md:mb-[20px] text-center md:text-left'>
                

                { selectedType === "available" ? 
                    <h2 className='font-bold text-xl sm:text-2xl md:text-3xl'>Available Players</h2> : 
                    <h2 className='font-bold text-xl sm:text-2xl md:text-3xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>
                }

                <div className='inline-flex'>
                    <button
                        onClick={()=> setSelectedType("available")}
                        className={`btn text-sm md:text-base px-4 md:px-6 ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-transparent border border-gray-300"} rounded-r-none rounded-l-xl transition-all`}>
                        Available
                    </button>
                    <button 
                        onClick={()=> setSelectedType("selected")}
                        className={`btn text-sm md:text-base px-4 md:px-6 ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-transparent border border-gray-300 border-l-0"} rounded-l-none rounded-r-xl transition-all`}>
                        Selected({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {selectedType === "available" ? 
                <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} /> : 
                <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} />
            }
        </div>
    );
};

export default Players;
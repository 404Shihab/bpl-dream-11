import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers,coin, setCoin}) => {
    const handleSelectedDeletePlayer=(player) => {
        console.log(player);
        const filteredPlayers = selectedPlayers.filter((selectedPlayers) => selectedPlayers.playerName != player.playerName
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price)
    };
    console.log(selectedPlayers);
    return (
        <div>
            <div className='space-y-4'>
            {selectedPlayers.length===0 ? 
            <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>No players selected yet</h2>
                <p>Go to Available tab to select players</p>
            </div>
            : selectedPlayers.map((player) => {
                return <div key={player.id} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                    <div className='flex items-center gap-5'>
                        <img src={player.playerImg} alt={player.playerName} className='h-[75px] w-auto rounded-md' />
                        <div>
                            <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser />{player.playerName}</h2>
                            <p>{player.playerType}</p>
                        </div>
                    </div>

                    <div>
                        <button className='btn text-red-500 text-xl
                        ' onClick={()=>handleSelectedDeletePlayer(player)}><AiFillDelete /> </button>
                    </div>
                </div>
            })}
        </div>
        </div>
    );
};

export default SelectedPlayers;
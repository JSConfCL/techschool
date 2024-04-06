'use client';

import React, { useState } from 'react';

const ScoreRectangle = ({playerName} : {playerName: string}) => {
    const [itemsPickedUp, setItemsPickedUp] = useState(0);

    window.addEventListener('ItemPickedUp', () => {
        setItemsPickedUp(itemsPickedUp + 1);
    });

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40%',
            }}
        >
            <div className="row-span-1"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '100px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #000000',
                    borderRadius: '5px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000000',
                }}
            >
                {itemsPickedUp}
            </div>

            {/* </div> */}
            <div className="row-span-1">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={() => {
                        const score = itemsPickedUp;
                        console.log('Submitting score:', score);
                        const apiUrl = process.env.RANKING_SERVICE_URL || 'http://localhost:3001/api/ranking';
                        fetch(apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ score, player: playerName }),
                        });
                    }}
                >
                    Submit Score
                </button>
            </div>
        </div>

    );
};

export default ScoreRectangle;
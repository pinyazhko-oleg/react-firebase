import React, { useState, useEffect } from 'react';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=> {
        console.log('first render', seconds);
        if (isRunning) {
            const id = window.setInterval(() => {
                console.log('tick', seconds)
                setSeconds(seconds => seconds + 1)
            }, 1000);
            return ()=> window.clearInterval(id);
        }
        return undefined;
    }, [isRunning]);

    return (
        <div>
            <button onClick={()=>setSeconds(seconds+1)}>inc seconds</button>
            <div>
                <div>
                    {seconds}
                </div>
            </div>
            <div>
                { isRunning
                   ?(<button onClick={() => {setIsRunning(false)}}>
                        Pause
                    </button>)
                    :(< button onClick={()=> {setIsRunning(true)}}>
                        Play
                    </button>)
                }
                <button disabled={!isRunning} onClick={()=> {setIsRunning(false);
                                        setSeconds(0)
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Timer;
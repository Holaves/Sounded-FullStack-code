import React, { ChangeEvent } from 'react';

interface TrackProgressProps{
    left: number;
    right: number;
    type: "duration" | "volume";
    onChange: (e: ChangeEvent) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange, type}) => {
   return(
       <div style={{display: 'flex'}}>
            <input
                type='range'
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            {
                type === "duration" ?
                <div style={{marginLeft: '5px'}}>{Math.floor(left / 60) }:{left % 60 < 10 && 0}{left % 60} / {Math.floor(right / 60)}:{right % 60}</div>
                :
                <div>{left} / {right}</div>

            }
       </div>
   );
};


export default TrackProgress;
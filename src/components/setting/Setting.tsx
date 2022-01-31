import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";

type SettingType = {
    onChangeCounterStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCounterEnd: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandlerSet: () => void
    endCounter: number
    startCounter: number
}

export const Setting = ({onChangeCounterStart, onChangeCounterEnd, onClickHandlerSet, startCounter, endCounter}: SettingType) => {


    return (
        <div className={"setting"}>

                <div className={"blockInput"}>
                    <div className={"blockText"}>Max
                        <input type="number"
                               className={startCounter === endCounter || endCounter < 0 ? "inputError" : "input"}
                               onChange={onChangeCounterEnd}
                                value={endCounter}
                        />
                    </div>
                    <div className={"blockText"}>Min
                        <input type="number"
                               className={startCounter === endCounter || startCounter > endCounter || startCounter < 0 ? "inputError" : "input"}
                               onChange={onChangeCounterStart}
                               value={startCounter}
                        />
                    </div>
                </div>
                <Button name={"Set"}
                        callBack={onClickHandlerSet}
                        disable={startCounter === endCounter || startCounter > endCounter || startCounter < 0 || endCounter < 0}/>

        </div>
    );
};


import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Setting} from "./components/setting/Setting";
import {Counter} from "./components/counter/Counter";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {


    const [counter, setCounter] = useState(0)

    const [startCounter, setStartCounter] = useState(0)

    const [endCounter, setEndCounter] = useState<number>(0)

    const [flag, setFlag] = useState(true)

    const changeCounter = () => {
        setFlag(false)
    }

    useEffect(() => {
        let counterValueStart = localStorage.getItem("counterValue")
        if (counterValueStart) {
            let newCounterValueStart = JSON.parse(counterValueStart)
            setStartCounter(newCounterValueStart)
            setCounter(newCounterValueStart)
        }
    }, [])

    useEffect(() => {
        let counterValueEnd = localStorage.getItem("counterValueEnd")
        if (counterValueEnd) {
            let newCounterValueStart = JSON.parse(counterValueEnd)
            setEndCounter(newCounterValueStart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(startCounter))
    }, [startCounter])

    useEffect(() => {
        localStorage.setItem("counterValueEnd", JSON.stringify(endCounter))
    }, [endCounter])


    const onClickHandler = () => {
        if (counter < endCounter)
            setCounter(counter + 1)
    }

    const onClickHandlerDel = () => {
        setCounter(startCounter)
    }


    const onChangeCounterStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartCounter(+e.currentTarget.value)
    }

    const onChangeCounterEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setEndCounter(+e.currentTarget.value)
    }

    const onClickHandlerSet = () => {
        setCounter(startCounter)
        setFlag(true)
    }

    return (


        <div className="App">
            {flag ? (
                <Counter
                    changeCounter={changeCounter}
                    endCounter={endCounter}
                    counter={counter}
                    onClickHandler={onClickHandler}
                    onClickHandlerDel={onClickHandlerDel}
                    startCounter={startCounter}
                />
            ) : (
                <Setting
                    startCounter={startCounter}
                    endCounter={endCounter}
                    onChangeCounterStart={onChangeCounterStart}
                    onChangeCounterEnd={onChangeCounterEnd}
                    onClickHandlerSet={onClickHandlerSet}
                />
            )}


        </div>

    );
}

export default App;

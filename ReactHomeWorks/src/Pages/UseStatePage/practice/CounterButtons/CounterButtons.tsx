interface CounterButtonsProps {
    firstValue: number
    secondValue: number
    thirdValue: number
    fourthValue: number
    fivethValue: number
    sixthValue: number
    seventhValue: number
    eightValue: number
    state: number
    setState: (count: number) => void
}

const CounterButtons = ({
                            firstValue,
                            secondValue,
                            thirdValue,
                            fourthValue,
                            fivethValue,
                            sixthValue,
                            seventhValue,
                            eightValue,
                            state,
                            setState
                        }: CounterButtonsProps) => {
    return (
        <>
            <button onClick={() => setState(state - firstValue)}>-{firstValue}</button>
            <button onClick={() => setState(state - secondValue)}>-{secondValue}</button>
            <button onClick={() => setState(state - thirdValue)}>-{thirdValue}</button>
            <button onClick={() => setState(state - fourthValue)}>-{fourthValue}</button>
            <br/>
            <button onClick={() => setState(state + 1)}>{state}</button>
            <br/>
            <button onClick={() => setState(state + fivethValue)}>{fivethValue}</button>
            <button onClick={() => setState(state + sixthValue)}>{sixthValue}</button>
            <button onClick={() => setState(state + seventhValue)}>{seventhValue}</button>
            <button onClick={() => setState(state + eightValue)}>{eightValue}</button>
        </>
    )
}
export default CounterButtons;

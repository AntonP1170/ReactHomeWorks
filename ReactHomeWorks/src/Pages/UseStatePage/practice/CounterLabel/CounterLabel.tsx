interface ICounterLabelProps {
    count: number;
}

const CounterLabel = ({count}: ICounterLabelProps) => {

    return (
        <h2>{count}</h2>
    )
}
export default CounterLabel;
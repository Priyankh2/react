import useCustomcounter from "./useCustomcounter";
function Counter(){
    const {count,increment,decrement} = useCustomcounter(0);
    return (<>
    <h1>{count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>);
}
export default Counter;
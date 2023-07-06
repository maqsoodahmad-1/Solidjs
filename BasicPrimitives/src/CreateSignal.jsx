import{createEffect, createMemo, createSignal} from "solid-js"

const [count, setCount]= createSignal(0);

createEffect(() => {
    console.log("The value of the function has been changed :" ,count())
})

function increment(){
    setCount(count() + 1)
}

function decrement(){
    setCount(count() -1)
}

function doubleValue(){ 
    const double = createMemo(()=>count() * 2 )
    return double
}

export function Counter(){
    return(
        <>
        <button onClick={increment}>+</button>
        <br />
        <span>This is the Base Value:{count()}</span>
        <br />
        <span>This is the Doubled Value {doubleValue}</span>
        <br />
        <button onClick={decrement}>-</button>
        </>
    )
}
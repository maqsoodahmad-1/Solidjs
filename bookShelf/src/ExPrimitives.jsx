import { createSignal } from "solid-js";

function Primitives(){
    const [count, setCount]= createSignal(2);
    const increment = ()=>{
    setCount(count()+1)
    }
    return(
        <div style="height:50px; color:green;"> 
            Current Count:{count()}
            <br/>
            <button onClick={increment} style="height:20px; color:green; margin:10px;border-radius:30px">INCREASE</button>
        </div>
    )
}
export default Primitives;
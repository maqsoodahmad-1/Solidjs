import { For } from "solid-js";
const books=["The C Programming","Easy coders lang", "The reality of india"];
function ForComponent(){
    return(<>
    <For each={books}>{(book)=>{
        return <li>{book}</li>
    }}</For>
    </>)
}
export default ForComponent
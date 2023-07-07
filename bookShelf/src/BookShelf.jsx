// import { Properties } from "solid-js/web";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { Show, createSignal } from "solid-js";
const initialBooks=[
    {title:"Code Complete",author:"Steve McConnel"},
    {title:"The Hobbit", author:"J.R.R. Tolkie"},
    {title:"Living a Faminist Life",author:"Sarah Ahmad"}
];
function BookShelf(Properties){
    const[books,addBooks]=createSignal(initialBooks);
    const[showForm, setShowForm]=createSignal(false);
    const toggleForm = ()=>setShowForm(!(showForm()))
    return(
        <>
        <h1> {Properties.name}'s BookShelf</h1>
        <BookList books={books()}/>
        <Show when={showForm()} 
        fallback={<button onClick={toggleForm}>Add a Book</button>}>
        <AddBook addBooks={addBooks}/>
        <button onClick={toggleForm}>Finsih Adding Books</button>
        </Show>
        </>
    )
}
export default BookShelf
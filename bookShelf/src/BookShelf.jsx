import { Properties } from "solid-js/web";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { createSignal } from "solid-js";
const initialBooks=[
    {title:"Code Complete",author:"Steve McConnel"},
    {title:"The Hobbit", author:"J.R.R. Tolkie"},
    {title:"Living a Faminist Life",author:"Sarah Ahmad"}
];
function BookShelf(Properties){
    const[books,addBooks]=createSignal(initialBooks);
    return(
        <>
        <h1>Hello {Properties.name}'s BookShelf</h1>
        <BookList books={books()}/>
        <AddBook addBooks={addBooks}/>
        </>
    )
}
export default BookShelf
import { Show, createResource, createSignal,For } from "solid-js";
import searchBooks from "./searchBooks";

// const emptyBook={title:"",author:""};



function AddBook(props){

    // const [newBook, setNewbook]=createSignal(emptyBook);

    // const addBook =(event)=>{
    //     event.preventDefault();
    //     props.addBooks((books) => [...books,newBook()]);
    //     setNewbook(emptyBook);

    const [input,setInput] = createSignal("");
    const [query,setQuery] = createSignal("");
    const [data] = createResource(query,searchBooks);

    return(
        <>
     <form >
           <div>
                {/* <label for="title">Book Name</label> */}
                <label for="title">Search Books</label>
                <input style="margin-left:6px;"
                id="title" 
                value={input()} 
                onInput={(e)=>{
                    setInput(e.currentTarget.value)
                }}
                // value={newBook().title} 
                // onInput={(e)=>{
                    //     setNewbook({...newBook(),title:e.currentTarget.value})
                    // }}
                    />
            </div>

            {/* <div>
                <label for="author">Author</label>
                <input type="text" id="author" style="margin-left:30px;" 
                value={newBook().author} 
                onInput={(e)=>{
                    setNewbook({...newBook(),author:e.currentTarget.value})
                }}
                
                />
            </div> */}
            {/* <button type="submit" onclick={addBook}>Add Book</button> */}
            <button 
            type="submit" 
            onclick={(e) => 
                {
                    e.preventDefault();
                    setQuery(input());
                }}
                >
                Search
            </button>
     </form>
     {/* conditional Rendering */}
     <Show when={!data.loading} fallback={<>Searching....</>}>
        <ul>
                <For each={data()}>
                    {(book) => (
                        <li>{book.title} by {book.author}{""}
                    <button 
                    areia-label={`Add ${book.title} by ${book.author} to the bookshelf`} 
                    onClick={(e) => {
                        e.preventDefault();
                        props.addBooks((books) => [...books,book]);
                    }}
                    >
                        Add
                    </button>
                    </li>
                    )}
                </For>
        </ul>
     </Show>
  </>
    );
}
export default AddBook




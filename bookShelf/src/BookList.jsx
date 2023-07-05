import { For, createSignal } from "solid-js";
import { style } from "solid-js/web"

function BookList(props){
    
    // Lifting the state up
    // const initialBooks=[
    //     {title:"Code Complete",author:"Steve McConnel"},
    //     {title:"The Hobbit", author:"J.R.R. Tolkie"},
    //     {title:"Living a Faminist Life",author:"Sarah Ahmad"}
    // ];
    // const[books,addBooks]=createSignal(initialBooks);


    const totalBooks= () => props.books.length
    return(
        <>
             <h1>Number of Books({totalBooks()})</h1>
         <ul>
           {/* <li>
                {books()[0].title}
                <span style={{"font-style":"italic","color":"green"}}>({books()[0].author})</span>
            </li>
            <li>
            {books()[1].title}
                <span style={{"font-style":"italic","color":"green"}}>({books()[1].author})</span>
            </li>
            <li>
            {books()[2].title}
                <span style={{"font-style":"italic","color":"green"}}>({books()[2].author})</span>
            </li> */}
        <For each={props.books}>
            {(book)=>{return(
                <li>{book.title}{""}
                <span style={{"font-style":"italic","color":"green"}}>({book.author})</span>
                </li>
                )
            }}
        </For>
                </ul>
            </>
        
    )
}
export default BookList
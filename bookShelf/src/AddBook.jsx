import { createSignal } from "solid-js";

const emptyBook={title:"",author:""};



function AddBook(props){

    const [newBook, setNewbook]=createSignal(emptyBook);

    const addBook =(event)=>{
        event.preventDefault();
        props.addBooks((books) => [...books,newBook()]);
        setNewbook(emptyBook);
    
    };  
    return(
     <form action="">
           <div>
                <label for="title">Book Name</label>
                <input type="text" id="title" style="margin-left:6px;" 
                    value={newBook().title} 
                    onInput={(e)=>{
                        setNewbook({...newBook(),title:e.currentTarget.value})
                    }}/>
            </div>

            <div>
                <label for="author">Author</label>
                <input type="text" id="author" style="margin-left:30px;" 
                    value={newBook().author} 
                    onInput={(e)=>{
                        setNewbook({...newBook(),author:e.currentTarget.value})
                }}
                
                />
            </div>
            <button type="submit" onclick={addBook}>Add Book</button>
     </form>
    )
}
export default AddBook
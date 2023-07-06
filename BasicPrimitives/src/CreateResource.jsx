import { Show, createResource, createSignal } from "solid-js";


// Function to fetch the user data based on the id  
async function fetchUser(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`
    );
    return await response.json();
}


export function User(){
    const [id, setId] = createSignal(1);
    const [user] = createResource(id,fetchUser);

    return(
        <>
        <Show when={!user.loading} fallback={'pleas wait'}>
            <div>Name: {user.name}</div>
            <div>Name: {user.username}</div>
            <div>Name: {user.email}</div>
            <div>Name: {user.phone}</div>
            <div>Name: {user.website}</div>
        </Show>
        </>
    );
}
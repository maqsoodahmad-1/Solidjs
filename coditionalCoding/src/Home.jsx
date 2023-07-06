import { Show } from "solid-js";
import { Properties } from "solid-js/web";

export function Home(){
    return(
        <Show when={false} 
        fallback={
            <>
            Welcome to applicaton Please Sign in to continue
            {/* some component to display like sign in form */}
            </>
        }>
            <div>Welcome back, you are loged in {Properties.name}!</div>
            {/* some componennt to be displayed like dashboard */}
        </Show>
    )
}
function HelloWorld(){
    
    const name= "Yasmeena";
    const style="padding:5px; background-color:yellow;"
    return(<>
            <div style="background-color: black; color:yellow;">
            Hello {name} Congrats its is working
        </div>
        <button style={style}> Hello</button>
        </>
    )
}
export default HelloWorld
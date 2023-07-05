async function searchBooks(query){
    if(query.trim()===""){
        return[];
    }
    const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURI(query)}`

    );
    const result =  await response.json();
    console.log(result);
    return result.docs.slice(0,20).map(({title,author_name}) => ({
        title,
        author:author_name?.join(","),
    }));
}
export default searchBooks
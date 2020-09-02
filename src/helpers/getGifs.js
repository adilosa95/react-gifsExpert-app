


export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1XSLhq1eTy6cKardbeRY7SevfYwnufXi`
    const resp = await fetch( url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log( gifs );
    //Insertamos el array que nos devuelve la api
    return gifs;
}
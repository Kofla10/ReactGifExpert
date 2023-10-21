export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lTUiHou4Qxbw51By4Sdekj3HQtTUgxNZ&limit=10&q=${category}`;
    const resp = await fetch( url);
    const {data = []} = await resp.json();
    
    // mapeamos la data y sacamos la información que neceistamos.
    const gifs = data.map(inf => ({
        id: inf.id,
        url: inf.images.downsized_medium.url,
        title: inf.title
    }))
    return gifs;
}
export const getGifs = async(category) => {
    
    const key = 'Your api key from: https://giphy.com/';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=9`;
    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        type: gif.type,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}
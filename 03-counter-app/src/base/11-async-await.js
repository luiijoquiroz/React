// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 's1jGPG9B3sTvAoeszNDzGIA6qqmCPXmK';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

    } catch (e) {
        // manejo del error
        // console.error(e)
        return 'No existe';
    }
    
    
    
}

export { getImagen }




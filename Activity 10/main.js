const aux = photo.png;

function checkImg(aux) {
    const img = new Image();
    img.src = aux;
    return img.complete;
}


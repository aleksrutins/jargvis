export function imgUrl(img: string): string {
    if(location.hostname == "munchkinhalfling.github.com") { // On GH pages
        return `https://github.com/munchkinhalfling/jargvis/raw/master/imgs/${img}`;
    } else {
        return img;
    }
}
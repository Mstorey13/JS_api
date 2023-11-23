async function paintingInfo(id, event) {
    let headers = new Headers([
        ['Content-Type', 'application/json'],
    ]);
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        Headers: headers
    });
    let result = await fetch(request)

    let response = await result.json();

    console.log(response["data"]["artist_display"])
    console.log(response["data"]["place_of_origin"])
    console.log(response["data"]["medium_display"])

    let artist_display = JSON.stringify(response["data"]["artist_display"])
    return artist_display
}

/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index, item_index){

    let painting = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${art}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request)

    let response = await result.json();

    console.log(response);

/**
 * @param img_index
 * @param item_index
 */

function art(id, event) {
    switch(id){
        case '85690': { 
            event.stopPropagation();
            clickedEvent(0,3)
            break;
        }
        case '16858': { 
            console.log(id)
            event.stopPropagation();
            clickedEvent(1,3)
            break;
        }
        case '17046': { 
            console.log(id)
            event.stopPropagation();
            clickedEvent(2,3)
            break;
        } 
        case '49629': { 
            console.log(id)
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case '51719': { 
            console.log(id)
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        } 
        case '51724': { 
            console.log(id)
            event.stopPropagation();
            clickedEvent(5,1)
            break;
        }                            
    }
}
}
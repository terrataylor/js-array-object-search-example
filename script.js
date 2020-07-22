function main(){
    console.log(data);
    let html = "";

    for(let i=0; i < data.length;i++){
        let str = createTemplate(data[i])
        html = html + str;
    }

    $(".results").html(html);


}

$("#doSearch").submit(function(evt){
    evt.preventDefault();
    let searchTerm = $("#search").val();
    console.log(searchTerm);

    let result = data.filter(function(info){
        console.log(info);
       return info.favoriteThings.includes(searchTerm);
       
        // return info.state == searchTerm;
    })

    let html = "";
    for(let i=0; i< result.length;i++){
        html = html + createTemplate(result[i]);
    }

  $(".results").html(html);

})



function createTemplate(info){  
    return `
    <div>
        <h2>${info.name}</h2>
        <p>${info.city} ${info.state}</p>
        Favorite Things
        <ul>
            <li> ${info.favoriteThings[0]}</li>
            <li> ${info.favoriteThings[1]}</li>
            <li> ${info.favoriteThings[2]}</li>
        </ul>
        </div>
    `;


}




$(main);
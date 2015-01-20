var favorite_movies = ["Breaking Away", "Sunrise", "Times Square", "Sholay", "The Umbrellas of Cherbourg", "Dazed and Confused", "Metropolitan"]

favorite_movies.forEach(function(title) {
    var safe_url = encodeURI(title);
    var url = "http://omdbapi.com/?t=" + safe_url;
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.addEventListener('load', function(e) {
        var d = xhr.responseText
        var parsed = JSON.parse(d);
        console.log(parsed);

        var body = document.querySelector("body");
        var div = document.createElement("div");
        body.appendChild(div);

        var name = document.createElement("h3");
        div.appendChild(name);
        var title = parsed.Title;
        var cap = title.toUpperCase();
        name.innerHTML = cap + " " + "(" + parsed.Year + ")";
    
        var img = document.createElement("img");
        div.appendChild(img);
        var poster = parsed.Poster;
        img.src = poster;

        var plot = document.createElement("p");
        div.appendChild(plot);
        plot.innerHTML = parsed.Plot + " Rated: " + parsed.Rated + ".";

        var credits = document.createElement("p");
        div.appendChild(credits);
        credits.innerHTML = " Directed by: " + parsed.Director + ". Written by: " + parsed.Writer + ". Starring: " + parsed.Actors + "."; 
    });

    xhr.send();

});

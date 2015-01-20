var favorite_movies = ["tt0076162", "tt0078902", "tt0018455", "tt0081635", "tt0073707", "tt0058450", "tt0106677", "tt010014"]

favorite_movies.forEach(function(id) {
    var safe_url = encodeURI(id);
    var url = "http://omdbapi.com/?i=" + safe_url;
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

        var img = document.createElement("img");
        div.appendChild(img);
        var poster = parsed.Poster;
        img.src = poster;

        var name = document.createElement("p");
        div.appendChild(name);
        var title = parsed.Title;
        var cap = title.toUpperCase();
        name.innerHTML = cap + " " + "(" + parsed.Year + ")";
        name.setAttribute("id", "title");

        var plot = document.createElement("p");
        div.appendChild(plot);
        plot.setAttribute("id", "plot");
        plot.innerHTML = parsed.Plot + " Rated: " + parsed.Rated + ".";

        var credits = document.createElement("p");
        div.appendChild(credits);
        credits.setAttribute("id", "credits");
        credits.innerHTML = " Directed by: " + parsed.Director + ". Written by: " + parsed.Writer + ". Starring: " + parsed.Actors + ".";        
});


    xhr.send();
});

function getData(){
  const movie = document.getElementById("movie").value;
  const container = document.getElementById("container");
  const url = `https://www.omdbapi.com/?apikey=b13f9def&t=${movie}`;
  const xhttps = new XMLHttpRequest();

  xhttps.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200) {
          console.log(this.responseText);
          data = JSON.parse(this.responseText);
          
          document.getElementById("year").innerHTML = data.Year;
          document.getElementById("rated").innerHTML = data.Rated;
          document.getElementById("released").innerHTML = data.Released;
          document.getElementById("runtime").innerHTML = data.Runtime;
          document.getElementById("genre").innerHTML = data.Genre;
          document.getElementById("director").innerHTML = data.Director;
          document.getElementById("actors").innerHTML = data.Actors;
          document.getElementById("language").innerHTML = data.Language;
          document.getElementById("country").innerHTML = data.Country;
          document.getElementById("awards").innerHTML = data.Awards;
          document.getElementById("poster").src = data.Poster;
      }
  };
  
  xhttps.open("GET", url, true);
  xhttps.send();
}

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  getData();
  document.getElementById("container").style.border = `2px solid #000`;
});

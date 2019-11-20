$(document).ready(function() {

  $('#gif-button').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=H9xcd2Vx1qYXBMKrncnPTaROnSYsoK83&limit=25&rating=G&q=cheeseburgers`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      let gif = response.data[0].images.downsized_medium.url;
      $('.display-gif').html(`<img src="${gif}" alt="gif">`);
    }
  });
});

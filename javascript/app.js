let searchTerm = "";
let numrecord = 5;
let startYear = 1950;
let endYear = 2019;

function initiate () {
    $("#search").on("click", function(event) {

        console.log ("search pressed")
        event.preventDefault();

        if ($("#searchTerm").val() == "") {
            alert("Please Enter Search Term!")
        } else {
            console.log (searchTerm);
            searchTerm = $("#searchTerm").val();
        };

        if ($("#records").val() !== "") {
            numrecord = $("#records").val();
            console.log (numrecord);
        };

        if ($("#startYear").val() !== "") {
            startYear = $("#startYear").val();
            console.log (startYear);
        };

        if ($("#endYear").val() !== "") {
            endYear = $("#endYear").val();
            console.log (endYear);
        };

        searchNYT ();

    });

}

function searchNYT () {

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerm + "&api-key=DHl9r9XGhIqgDOTAnMUakiXR4yVAnSSn";
      $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
        console.log(response);
        for (var i = 0; i < numrecord; i++) {

          let headline = response.response.docs[i].headline.main;
          let snippet = response.response.docs[i].snippet;
          
          let articleIdString = "article" + i;
          $("#topArticles").append("<div id='" + articleIdString + "' class='article'></div>");

          let appendArticleId = "#" + articleIdString;
          let articleHeader = $("<h2>");
          articleHeader.text(headline);

          let articleSnippet = $("<p>");
          articleSnippet.text(snippet);

          $(appendArticleId).append(articleHeader);
          $(appendArticleId).append(articleSnippet);

        }
      });

};
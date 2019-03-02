
// Here we grab the text from the input box
let searchTerm = "";
let numrecord = 5;
let startYear = 1950;
let endYear = 2019;

$("#search").on("click", function(event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    // Here we grab the text from the input box
    var searchItem = $("#searchTerm").text;
    console.log("works")
    console.log(searchItem);
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
keyword + "&api-key=DHl9r9XGhIqgDOTAnMUakiXR4yVAnSSn";




function display(response){
//console.log(response);
$("#searchTerm").text(response);
$("#records").text(response);
$("#startYear").text();
$("#endYear").text(response);
}})


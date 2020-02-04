$("#run-search").on("click", function (event) {
event.preventDefault();

    var searchTerm = $("#search-term").val().trim();
    var numResults = $("#num-records").val();
    var beginDate = $("#start-year").val();
    var endDate = $("#end-year").val();

    var queryUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sdxIGIb5cqZt4ppvxFHXI2jWK2JhAnAF';

    queryUrl += "&q=" + searchTerm;
    queryUrl += "&page=" + numResults;
    queryUrl += '&begin_date=' + beginDate + "0101";
    queryUrl += "&end_date=" + endDate + "0101";


    $.ajax({
        url: queryUrl,
        method: 'GET'
    })
        .then(function (response) {
            console.log(response)
        });

});
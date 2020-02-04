var searchTerm = "nas"
var numResults = 5;
var beginDate = 2000;
var endDate = 2005;

var queryUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sdxIGIb5cqZt4ppvxFHXI2jWK2JhAnAF';

queryUrl += "&q=" + searchTerm;

queryUrl += '&begin_date=' + beginDate + "0101";

queryUrl +=  "&end_date=" + endDate + "0101";


$.ajax({
url: queryUrl,
method: 'GET'
})

.then(function(response){

  console.log(response)
})
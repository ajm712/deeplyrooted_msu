var $ = require('jquery')
$.ajaxSetup({
    async: false
  });

class SimpleSearch{
    static makeCall(term) {
        // subject="", rights="", title="", format="", collection="", state="", creator="", date="", other="", language="", page="",
        // sends a request to the dpla api and returns a list of json objects
        // example call: ApiWrapper.makeCall({language:"english"})
        // date should be YYYY-MM-DD
        var url = "https://api.dp.la/v2/items?"
        // console.log(term);
        var terms =  {q: "deeply rooted " + term};
        terms["api_key"] = "304ebe4fa961241e648edf1035166735";

        var results
        $.getJSON(url, terms, function(result){
            // console.log(terms);
        	// properties of results are "count", "start", "limit", "docs"
            results = result

        });
        return results
    }
}

export default SimpleSearch;

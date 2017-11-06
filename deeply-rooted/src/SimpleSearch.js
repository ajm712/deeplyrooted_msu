var $ = require('jquery')
$.ajaxSetup({
    async: false
  });

class SimpleSearch{
    static makeCall(term) {
        var url = "https://api.dp.la/v2/items?";
        var results
        var terms =  {q: "deeply rooted " + term};
        terms["api_key"] = "304ebe4fa961241e648edf1035166735";
        terms["page_size"] = "25";        
        $.getJSON(url, terms, function(result){
            results = result;
        });
        return results
    }
}

export default SimpleSearch;

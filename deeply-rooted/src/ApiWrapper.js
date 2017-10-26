var $ = require('jquery')
$.ajaxSetup({
    async: false
  });

class ApiWrapper{
    static makeCall({subject="", rights="", title="", format="", collection="", state="", creator="", date="", other="", language="", page="", page_size="10"} = {}) {
        // sends a request to the dpla api and returns a list of json objects
        // example call: ApiWrapper.makeCall({language:"english"})
        // date should be YYYY-MM-DD 
        var url = "https://api.dp.la/v2/items?"
        var results

        var props = {"sourceResource.description":"deeply rooted"}
        if(subject !== "") props["sourceResource.subject"] = subject
        if(rights !== "") props["sourceResource.rights"] = rights
        if(title !== "") props["sourceResource.title"] = title
        if(format !== "") props["sourceResource.format"] = format
        if(collection !== "") props["sourceResource.collection"] = collection
        if(state !== "") props["sourceResource.spatial.state"] = state
        if(creator !== "") props["sourceResource.creator"] = creator
        if(date !== "") props["sourceResource.date.displayDate"] = date
        if(other !== "") props["q"] = other
        if(language !== "") props["sourceResource.language"] = language
        if(page !== "") props["page"] = page
        props["page_size"] = page_size
        if(page_size !== "10") props["page_size"] = page_size
        
        props["api_key"] = "304ebe4fa961241e648edf1035166735"
        $.getJSON(url, props, function(result){
        	// properties of results are "count", "start", "limit", "docs"
            results = result
        });
        return results
    }
}

export default ApiWrapper;
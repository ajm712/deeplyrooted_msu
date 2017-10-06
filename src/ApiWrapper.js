var $ = require('jquery')

class ApiWrapper{
    static makeCall({subject="", topic="", rights="", title="", format="", collection="", state="", creator="", date="", other="", language=""} = {}) {
        // each parameter needs to be passed in, set unused parameters to ""
        // i apologize to everyone who gets to use this function, JS doesn't have kwargs
        // returns a list of json objects
        var url = "https://api.dp.la/v2/items?"
        var apiKey = "&api_key=304ebe4fa961241e648edf1035166735"
        var parameters = "sourceResource.description=deeply+rooted"
        var results

        if(subject != ""){
            parameters = parameters + "&sourceResource.subject=" + subject
        }
        if(rights != ""){
            parameters = parameters + "&sourceResource.rights=" + rights
        }
        if(title != ""){
            parameters = parameters + "&sourceResource.title=" + title
        }
        if(format != ""){
            parameters = parameters + "&sourceResource.format=" + format
        }
        if(collection != ""){
            parameters = parameters + "&sourceResource.collection=" + collection
        }
        if(state != ""){
            parameters = parameters + "&sourceResource.spatial.state=" + state
        }
        if(creator != ""){
            parameters = parameters + "&sourceResource.creator=" + creator
        }
        if(date != ""){
            parameters = parameters + "&sourceResource.date.displayDate=" + date
        }
        if(other != ""){
            parameters = parameters + "&q=" + other
        }
        if(language != ""){
            parameters = parameters + "&sourceResource.language=" + language
        }
        
        url = url + parameters + apiKey
        $.getJSON(url, function(result){
            results = result.docs
        });
        return results
    }
}

export default ApiWrapper;
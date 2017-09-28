var $ = require('jquery')

class ApiWrapper{
    static makeCall(subject, topic, rights, format, collection, state, author, date, description, language, title) {
        // returns a list of json objects
        var url = "https://api.dp.la/v2/items?"
        var apiKey = "&api_key=304ebe4fa961241e648edf1035166735"
        var parameters = "sourceResource.description=%22deeply+rooted%22"
        var results
        // todo: lookup better way to assemble string
        parameters = parameters + "&sourceResource.subject=%22" + subject +"%22"
        
        url = url + parameters + apiKey
        $.getJSON(url, function(result){
            results = result.docs
        });
        return results
    }
}

export default ApiWrapper;
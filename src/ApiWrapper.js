var $ = require('jquery')

class ApiWrapper{
    static makeCall({subject="", topic="", rights="", title="", format="", collection="", state="", creator="", date="", other="", language="", page=""} = {}) {
        // sends a request to the dpla api and returns a list of json objects
        // example call: ApiWrapper.makeCall({language:"english"})
        var url = "https://api.dp.la/v2/items?"
        var apiKey = "&api_key=304ebe4fa961241e648edf1035166735"
        var parameters = "sourceResource.description=deeply+rooted"
        var results

        if(subject !== ""){
            subject = String(subject)
            subject = subject.split(" ").join("+")
            // replaces all the spaces with + 
            parameters = parameters + "&sourceResource.subject=" + subject
        }
        if(rights !== ""){
            rights = String(rights)
            rights = rights.split(" ").join("+")
            parameters = parameters + "&sourceResource.rights=" + rights
        }
        if(title !== ""){
            title = String(title)
            title = title.split(" ").join("+")
            parameters = parameters + "&sourceResource.title=" + title
        }
        if(format !== ""){
            format = String(format)
            format = format.split(" ").join("+")
            parameters = parameters + "&sourceResource.format=" + format
        }
        if(collection !== ""){
            collection = String(collection)
            collection = collection.split(" ").join("+")
            parameters = parameters + "&sourceResource.collection=" + collection
        }
        if(state !== ""){
            state = String(state)
            state = state.split(" ").join("+")
            parameters = parameters + "&sourceResource.spatial.state=" + state
        }
        if(creator !== ""){
            creator = String(creator)
            creator = creator.split(" ").join("+")
            parameters = parameters + "&sourceResource.creator=" + creator
        }
        if(date !== ""){
            date = String(date)
            date = date.split(" ").join("+")
            parameters = parameters + "&sourceResource.date.displayDate=" + date
        }
        if(other !== ""){
            other = String(other)
            other = other.split(" ").join("+")
            parameters = parameters + "&q=" + other
        }
        if(language !== ""){
            language = String(language)
            language = language.split(" ").join("+")
            parameters = parameters + "&sourceResource.language=" + language
        }
        if(page !== ""){
            page = String(page)
            page = page.split(" ").join("+")
            parameters = parameters + "&page=" + page
        }
        
        url = url + parameters + apiKey
        $.getJSON(url, function(result){
            results = result.docs
        });
        // get json directly returns the json object returned from the dpla api
        // results returns the array contained in the docs field of the response
        return results
    }
}

export default ApiWrapper;
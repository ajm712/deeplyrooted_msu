var $ = require('jquery')

class ApiWrapper{
    static makeCall(url) {
        $.getJSON(url, function(result){
            console.log(result)
        });
    }
}

export default ApiWrapper;
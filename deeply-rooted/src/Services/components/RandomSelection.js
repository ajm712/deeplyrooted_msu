import ApiWrapper from './ApiWrapper.js';

class RandomButton{ //makes a random query to the API to present the user with random results 
    static random_select({page_size = 30} = {}) {
        var results = ApiWrapper.makeCall({page_size: page_size, page: "1"});        
        var maxNum = Math.floor(results.count/ page_size);        
        var randomPage = Math.floor(Math.random() * maxNum + 1);
        
        results = ApiWrapper.makeCall({page_size: page_size, page: randomPage.toString()});     

        return results;
    }
}

export default RandomButton;
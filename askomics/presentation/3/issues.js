function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getIssuesNumber(owner, repo, callback) {

    var url = "https://api.github.com/repos/" + owner + "/" + repo;
    httpGetAsync(url, function(response) {
        return callback(JSON.parse(response).open_issues);
    });
}

getIssuesNumber("askomics", "askomics", function(number) {
    document.getElementById('issues-number').insertAdjacentHTML('afterbegin', number);
    // document.getElementById('issues-number').textContent(number);
});

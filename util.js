function ajax(url, method, successcallback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            successcallback(response);
        }
        else if (this.readyState == 4 && this.status != 200) { errorCallback(this.responseText); }
    }
    xhr.open(method, url, true);
    xhr.send();
}
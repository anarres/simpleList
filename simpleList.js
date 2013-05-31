function updateStorageInfo() {
    var html;
    if(typeof(Storage)==="undefined") {
        html = "<p>Sorry, your browser doesn't have local storage support, \
             so this app probably won't work for you.</p>";
    }
    else {
        if (localStorage.length === 0) {
            html = "<p>There are no things in the list yet. Why not use \
                    the form below to add some?</p>";
        }
        else {
            html = "<ul>";
            for (var i=0; i<localStorage.length; i++) {
                var oneUp = i+1;
                html += "<li>";
                html += oneUp;
                html += ": ";
                html += localStorage[i];
                html += "<span class='remove' title='Remove' onclick='removeThing(";
                html += i;
                html += ")'> x</span>";
                html += "</li>";
            }
        }
        html += "</ul>";
        document.getElementById("storage").innerHTML = html;
    }
}

function addThingToStorage(thing) {
    var myIndex = localStorage.length;
    localStorage[myIndex] = thing;
    updateStorageInfo();
}

function saveAThing() {
    var thing = document.getElementById("newThingInput").value;
    addThingToStorage(thing);
    updateStorageInfo();
}

function removeThing(myIndex) {
    var myArray = [];
    for (var i=0; i<localStorage.length; i++) {
        if (i < myIndex) {
            myArray.push(localStorage[i]);
        }
        else if (i > myIndex) {
            myArray.push(localStorage[i]);
        }
    }
    localStorage.clear();
    for (var j=0; j<myArray.length; j++) {
        localStorage[j] = myArray[j];    
    }
    updateStorageInfo();
}

function init() {
    updateStorageInfo();
}







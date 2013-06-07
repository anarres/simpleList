function init() {
//    localStorage.clear();
    updateStorageInfo();
}

function updateStorageInfo() {
    var html = "";
    if(typeof(Storage)==="undefined") {
        html = "<p>Sorry, your browser doesn't have local storage support, \
             so this app probably won't work for you.</p>";
    }
    else {
        var foo = localStorage.getItem('simpleList');
        if (foo) {
            var bar = JSON.parse(foo);
            html = "<ul>";
            for (var i=0; i<bar.length; i++) {
                var oneUp = i+1;
                html += "<li>";
                html += oneUp;
                html += ": ";
                html += bar[i]["thing"];
                html += "<span class='remove' title='Remove' onclick='removeThing(";
                html += i;
                html += ")'> x</span>";
                html += "</li>";
            }
            html += "</ul>";
        }
        else {
            html += "There are no things saved yet, but you can use the form below to add some.";
        }
    }
    document.getElementById("storage").innerHTML = html;
}


function saveAThing() {
    var thing = document.getElementById("newThingInput").value;
    var when = new Date().getTime();
    var obj = {"thing":thing, "when":when};

    var foo = localStorage.getItem('simpleList');
    if (foo) {
        var listOfThings = JSON.parse(foo);
        listOfThings.push(obj);
        localStorage.setItem('simpleList', JSON.stringify(listOfThings));
    }
    else {
        var listOfThings = [obj];
        localStorage.setItem('simpleList', JSON.stringify(listOfThings));
    }
    updateStorageInfo();
}

function removeThing(myIndex) {
    var foo = localStorage.getItem('simpleList');
    if (foo) {
        var listOfThings = JSON.parse(foo);
        var newList = [];

        for (var i=0; i<listOfThings.length; i++) {
            if (i !== myIndex) {
                newList.push(listOfThings[i]);
            }
        }
        localStorage.setItem('simpleList', JSON.stringify(newList));
    }
    else {
        console.log("Oh dear, that's not supposed to happen");
    }
    updateStorageInfo();
}




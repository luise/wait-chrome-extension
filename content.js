var makeButton = function(title, className, action) {
    var button = document.createElement('button');
    button.className = className;
    button.onclick = action;
    var text = document.createTextNode(title);
    button.appendChild(text);
    return button;
};

var addPopup = function() {
    var popup = document.createElement('div');
    popup.className = "waiterPopup";
    popup.id = "waiterpopup";

    var title = document.createElement('div');
    title.className = 'titleText';
    title.innerHTML = 'Wait! Are you sure you want to continue?';
    popup.appendChild(title);

    popup.appendChild(document.createElement('br'));

    popup.appendChild(makeButton("Nope", "closeTabButton",
        close_tab));
    popup.appendChild(makeButton("Yes", "okTabButton", deletePopup));
    document.body.appendChild(popup);

    // The stylesheet hides the original page by default to avoid the page
    // showing up before the popup is generated.
    document.body.style.visibility = "visible";
}

var close_tab = function() {
    chrome.runtime.sendMessage({action: "close"});
};

var deletePopup = function() {
    var popup = document.getElementById("waiterpopup");
    document.body.removeChild(popup);
};

window.onload = addPopup;

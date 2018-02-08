document.getElementById("findButton").onclick = function() {
    var typedText = document.getElementById("input").value;
    var node =  document.getElementById("topDiv");   
    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

    for (i = 0; i < words.length; i++) {
        if (alphabetize(typedText) === alphabetize(words[i])) {
            let newElement = document.createElement("span");
            let textNode = document.createTextNode(words[i] + " ");
            let newBlock = newElement.appendChild(textNode);
            node.appendChild(newElement);
        }
    } 
 }

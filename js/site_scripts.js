var partners = [];
var fileNames = [];
var imageList = [];
var openList = "<li class='partner'>";
var closeList = "</li>";


for (var i = 0; i < 6; i++) {
    fileNames.push("partner-" + (i === 0 ? "bustour" : i === 1 ? "cabinrental" : i === 2 ? "campingadv" : i === 3 ? "collegetours" : i === 4 ? "rentalbike" : "tourgroup"));
}

for (var i = 0; i < fileNames.length; i++) {
    partners.push("<img src='images/partners/" + fileNames[i] + ".png' alt='Partner " + (i + 1) + "'>");
    imageList.push(openList + partners[i] + closeList);
}

document.getElementById("partners").innerHTML = imageList.join("");
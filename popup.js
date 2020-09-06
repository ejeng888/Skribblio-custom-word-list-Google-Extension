function changeText(words) {
    //replace all spaces with commas
    for (var i = 1; i != words.length; i++) {
        if (words[i] == " " && words[i - 1] != ",") {
            var newWords = words.replace(/\s/g, ",");
            break;
        }
    }
    //in case commas are placed next to each other
    var unique = newWords.charAt(0);
    for (var j = 1; j != newWords.length; j++) {
        if (newWords[j] == "," && newWords[j - 1] == ",") {
            ;
        }
        else {
            unique += newWords[j];
        }
    }

    //replace all numbers
    var withNoDigits = unique.replace(/[0-9]/g, '');
    var final = withNoDigits.charAt(0);
    for (var j = 1; j != withNoDigits.length; j++) {
        if (withNoDigits[j] == "," && withNoDigits[j - 1] == ",") {
            ;
        }
        else {
            final += withNoDigits[j];
        }
    }
    //in case the number was something like 2K
    var newfinal = final.charAt(1);
    for (var k = 1; k != final.length - 1; k++) {
        if (final[k] == "," && final[k + 1] == 'K' && final[k + 2] == ",") {
            k++;
        }
        else {
            newfinal += final[k];
        }
    }

    document.getElementById("myWords").value = newfinal;
}

document.getElementById("clickit").addEventListener('click', function () { changeText(document.getElementById("myWords").value); });


//replace spaces with commas
function addComma(list) {
    var newWords = document.getElementById("myWords").value.trim();
    var result = newWords + ",";
    document.getElementById("myWords").value = result;
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        addComma(document.getElementById("myWords").value);
    }
}
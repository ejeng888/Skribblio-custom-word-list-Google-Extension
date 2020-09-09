function changeText(words) {
    //replace all spaces with commas
    for (var i = 0; i <= words.length; i++) {
        if (words[i] == " ") {
            var newWords = words.replace(/\s/g, ",");
            break;
        }
    }
    //in case commas are placed next to each other
    var unique = "";
    for (var j = 0; j <= newWords.length - 1; j++) {
        if (newWords[j] == "," && newWords[j + 1] == ",") {
            ;
        }
        else {
            unique += newWords[j];
        }
    }

    //replace all numbers
    var withNoDigits = unique.replace(/[0-9]/g, '');
    
    //in case the number was something like 2K
    var newfinal = "";
    for (var k = 0; k <= withNoDigits.length - 1; k++) {
        if (withNoDigits[k] == "," && (withNoDigits[k + 2] == ',' || withNoDigits.endsWith(",k") || withNoDigits.endsWith(',K')) && (withNoDigits[k+1] == 'K' || withNoDigits[k+1] == 'k')) {
            k++;
        }
        else {
            newfinal += withNoDigits[k];
        }
    }

    document.getElementById("myWords").value = newfinal;

}

document.getElementById("clickit").addEventListener('click', function () { changeText(document.getElementById("myWords").value); });



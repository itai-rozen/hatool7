var getCatEmoji = function () {
    var emojies = ['', '', ''];
    var now = new Date();
    console.log('now: ', now);
    var lastSandReplace = now.setDate(1);
    var lastLitterCleaning = now.setDate(2);
    console.log('last replace: ', lastSandReplace);
    console.log('last litter cleaning: ', lastLitterCleaning);
    return null;
};
var updateCatEmoji = function (status) {
    var emojies = ['😿', '🐱', '😺'];
    document.getElementById('cat-emoji').innerHTML = emojies[status];
};
var onInit = function () {
    updateCatEmoji(1);
};

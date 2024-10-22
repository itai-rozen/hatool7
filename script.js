var lastSandReplaceDate = new Date('2024-06-15');
var lastLitterCleanDate = new Date('2024-06-15');
var setDateText = function (type, date) {
    console.log('date: ', date);
    var textEl = document.getElementById("last-".concat(type));
    textEl.innerText = date.toLocaleTimeString('en-GB', {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false // for 24h format
    });
};
var updateCatEmoji = function (status) {
    var emojies = ['😿', '🐱', '😺'];
    document.getElementById('cat-emoji').innerText = emojies[status];
};
var buttonClicked = function (buttonType) {
    setDateText(buttonType, new Date(Date.now()));
};
var onInit = function () {
    console.log('init!');
    updateCatEmoji(1);
    setDateText('clean', lastLitterCleanDate);
    setDateText('replace', lastSandReplaceDate);
};

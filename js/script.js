
function switchChannel(channelName) {
    document.getElementById('#chat-app-bar').innerHTML='Tuning into channel' + channelName + 'by' + 'upgrading.never.helps' + star;
}

function switchAppstar(star) {
    document.getElementById('#app-star').src="http://ip.lfe.mw.tum.de/sections/star.png";
}

function selectTab(TabId) {
    $("selector").removeClass('.selected');
    $("selector").addClass(TabId);
}
console.log('Changing to tab');
console.log('app is live');

function hideEmojis() {
    $('#emojis').hide();
}


function showEmojis() {
    $('#emojis').show();
}
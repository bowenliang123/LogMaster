/**
 * Created by bowen on 16/6/8.
 */
console.log('background');

chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.create({url: chrome.extension.getURL('html/main.html')});
});
chrome.runtinme.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "Jack"
    });
});

chrome.storage.local.get('name', data => {

});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
})
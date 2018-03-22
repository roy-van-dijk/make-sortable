chrome.tabs.executeScript({
    code: 'localStorage.make_sortable_enabled = true;'
});

document.getElementById("disable-here").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: 'localStorage.make_sortable_enabled = false;'
    });

    document.getElementById("reload").style.display = "block";
});

document.getElementById("enable-here").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: 'localStorage.make_sortable_enabled = true;'
    });  

    document.getElementById("reload").style.display = "block";
});

document.getElementById("reload").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: 'location.reload();'
    });  
});
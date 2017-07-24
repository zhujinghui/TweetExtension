

var contextsList = ["selection", "link", "image", "page"];

for(i = 0;i<contextsList.length; i++) {

    var context = contextsList[i];
    var titleX = "Share this "+context+" on twitter";

    chrome.contextMenus.create({
        title: titleX,
        contexts: [context],
        onclick: clickHandler,
        id: context
    });

}
//selection, link, image, page
//encodeURIComponent 保护插件不被滥用 加密符号
//tabs windows 弹出不同

function clickHandler(data,tab) {

    switch (data.menuItemId){
        case 'selection':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel",width:500,height:300,left:500,top:200});
            break;
        case 'link':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.linkUrl),type:"panel",width:500,height:300,left:500,top:200});
            break;
        case 'image':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.srcUrl),type:"panel",width:500,height:300,left:500,top:200});
            break;
        case 'page':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl),type:"panel",width:500,height:300,left:500,top:200});
            break;
    }

}

// https://twitter.com/intent/tweet?text=abc
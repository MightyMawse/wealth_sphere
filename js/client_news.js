function NewsInit(){
    var panel = document.createElement("div");
    panel.className = "panel";
    document.getElementsByTagName("body")[0].appendChild(panel);

    var panelHeader = document.createElement("div");
    panelHeader.className = "panel-header";
    panelHeader.innerText = "*** Top News Header ***";
    panel.appendChild(panelHeader);
    for(let i = 0; i < 10; i++){
        var panelElement = document.createElement("div");
        panelElement.className = "panel-element";
        panelElement.innerText = "⚡ Top news article #" + i;

        var showMore = document.createElement("a");
        showMore.style.color = "#574c82";
        showMore.innerText = "Show more";
        showMore.href = "";

        var link = document.createElement("a");
        link.style.color = "#00ffd9";
        link.innerText = "🔗" + "website.com";
        link.href = "index.html";

        panelElement.appendChild(showMore);
        panelElement.appendChild(link);
        panel.appendChild(panelElement);
    }
}
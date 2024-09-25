window.addEventListener('load', async () => {
    let linkElems = document.querySelectorAll("a[href]")
    let trigger = await chrome.storage.local.get("trigger").then(o => o.trigger) || "dblclick"

    linkElems.forEach(elem => {
        let url = elem.href
        let originalUrl = url.replace(new RegExp("https://web.archive.org/web/[0-9]{14}/"), "")

        elem.addEventListener("click", e =>  location.href = url)
        elem.addEventListener(trigger, e =>  location.href = originalUrl)

        if(trigger == "dblclick"){
            elem.href = "#!"
        }
    })
})


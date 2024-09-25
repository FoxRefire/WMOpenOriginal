document.getElementById("trigger").addEventListener("change", async () => {
    await chrome.storage.local.set({trigger: trigger.value})
})
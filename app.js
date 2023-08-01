window.addEventListener("scroll", setScrollVar);

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScroleled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty(
        "--scroll",
        Math.min(percentOfScreenHeightScroleled * 100, 100)
    )
}
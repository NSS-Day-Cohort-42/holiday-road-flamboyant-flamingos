const eventHub = document.querySelector(".container")

export const parkDetailsButton = () => {

    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("parkDetails--")) {
        const parkIdArray = clickEvent.target.id.split("--")[1]

        const contentTarget = document.querySelector(`.parkDialog--${parkIdArray}`)
        contentTarget.showModal()
        }
    else if (clickEvent.target.id ==="parkDetailCloseButton") {
        const contentTarget = clickEvent.target.parentNode
        contentTarget.close()
    }
})
}


export const attractionDetailsButton = () => {

    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("attractionDetails--")) {
        const attractionIdArray = clickEvent.target.id.split("--")[1]

        const contentTarget = document.querySelector(`.attractionDialog--${attractionIdArray}`)
        contentTarget.showModal()
        }
    else if (clickEvent.target.id ==="attractionDetailCloseButton") {
        const contentTarget = clickEvent.target.parentNode
        contentTarget.close()
    }
})
}
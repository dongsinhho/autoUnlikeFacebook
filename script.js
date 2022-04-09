function random(min, max){
    return Math.random() * (max - min) + min
}

function randomDelay(min = 1000, max = 5000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, random(min, max))
    })
}

async function runOnce(name) {
    console.warn('processing...', name)

    const cardItem = document.querySelector('[role="main"] .l9j0dhe7.btwxx1t3.j83agx80')

    if (!cardItem) {
        console.error('End of list')
        return
    }

    const optionButton = cardItem.querySelector('[role="button"][tabindex="0"]')

    optionButton.click()
    await randomDelay(100, 500)

    const unlikeButton = document.querySelector('.__fb-light-mode [role="menuitem"][tabindex="0"]')
    if (!unlikeButton) {
        console.error('Unlike button not found')
        return
    }

    unlikeButton.click()
    await randomDelay(100, 500)

    cardItem.remove()

    console.info('processed')
}

async function unlike(ignore = 25) {
    console.info('========START=======')


    const cardItem = document.querySelector('[role="main"] .l9j0dhe7.btwxx1t3.j83agx80')
    if (ignore === false && cardItem) {
        console.info('skipped')
        cardItem.remove()
    }

    if (ignore === true) {
        runOnce(1)
    }

    if (typeof ignore === 'number') {
        for (let i = 0; i < ignore; i++) {
            await runOnce(i + 1)
            await randomDelay(100, 1000)
        }
    }

    console.info('========DONE========')
}

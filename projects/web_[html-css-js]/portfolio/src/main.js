

const previous_project = ()=> {
    let boxe = document.querySelector('.projects-box')
    let size = boxe.clientWidth
    boxe.scrollLeft -= size;
}

const next_project = ()=> {
    let boxe = document.querySelector('.projects-box')
    let size = boxe.clientWidth
    boxe.scrollLeft += size;
}
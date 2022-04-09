export const ShowCard = (arr, cont) => {
    arr.forEach(element => {
        const { id, name, image} = element
        cont.innerHTML = `
            <div class="card d-inline-block" style="width: 14rem;">
                <img src="${image}" class="card-img-top w-25 d-lock m-auto" alt="...">
                <div class="card-body text-center">
                  <a href="#" id="${id}" class="btn btn-outline-primary">${name}</a>
                </div>
            </div>
        `
    });
}

const loadSearchItem = () => {
    const searchItem = document.getElementById('search-item').value;
    console.log(searchItem)
    document.getElementById('search-item').value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchItem}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => showSearchItems(data.data))
}

const showSearchItems = (items) => {
    console.log(items);
    if (length === 0) {
        const errormsg = document.getElementById('error-msg')
        errormsg.textContent = '';
        const div = document.createElement('div');
        div.classList.add('card', 'w-50', 'error-field', 'mx-auto', 'mb-3')
        div.innerHTML = `   
        <div class="card-body fw-bold">
            No Phone Found!.
        </div> `
        errormsg.appendChild(div);
    }

    items.forEach(item => {
        //console.log(item.brand) //brand// phone_name
    });
}

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

    // show error for null url
    const errormsg = document.getElementById('error-msg')
    errormsg.textContent = '';
    if (items.length === 0) {
        const div = document.createElement('div');
        div.classList.add('card', 'w-50', 'error-field', 'mx-auto', 'mb-3')
        div.innerHTML = `   
        <div class="card-body fw-bold">
            No Phone Found!.
        </div> `
        errormsg.appendChild(div);
    }

    //show items
    const showItems = document.getElementById('show-items');
    showItems.textContent = '';
    let count = 0;
    items.forEach(item => {
        //console.log(item.brand) //brand// phone_name
        count++;
        if (count > 20) {
            return;
        }
        else {
            console.log(count);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div  class="card cart-width shadow p-1 mb-5 bg-body rounded mx-auto" >
                    <img src="${item.image}" class=" w-50 card-img-top mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${item.brand} </h5>
                        <h5 class="card-title">Brand: ${item.phone_name} </h5>
                    </div>
                    <a href="" class="b-cart mx-auto">Details</a>
                </div>
        `
            showItems.appendChild(div);
        }
    });


}

const loadSearchItem = () => {
    const searchItem = document.getElementById('search-item').value;
    //console.log(searchItem)
    document.getElementById('search-item').value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchItem}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => showSearchItems(data.data))
}

//function for clear clearSingleDetails
function clearSingleDetails() {
    const singleCart = document.getElementById('single-cart');
    singleCart.textContent = '';
}

const showSearchItems = (items) => {
    //console.log(items);
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

    //remove items
    showItems.textContent = '';

    //reomve single card details
    clearSingleDetails();

    let count = 0;
    items.forEach(item => {
        //console.log(item.brand) //brand// phone_name
        count++;
        if (count > 20) {
            return;
        }
        else {
            //console.log(count);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div  class="card cart-width shadow p-1 mb-5 bg-body rounded mx-auto" >
                    <img src="${item.image}" class=" w-50 card-img-top mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${item.brand} </h5>
                        <h5 class="card-title">Brand: ${item.phone_name} </h5>
                    </div>
                    <a onclick="loadDetails('${item.slug}')" class="b-cart mx-auto">Details</a>
                </div>
        `
            showItems.appendChild(div);
        }
    });
}

//show items detail by Id 

const loadDetails = (detailsId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${detailsId}`;
    //console.log(url);

    fetch(url)
        .then(Response => Response.json())
        .then(data => detailsByid(data.data));
}

const detailsByid = (itemsDetais) => {
    //console.log(itemsDetais.releaseDate)
    const singleCart = document.getElementById('single-cart');
    // singleCart.textContent = '';

    ////reomve single card details
    clearSingleDetails();

    const div = document.createElement('div');
    div.classList.add('card', 'mb-3', 'w-50', 'mx-auto', 'shadow', 'p-3', 'mb-5', 'bg-body', 'rounded', 'd-flex', 'flex-row')

    div.innerHTML = `
            <img src="${itemsDetais.image}" class="card-img-top img-size" alt="...">
            <div class="card-body">
                <p class="card-title"><span class="fw-bold"> Release Date: </span>${itemsDetais.releaseDate ? itemsDetais.releaseDate : 'No date fountd !'}</p>
                <p class="card-title"><span class="fw-bold"> ChipSet: </span>${itemsDetais.mainFeatures.chipSet}</p>
                <p class="card-title"><span class="fw-bold"> Display Size: </span>${itemsDetais.mainFeatures.displaySize}</p>
                <p class="card-title"><span class="fw-bold"> Memory: </span>${itemsDetais.mainFeatures.memory}</p>
                <p class="card-title"><span class="fw-bold"> Storage: </span>${itemsDetais.mainFeatures.storage}</p>
            </div>
        `
    singleCart.appendChild(div);
} 
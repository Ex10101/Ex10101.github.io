document.addEventListener('DOMContentLoaded', function() {
    const filterTypes = document.querySelectorAll('.filter-select p');
    console.log(filterTypes)
    const priceMin = document.querySelector('#min-price');
    const priceMax = document.querySelector('#max-price');

    function filterProducts() {
        let products = document.querySelectorAll('.product');
        products.forEach(product => {
            let type = product.getAttribute('data-type');
            let manufacturer = product.getAttribute('data-manufacturer');
            let price = Number(product.getAttribute('data-price'));

            let typeSelected = [...document.querySelectorAll('.filter-type:nth-child(1) .filter-select p.selected')]
                                .map(p => p.textContent);
            let manufacturerSelected = [...document.querySelectorAll('.filter-type:nth-child(2) .filter-select p.selected')]
                                .map(p => p.textContent);

            let minPrice = Number(priceMin.value) || 0;
            let maxPrice = Number(priceMax.value) || Infinity;

            let typeMatch = typeSelected.length === 0 || typeSelected.includes(type) || typeSelected.includes("All");
            let manufacturerMatch = manufacturerSelected.length === 0 || manufacturerSelected.includes(manufacturer);
            let priceMatch = price >= minPrice && price <= maxPrice;

            product.style.display = typeMatch && manufacturerMatch && priceMatch ? 'flex' : 'none';
        });
    }

    filterTypes.forEach(filter => {
        filter.addEventListener('click', function() {
            filter.classList.toggle('selected');
            filterProducts();
        });
    });

    priceMin.addEventListener('change', filterProducts);
    priceMax.addEventListener('change', filterProducts);
    });
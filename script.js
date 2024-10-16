let product = {
    children: [
        {color: '#7F887C', size: '3-Seater (Queen)', price: '$999.00', oldPrice: '$1,299.00', status: "In stock", image: "images/CushyLuxe_Gumleaf_Queen_5.webp"},
        {color: '#7F887C', size: '2.5-Seater (Double)', price: '$999.00', oldPrice: '', status: "In stock", image: "images/CushyLuxe_Gumleaf_Double_5.webp"},
        {color: '#7F887C', size: '1.5-Seater (Single)', price: '$699.00', oldPrice: '$799.00', status: "Sold out", image: "images/CushyLuxe_Gumleaf_Single_5.webp"},
        {color: '#14131A', size: '3-Seater (Queen)', price: '$1.299.00', oldPrice: '', status: "In stock", image: "images/Cushy_Ink_Queen_5.webp"},
        {color: '#14131A', size: '2.5-Seater (Double)', price: '$899.00', oldPrice: '$999.00', status: "In stock", image: "images/Cushy_Ink_Double_5.webp"},
        {color: '#14131A', size: '1.5-Seater (Single)', price: '$799.00', oldPrice: '', status: "In stock", image: "images/Cushy_Ink_Single_5.webp"},
        {color: '#808185', size: '3-Seater (Queen)', price: '$999.00', oldPrice: '$1,299.00', status: "In stock", image: "images/Cushy_Tinny_Queen_5.webp"},
        {color: '#808185', size: '2.5-Seater (Double)', price: '$999.00', oldPrice: '', status: "In stock", image: "images/Cushy_Tinny_Double_5.webp"},
        {color: '#808185', size: '1.5-Seater (Single)', price: '$799.00', oldPrice: '', status: "Sold out", image: "images/Cushy_Tinny_Single_5.webp"},
    ]
}

let options = {
    color: null,
    size: null,
    price: null,
    oldPrice: null,
    status: null,
    image: null
}

const images = document.getElementById("variant-images-pagination")
const colors = document.getElementById("colors")
const sizes = document.getElementById("sizes")
const newPrice = document.getElementById("newPrice")
const oldPrice = document.getElementById("oldPrice")

const showProduct = () => {
    let listColors = product.children.map(children => children.color)
    listColors = Array.from(new Set(listColors))
    listColors.forEach((color, index) => {
        let li = document.createElement('li')
        li.style.backgroundColor = color
        li.setAttribute('data-color', color)
        colors.appendChild(li)

        li.addEventListener('click', () => {
            options.color = options.color !== color ? color : null
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
            updateDots(index);
            setPrice()
        })
    })
    let listSizes = product.children.map(children => children.size)
    listSizes = Array.from(new Set(listSizes))
    listSizes.forEach((size, index) => {
        let li = document.createElement('li')
        li.innerText = size
        li.setAttribute('data-size', size)
        sizes.appendChild(li)

        li.addEventListener('click', () => {
            options.size = options.size !== size ? size : null
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
            updateDots(index);
            setPrice()
        })
    })
}
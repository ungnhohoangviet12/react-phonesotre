const initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        invetory: 10
    },
    {
        id: 2,
        name: "Iphone 7 Plus",
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        invetory: 10
    },
    {
        id: 3,
        name: "Iphone 7 Plus",
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        invetory: 10
    }
]

const product = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }

}

export default product
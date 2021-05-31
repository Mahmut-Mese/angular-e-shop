module.exports = function() {
    return {
        products: [{
                id: 1,
                name: "samsung s5",
                price: 1000,
                imageUrl: "1.png",
                description: "iyi",
                category: "telefon",
            },
            {
                id: 2,
                name: "samsung s6",
                price: 2000,
                imageUrl: "2.png",
                description: "iyi değil",
                category: "telefon",
            },
            {
                id: 3,
                name: "samsung s7",
                price: 2500,
                imageUrl: "3.png",
                description: "çok iyi",
                category: "telefon",
            },
            {
                id: 4,
                name: "samsung s8",
                price: 12500,
                imageUrl: "4.png",
                description: "çok çok iyi",
                category: "telefon",
            },
            {
                id: 5,
                name: "samsung s9",
                price: 22500,
                imageUrl: "5.png",
                description: "çok çok çok iyi",
                category: "bilgisayar",
            },
            {
                id: 6,
                name: "samsung s10",
                price: 22500,
                imageUrl: "6.png",
                description: "çok çok süper iyi",
                category: "bilgisayar",
            },
        ],
        categories: [
            { id: 1, name: "telefon" },
            { id: 2, name: "bilgisayar" },
            { id: 3, name: "televizyon" },
        ],
        orders: [],
    };
};
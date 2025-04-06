

const products = [
    {
        id: 1,
        title: "Men Casual Round Neck T Shirt",
        price: "$100",
        description: "This Men Casual Round Neck T Shirt is designed to provide both comfort and style, making it an ideal choice for everyday wear. Crafted from high-quality, breathable fabric, it ensures a soft and lightweight feel against the skin, keeping you comfortable throughout the day. The classic round neck design adds a timeless appeal, while the versatile style makes it suitable for pairing with jeans, shorts, or joggers. Whether you're heading out for a casual outing, meeting friends, or simply relaxing at home, this t-shirt is a wardrobe essential. Its durable stitching and premium material ensure long-lasting wear, making it a great value for your money.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product1_green_1.jpg",
                thumbnails:[
                    "images/product1_green_2.jpg",
                    "images/product1_green_3.jpg",
                    "images/product1_green_4.jpg",
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "Yellow",
                mainImage: "images/product1_yellow_1.jpg",
                thumbnails: 
                            [
                                "images/product1_yellow_2.jpg",
                                "images/product1_yellow_3.jpg",
                                "images/product1_yellow_4.jpg"
                            ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "Red",
                mainImage: "images/product1_red_1.jpg",
                thumbnails:
                            [
                                "images/product1_red_2.jpg",
                                "images/product1_red_3.jpg",
                                "images/product1_red_4.jpg",
                            ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "White",
                mainImage: "images/product1_white_1.jpg",
                thumbnails: 
                            [
                                "images/product1_white_2.jpg",
                                "images/product1_white_3.jpg",
                                "images/product1_white_4.jpg"
                            ],
                sizes: ["S", "L"]
            },
            {
                name: "Maroon",
                mainImage: "images/product1_maroon_1.jpg",
                thumbnails:
                            [
                                "images/product1_maroon_2.jpg",
                                "images/product1_maroon_3.jpg",
                                "images/product1_maroon_4.jpg",
                            ],
                sizes: ["M", "L", "XL"]
            }
        ]
    },

    {
        id: 2,
        title: "Men Slim Fit Turtleneck Sweater",
        price: "$50",
        description: "This Men Slim Fit Turtleneck Sweater is a perfect blend of sophistication and comfort, designed to elevate your wardrobe for the colder seasons. Made from premium, soft-knit fabric, it provides excellent warmth while maintaining a lightweight feel. The slim-fit design contours to your body, offering a modern and stylish silhouette that pairs effortlessly with jeans, chinos, or dress pants. The turtleneck adds a touch of elegance, making it suitable for both casual outings and formal occasions. Whether you're heading to the office, attending a dinner party, or enjoying a cozy evening by the fireplace, this sweater ensures you stay comfortable and fashionable. Its durable construction and high-quality material ensure long-lasting wear, making it a versatile and valuable addition to your collection.",

        colors: [
            {
                name: "Blue",
                mainImage: "images/product2_blue_1.jpg",
                thumbnails:
                            [
                                "images/product2_blue_2.jpg",
                                "images/product2_blue_3.jpg",
                                "images/product2_blue_4.jpg"
                            ],
                sizes: ["M", "L", "XL"]
            }
        ]
    },

    {
        id: 3,
        title: "Men Striped Polo Shirt",
        price: "$100",
        description: "This Men Striped Polo Shirt combines classic style with modern comfort, making it a versatile addition to your wardrobe. Crafted from high-quality, breathable fabric, it ensures a soft and lightweight feel, keeping you comfortable throughout the day. The timeless striped design adds a touch of sophistication, while the polo collar and button placket provide a polished look. Perfect for casual outings, weekend get-togethers, or even semi-formal occasions, this shirt pairs effortlessly with jeans, chinos, or shorts. Its durable stitching and premium material ensure long-lasting wear, making it a reliable choice for any season. Whether you're heading to a barbecue, a golf game, or a casual office day, this striped polo shirt offers both style and functionality, making it a must-have in your collection.",

        colors: [
            {
                name: "Grey",
                mainImage: "images/product3_grey_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },

    {
        id: 4,
        title: "Men Casual Long Sleeve Polo",
        price: "$125",
        description: "This Men Casual Long Sleeve Polo is a perfect combination of comfort and style, designed to elevate your casual wardrobe. Made from premium-quality, breathable fabric, it ensures a soft and lightweight feel, keeping you comfortable throughout the day. The long sleeve design adds versatility, making it suitable for various occasions and weather conditions. Whether you're heading to a casual outing, a weekend gathering, or a relaxed office day, this polo shirt offers a polished yet laid-back look. Its classic polo collar and button placket provide a timeless appeal, while the durable stitching and high-quality material ensure long-lasting wear. Pair it with jeans, chinos, or shorts for a stylish and effortless outfit. This polo shirt is a must-have for anyone seeking a blend of functionality and fashion in their wardrobe.",
        
        colors: [
            {
                name: "Green",
                mainImage: "images/product4_green_1.jpg",
                thumbnails:[],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },

    {
        id: 5,
        title: "Men Western Style Denin Shirt",
        price: "$147",
        description: "This Men Western Style Denim Shirt is a perfect blend of rugged charm and modern style, designed to make a bold statement in your wardrobe. Crafted from high-quality denim fabric, it offers durability and comfort, ensuring it stands the test of time. The Western-inspired design features classic details such as snap-button closures, chest pockets, and contrast stitching, adding a touch of authenticity to your look. Whether you're heading to a casual outing, a music festival, or a night out with friends, this shirt pairs effortlessly with jeans, chinos, or even layered over a t-shirt for a versatile and stylish outfit. Its tailored fit ensures a flattering silhouette, while the breathable material keeps you comfortable throughout the day. Elevate your casual wear with this timeless denim shirt, a must-have for anyone seeking a mix of functionality and fashion.",
        
        colors: [
            {
                name: "Black",
                mainImage: "images/product5_black_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },

    {
        id: 6,
        title: "Men Casual USA Print Tee",
        price: "$80",

        description: "This Men Casual USA Print Tee is a stylish and comfortable addition to your wardrobe, perfect for showcasing your love for casual fashion with a patriotic twist. Made from high-quality, breathable fabric, it ensures a soft and lightweight feel, keeping you comfortable throughout the day. The bold USA print design adds a unique and trendy touch, making it ideal for casual outings, weekend gatherings, or relaxed days at home. Its versatile style pairs effortlessly with jeans, shorts, or joggers, allowing you to create a variety of laid-back looks. Whether you're heading to a barbecue, a sports event, or simply enjoying a day out, this tee offers both comfort and style. Its durable stitching and premium material ensure long-lasting wear, making it a reliable and fashionable choice for any season.",

        colors: [
            {
                name: "Brown",
                mainImage: "images/product6_brown_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },

    {
        id: 7,
        title: "Men Casual Short sleeve Polo",
        price: "$62",
        
        description: "This Men Casual Short Sleeve Polo is a versatile and stylish addition to your wardrobe, designed to provide both comfort and a polished look. Made from high-quality, breathable fabric, it ensures a soft and lightweight feel, keeping you comfortable throughout the day. The short sleeve design makes it perfect for warmer weather, while the classic polo collar and button placket add a touch of sophistication. Whether you're heading to a casual outing, a weekend gathering, or a relaxed office day, this polo shirt pairs effortlessly with jeans, chinos, or shorts for a smart-casual ensemble. Its durable stitching and premium material ensure long-lasting wear, making it a reliable choice for any occasion. Elevate your everyday style with this timeless polo shirt, a must-have for anyone seeking a blend of functionality and fashion.",

        colors : [
            {
                name: "Blue",
                mainImage: "images/product7_blue_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },

    {
        id: 8,
        title: "Men Summer Leaf Pattern T-Shirts",
        price: "$70",

        description: "This Men Summer Leaf Pattern T-Shirt is a perfect blend of vibrant style and ultimate comfort, designed to keep you cool and fashionable during the warmer months. Made from high-quality, breathable fabric, it ensures a soft and lightweight feel, making it ideal for all-day wear. The eye-catching leaf pattern adds a tropical and trendy vibe, making it perfect for beach outings, summer parties, or casual get-togethers. Its versatile design pairs effortlessly with shorts, jeans, or chinos, allowing you to create a variety of stylish summer looks. Whether you're heading to a vacation, a barbecue, or simply enjoying a sunny day outdoors, this t-shirt offers both comfort and flair. Its durable stitching and premium material ensure long-lasting wear, making it a reliable and fashionable choice for your summer wardrobe.",

        colors: [
            {
                name: "Green",
                mainImage: "images/product8_green_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    }
];
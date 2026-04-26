// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample in-memory database (array of menu)
let menu = [
    {
        "id": 1,
        "name": "Sandwich",
        "price": 4.99,
        "image": "/images/food1.jpg",
        "description": "An egg mayo and cheese sandwich on fresh bread.",
        "allergens": "Eggs, Dairy, Gluten",
        "calories": 375
    },
    {
        "id": 2,
        "name": "Wrap",
        "price": 4.99,
        "image": "/images/food2.jpg",
        "description": "A crunchy wrap filled with fresh ingredients.",
        "allergens": "Gluten",
        "calories": 550
    },
    {
        "id": 3,
        "name": "Sausage Roll",
        "price": 3.99,
        "image": "/images/food3.jpg",
        "description": "A fresh pork sausage roll made with a beautiful crispy pastry.",
        "allergens": "Eggs, Dairy, Gluten",
        "calories": 350
    },
    {
        "id": 4,
        "name": "Soup",
        "price": 3.99,
        "image": "/images/food4.jpg",
        "description": "Warm homemade soup of the day.",
        "allergens": "Celery",
        "calories": 225
    },
    {
        "id": 5,
        "name": "Salad",
        "price": 3.49,
        "image": "/images/food5.jpg",
        "description": "Freshly prepared assorted salad.",
        "allergens": "None",
        "calories": 372
    },
    {
        "id": 6,
        "name": "Fruit",
        "price": 3.49,
        "image": "/images/food6.jpg",
        "description": "Freshly cut mixed fruit.",
        "allergens": "None",
        "calories": 173
    },
    {
        "id": 7,
        "name": "Brownies",
        "price": 2.99,
        "image": "/images/food7.jpg",
        "description": "Fresh out of the oven chocolate fudge brownie.",
        "allegens": "Dairy, Eggs, Gluten, Nuts",
        "calories": 205
    },
    {
        "id": 8,
        "name": "Muffin",
        "price": 2.99,
        "image": "/images/food8.jpg",
        "description": "Fresh out of the oven bluebarry muffin.",
        "allergens": "Dairy, Eggs, Gluten",
        "calories": 385
    },
    {
        "id": 9,
        "name": "Cookies",
        "price": 2.99,
        "image": "/images/food9.jpg",
        "description": "Fresh out of the oven chocolate chip cookie.",
        "allergens": "Dairy, Eggs, Gluten, Nuts",
        "calories": 195
    }
];

// Route to get all foods
app.get('/menu', (req, res) => {
   res.json(menu);
});

// Route to get a single food item by ID
app.get('/menu/:id', (req, res) => {
   const food = menu.find(food => food.id === parseInt(req.params.id));
//    const food = menu.find(food => food.id === req.params.id);
   if (!food) {
      return res.status(404).json({ message: "Food not found" });
   }
   res.json(food);
});

// Route to create a new food item
app.post('/menu', (req, res) => {
   const { name, price, image, description, allergens } = req.body;
   const newFood = { id: menu.length + 1, name, price, image, description, allergens };
   menu.push(newFood);
   res.status(201).json(newFood);
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
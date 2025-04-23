const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Place your downloaded key here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const items = [
  {
    name: "Classic Burger",
    description: "Juicy beef patty, cheddar cheese, lettuce, tomato, and our special sauce.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Margherita Pizza",
    description: "Stone-baked pizza with fresh mozzarella, basil, and tomato sauce.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sushi Platter",
    description: "Assorted sushi rolls with salmon, tuna, avocado, and cucumber.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine, parmesan, croutons, and Caesar dressing.",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Tender chicken in creamy tomato curry, served with basmati rice.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with gooey molten center and vanilla ice cream.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Bubble Tea",
    description: "Refreshing milk tea with chewy tapioca pearls.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries with ketchup and mayo.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Veggie Wrap",
    description: "Whole wheat wrap with grilled veggies and hummus.",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Berry Smoothie",
    description: "Blend of strawberries, blueberries, and yogurt.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
  }
];

async function upload() {
  for (const item of items) {
    await db.collection('menu').add(item);
    console.log('Added:', item.name);
  }
  console.log('All items uploaded!');
}

upload();
function getRecommendations(type) {
  const recommendations = {
    movies: [
      "Inception",
      "The Shawshank Redemption",
      "Interstellar",
      "The Dark Knight"
    ],
    books: [
      "Atomic Habits by James Clear",
      "The Alchemist by Paulo Coelho",
      "Sapiens by Yuval Noah Harari",
      "Harry Potter series by J.K. Rowling"
    ],
    products: [
      "Wireless Earbuds",
      "Smart Watch",
      "Portable Bluetooth Speaker",
      "Kindle E-Reader"
    ]
  };

  const list = document.getElementById("recommendations-list");
  const box = document.getElementById("recommendation-box");

  // Clear previous list
  list.innerHTML = "";

  // Show new recommendations
  recommendations[type].forEach(item => {
    const li = document.createElement("li");
    li.textContent = `• ${item}`;
    list.appendChild(li);
  });

  box.style.display = "block";
}

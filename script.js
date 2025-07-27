//your code here!

// Initialize the list of items
let itemCount = 10;

// Reference to the list and loading element
const itemList = document.getElementById('itemList');

// Function to add items to the list
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount + i + 1}`;
        itemList.appendChild(li);
    }
    itemCount += count;
}

// Add initial items
addItems(10);

// Infinite scroll functionality
function onScroll() {
    // Check if the user has scrolled to the bottom
    const scrollPosition = itemList.scrollTop + itemList.clientHeight;
    const scrollHeight = itemList.scrollHeight;

    if (scrollPosition >= scrollHeight - 50) {
        // Add more items if we are near the bottom
        addItems(2);
    }
}

// Add the scroll event listener
itemList.addEventListener('scroll', onScroll);

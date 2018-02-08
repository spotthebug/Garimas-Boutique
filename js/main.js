// Accessing the nav a elements
var dressLink = document.getElementById('add-dresses');
var topLink = document.getElementById('add-tops');
var outerwearLink = document.getElementById('add-outerwear');

// Accessing div to add dresses
var addDressOne = document.getElementById('one');
var addDressTwo = document.getElementById('two');

// Accessing div to add tops
var addTopsOne = document.getElementById('three');
var addTopsTwo = document.getElementById('four');

// Accessing div to add outerwear
var addOuterwearOne = document.getElementById('five');
var addOuterwearTwo = document.getElementById('six');


// Array referring to dresses
dressColumnOne = ['<img class="image-sizing"src="../assets/bluecocktail.jpg" alt="Black dress with contrasting trimmings">', '<img class="image-sizing"src="../assets/blueprom.jpg" alt="White colored prom dress with blue lace bodice.">', '<img class="image-sizing"src="../assets/floraldress.jpg" alt="Chic floral dress.">'];
dressColumnTwo = ['<img class="image-sizing"src="../assets/promdress.jpg" alt="Prom dress">', '<img class="image-sizing"src="../assets/shiftdress.jpg" alt="Black shift dress">','<img class="image-sizing"src="../assets/denimdress.jpg" alt="Yellow dress">'];


// Array referring to tops
topsColumnOne = ['<img class="image-sizing"src="../assets/pearls.jpg" alt="Blue top with pearls.">', '<img class="image-sizing"src="../assets/blackcroptop.jpg" alt="Black crop top.">','<img class="image-sizing"src="../assets/CamisaChiffon.jpg" alt="Chiffon top.">'];
topsColumnTwo = ['<img class="image-sizing"src="../assets/blousesv-neck.jpg" alt="V-neck blouse">','<img class="image-sizing"src="../assets/peachblouse.jpg" alt="Peach blouse.">','<img class="image-sizing"src="../assets/limegreentop.jpg" alt="Lime green top.">'];


// Array referring to outerwear
outerwearColumnOne = ['<img class="image-sizing"src="../assets/chic.jpeg" alt="Jacket with gold buttons">', '<img class="image-sizing"src="../assets/patagonia.jpg" alt="Wilderness wear">', '<img class="image-sizing"src="../assets/leatherjacket.jpeg" alt="Chic floral dress.">'];
outerwearColumnTwo = ['<img class="image-sizing"src="../assets/fur.jpg" alt="Prom dress">', '<img class="image-sizing"src="../assets/velvet.jpg" alt="Velvet Jackets">', '<img class="image-sizing"src="../assets/burberry.jpeg" alt="Burberry jacket">'];


// Add dresses dynamically to html
dressLink.addEventListener("click", function() {
  for (var i = 0; i < dressColumnOne.length; i++) {
    addDressOne.innerHTML += dressColumnOne[i];
    addDressOne.innerHTML += '<button class="button">Add To Cart</button>';
  };

  for (var i = 0; i < dressColumnTwo.length; i++) {
    addDressTwo.innerHTML += dressColumnTwo[i];
    addDressTwo.innerHTML += '<button class="button">Add To Cart</button>';
  }

});


// Add tops dynamically to html
topLink.addEventListener("click", function() {
  for (var i = 0; i < topsColumnOne.length; i++) {
    addTopsOne.innerHTML += topsColumnOne[i];
    addTopsOne.innerHTML += '<button class="button">Add To Cart</button>';
  };

  for (var i = 0; i < topsColumnTwo.length; i++) {
    addTopsTwo.innerHTML += topsColumnTwo[i];
    addTopsTwo.innerHTML += '<button class="button">Add To Cart</button>';
  };

});


// Add outerwear dynamically to html
outerwearLink.addEventListener("click", function() {
  for (var i = 0; i < outerwearColumnOne.length; i++) {
    addOuterwearOne.innerHTML += outerwearColumnOne[i];
    addOuterwearOne.innerHTML += '<button class="button">Add To Cart</button>';
  };

  for (var i = 0; i < outerwearColumnTwo.length; i++) {
    addOuterwearTwo.innerHTML += outerwearColumnTwo[i];
    addOuterwearTwo.innerHTML += '<button class="button">Add To Cart</button>';
  };

});



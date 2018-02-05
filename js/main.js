var dressLink = document.getElementById('add-dresses');
var topLink = document.getElementById('add-tops');
var outerwearLink = document.getElementById('add-outerwear');

var addDressOne = document.getElementById('one');
var addDressTwo = document.getElementById('two');

var addTopsOne = document.getElementById('three');
var addTopsTwo = document.getElementById('four');

var addOuterwearOne = document.getElementById('five');
var addOuterwearTwo = document.getElementById('six');

dressLink.addEventListener("click", function() {
  addDressOne.innerHTML += '<img class="image-sizing"src="../assets/bluecocktail.jpg" alt="Black dress with contrasting trimmings">';
  addDressOne.innerHTML += '<button class="button">Add To Cart</button>';
  addDressOne.innerHTML += '<img class="image-sizing"src="../assets/blueprom.jpg" alt="White colored prom dress with blue lace bodice.">';
  addDressOne.innerHTML += '<button class="button">Add To Cart</button>';
  addDressOne.innerHTML += '<img class="image-sizing"src="../assets/floraldress.jpg" alt="Chic floral dress.">';
  addDressOne.innerHTML += '<button class="button">Add To Cart</button>';
  addDressTwo.innerHTML += '<img class="image-sizing"src="../assets/promdress.jpg" alt="Prom dress">';
  addDressTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addDressTwo.innerHTML += '<img class="image-sizing"src="../assets/shiftdress.jpg" alt="Black shift dress">';
  addDressTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addDressTwo.innerHTML += '<img class="image-sizing"src="../assets/denimdress.jpg" alt="Yellow dress">';
  addDressTwo.innerHTML += '<button class="button">Add To Cart</button>';
});

topLink.addEventListener("click", function() {
  addTopsOne.innerHTML += '<img class="image-sizing"src="../assets/pearls.jpg" alt="Blue top with pearls.">';
  addTopsOne.innerHTML += '<button class="button">Add To Cart</button>';
  addTopsOne.innerHTML += '<img class="image-sizing"src="../assets/blackcroptop.jpg" alt="Black crop top.">';
  addTopsOne.innerHTML += '<button class="button">Add To Cart</button>';
  addTopsOne.innerHTML += '<img class="image-sizing"src="../assets/CamisaChiffon.jpg" alt="Chiffon top.">';
  addTopsOne.innerHTML += '<button class="button">Add To Cart</button>';
  addTopsTwo.innerHTML += '<img class="image-sizing"src="../assets/blousesv-neck.jpg" alt="V-neck blouse">';
  addTopsTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addTopsTwo.innerHTML += '        <img class="image-sizing"src="../assets/peachblouse.jpg" alt="Peach blouse.">';
  addTopsTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addTopsTwo.innerHTML += '<img class="image-sizing"src="../assets/limegreentop.jpg" alt="Lime green top.">';
  addTopsTwo.innerHTML += '<button class="button">Add To Cart</button>';
});

outerwearLink.addEventListener("click", function() {
  addOuterwearOne.innerHTML += '<img class="image-sizing"src="../assets/chic.jpeg" alt="Jacket with gold buttons">';
  addOuterwearOne.innerHTML += '<button class="button">Add To Cart</button>';
  addOuterwearOne.innerHTML += '<img class="image-sizing"src="../assets/patagonia.jpg" alt="Wilderness wear">';
  addOuterwearOne.innerHTML += '<button class="button">Add To Cart</button>';
  addOuterwearOne.innerHTML += '<img class="image-sizing"src="../assets/leatherjacket.jpeg" alt="Chic floral dress.">';
  addOuterwearOne.innerHTML += '<button class="button">Add To Cart</button>';
  addOuterwearTwo.innerHTML += '<img class="image-sizing"src="../assets/fur.jpg" alt="Prom dress">';
  addOuterwearTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addOuterwearTwo.innerHTML += '<img class="image-sizing"src="../assets/velvet.jpg" alt="Velvet Jackets">';
  addOuterwearTwo.innerHTML += '<button class="button">Add To Cart</button>';
  addOuterwearTwo.innerHTML += '<img class="image-sizing"src="../assets/burberry.jpeg" alt="Burberry jacket">';
  addOuterwearTwo.innerHTML += '<button class="button">Add To Cart</button>';
})



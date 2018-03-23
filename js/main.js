// Price Controller
var priceController = (function(){
  let totalPrice = 0;

  return{
    updateTotalPrice: function(itemPrice){
      totalPrice += parseFloat(itemPrice);
    },
    getTotalPrice: function(){
      return totalPrice;
    }
  }
})();

// UI Controller
var UIController = (function(){
  let orderItemString =
    '<li>\
        <div>\
        <h6>%title%</h6>\
        <p> <span class="price">%price%</span></p>\
        </div>\
        <p class="t-order">%order-options%</p>\
      </li>';

  function appendHtml(newHtml){
    $('.pos-order-content ul').append(newHtml);
  }
  
  return{
    loadHtml: function(category){
      $('.pos-food-list .row').load('../categories/' + category + '.html');
    },
    highlightCategory: function(categoryHighlight){
      categoryHighlight.siblings().removeClass('pos-nav-click');
      categoryHighlight.toggleClass('pos-nav-click');
    },
    addHtml: function(itemTitle,itemPrice, itemOptions ){
      let newHtml = orderItemString;
      newHtml = newHtml.replace('%title%', itemTitle );
      newHtml = newHtml.replace('%price%', '$' + itemPrice);
      newHtml = newHtml.replace('%order-options%',  itemOptions);
      appendHtml(newHtml);
    },
    updateTotalPrice: function(newTotalPrice){
      $('.pos-order-footer p').text("$" + newTotalPrice.toFixed(2));
    }
  }
})();


// App Controller
var appController = (function(priceCtrl, UICtrl){
  /*
    1. Add an event listener for when the user clicks on the category.
       Then get the category name and pass it to loadHTML function in the
       UI controller to load the respective HTML for the category.  Lastly,
       pass the element that was clicked on to be highlighted in the UI
       Controller.
  */
   $('#nav-list li').on('click', function(){
     UICtrl.loadHtml($(this).text());
     UICtrl.highlightCategory($(this));
  });

  /*
    2. Add an event listener when a user wants to add an item to the order.  Also, retrive the name, price,
    and options of the  order.
  */
  $('.entree-btn-order').on("click", function(event){
     let itemName = $(event.target).parent().parent().find('.modal-title').text();
     let price = $(event.target).parent().find('.item-price .price').text().substring(1);
    let options = $('#entreemodal .options .row').find(':checked');
   let optionList = []
    for(let i = 0; i < options.length; i++){
      optionList[i] = options[i].value;
    }
    optionList = optionList.join(' | ');

    // Pass the price to the price adjuster function so it can be manipulates
    priceAdjuster(price);

    // pass the itemName and optionList to update orders- 
    updateOrder(itemName, price, optionList)
  });

  /* For appetizer modal*/
  $('.appetizer-btn-order').on("click", function(event){
    let itemName = $(event.target).parent().parent().find('.modal-title').text();
    let price = $(event.target).parent().find('.item-price .price').text().substring(1);
   let options = $('#appetizermodal .options .row').find(':checked');
  let optionList = []
   for(let i = 0; i < options.length; i++){
     optionList[i] = options[i].value;
   }
   optionList = optionList.join(' | ');

   // Pass the price to the price adjuster function so it can be manipulates
   priceAdjuster(price);

   // pass the itemName and optionList to update orders- 
   updateOrder(itemName, price, optionList)
 });

 /* For specials modal*/
$('.specials-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#specialsmodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

  // 5. Update the total price in the priceController
  function priceAdjuster(newPrice){
    priceCtrl.updateTotalPrice(newPrice);

  }

  /* For salads modal*/
$('.salads-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#saladsmodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

  // 5. Update the total price in the priceController
  function priceAdjuster(newPrice){
    priceCtrl.updateTotalPrice(newPrice);

  }

   /* For soda modal*/
 $('.soda-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#sodamodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

 /* For soda modal*/
 $('.wines-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#winesmodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

 /* For beer modal*/
 $('.beer-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#beermodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

  /* For soda modal*/
 $('.deserts-btn-order').on("click", function(event){
  let itemName = $(event.target).parent().parent().find('.modal-title').text();
  let price = $(event.target).parent().find('.item-price .price').text().substring(1);
 let options = $('#desertsmodal .options .row').find(':checked');
let optionList = []
 for(let i = 0; i < options.length; i++){
   optionList[i] = options[i].value;
 }
 optionList = optionList.join(' | ');

 // Pass the price to the price adjuster function so it can be manipulates
 priceAdjuster(price);

 // pass the itemName and optionList to update orders- 
 updateOrder(itemName, price, optionList)
});

  // 6. Update the Order Details with the new item and total price
  function updateOrder(itemName, price,  options){
    UICtrl.addHtml(itemName, price, options);
    UICtrl.updateTotalPrice(priceCtrl.getTotalPrice());
  }

})(priceController, UIController);


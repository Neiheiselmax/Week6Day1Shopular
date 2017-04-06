(function() {
    'use strict';

    angular
        .module('taco')
        .controller('TableController', function(API) {

          const vm = this;

        vm.items = API.getData();
        vm.tax=1.0575;



          vm.update = function update(isValid) {
          if (isValid) {
          let newItem = {"name": vm.item.name, "price": vm.item.price, "quantity": vm.item.quantity, "color": vm.item.color, "discount": vm.item.discount};
          vm.items = API.saveItem(newItem)

          vm.item = {}
           }else{
            alert("Form Incomplete")
           }  
        }

        vm.changeQuantity = function(item,upOrNot){
          if (upOrNot)
          {
            item.quantity++;
          }
            else
            {
              item.quantity--;
            }
          }
        



        });
})();

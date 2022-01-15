'use strict';

var counter = makeCounter();

$(document).ready(renderAllGoods(30));
$(document).ready(counter.reset());

// function addToCart(idGood) {
//   var str = "addCartId=" + idGood;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     }
//   });
// };
//
// function deleteFromCart(idGood) {
//   var str = "delCartId=" + idGood;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     dataType: 'json', // тип ожидаемых данных в ответе
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function (response) {//удаляем вёрстку одного товвара
//       $('#' + response).detach();
//     }
//   });
// };

// function increaseCart(idGood) {
//   let str = "increaseCartId=" + idGood;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function (response) {
//       let obj = jQuery.parseJSON(response);
//       $('#amount' + obj.id).val(obj.amount);
//       $('#price' + obj.id).text('$' + obj.sumPrice);
//     }
//   });
// };
//
// function decreaseCart(idGood) {
//   var str = "decreaseCartId=" + idGood;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function (response) {
//       let obj = jQuery.parseJSON(response);
//       $('#amount' + obj.id).val(obj.amount);
//       $('#price' + obj.id).text('$' + obj.sumPrice);
//     }
//   });
// };

// function decreaseAmount(id) {
//   var str = "decreaseAmount=" + id;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function (response) {
//       $('#amount' + id).val(response);
//     }
//   });
// };
//
// function increaseAmount(id) {
//   var str = "increaseAmount=" + id;
//   $.ajax({
//     url: '../controllers/cartController.php', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function (response) {
//       $('#amount' + id).val(response);
//     }
//   });
// };

function makeCounter() {
  var currentCount = 1;

  return { // возвратим объект вместо функции
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    }
  };
}



// function changeAmountOnPage(selectedValue, increment = 0) {
//   if (increment != 0) {
//     selectedValue = parseInt(selectedValue) + parseInt(increment)*parseInt(counter.getNext());
//   }
//   let str = "amountOnPage=" + selectedValue;
//   $.ajax({
//     url: '', // путь к php-обработчику
//     type: 'POST', // метод передачи данных
//     data: str, // данные, которые передаем на сервер
//     error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
//       alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
//     },
//     success: function () {
//       console.log(selectedValue);
//       renderAllGoods(selectedValue);
//     }
//   });
// }

// $('#amountOnPage').change(function() {
//   alert('The option with value ' + $(this).val() + ' and text ' + $(this).text() + ' was selected.');
// });



function renderAllGoods(selectedValue) {
  $.ajax({
    url: '', // путь к php-обработчику
    type: 'POST', // метод передачи данных
    dataType: 'json', // тип ожидаемых данных в ответе
    data: selectedValue, // данные, которые передаем на сервер
    error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
      alert('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
    },
    success: function (dataAnswer) {
      console.log(dataAnswer);
      let goods = '';
      console.log(dataAnswer);
      for (let key in dataAnswer) {
        goods += '<div class="good"><a href="good.php?id=' + dataAnswer[key].id + '">' +
          '<img src="' + dataAnswer[key].src + '" alt="' + dataAnswer[key].name + '" title="' + dataAnswer[key].name +
          '"></a>' +
          '<h3 class="good-name"><a href="good.php?id=' + dataAnswer[key].id + '">' + '</a></h3>' +
          '<p class="price">$' + dataAnswer[key].price +
          '</p><p><input type="button" value=\'Add to cart\' onclick="addToCart(' + dataAnswer[key].id +
          ')" class="add-to-basket"></p></div>'
      }

      $('.productList').html(goods);
    }
  });
}
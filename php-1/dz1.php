<?php
 /*
  1. Придумать класс, который описывает любую сущность из предметной области интернет-магазинов: продукт, ценник, посылка и т.п.
  2. Описать свойства класса из п.1 (состояние).
  3. Описать поведение класса из п.1 (методы).
  4. Придумать наследников класса из п.1. Чем они будут отличаться? 
 */
 class ProductShop { 
    private $itemName;            // название товара
    private $itemDescription;   // описание товара
    private $price;               // цена
    private $condition;          // состояние
     public function __construct($itemName, $itemDescription, $price, $condition) {
        $this->itemName = $itemName;
        $this->itemDescription = $itemDescription;
        $this->price = $price;
        $this->condition = $condition;
    }
     public function getItemName() {
        return $this->itemName; 
    }
     public function getItemDescription() {
        return $this->itemDescription;
    }
     public function getPrice() {
        return $this->price;
    } 
     public function getCondition() {
        return $this->condition;
    }
     protected function getInfo() {
        $info = 'Наименование: ' . $this->itemName . '<br>' . //PHP_EOL .
                'Описание: ' . $this->itemDescription . '<br>' . //PHP_EOL .
                'Состояние: ' . $this->condition . '<br>' . //PHP_EOL .
                'Цена: ' . $this->price . '<br>'; //PHP_EOL;
        return $info;
    }
 }
 class PhoneProduct extends ProductShop {
     private $simCardCount;
     public function __construct($itemName, $itemDescription, $price, $condition, $simCardCount) {
        parent::__construct($itemName, $itemDescription, $price, $condition);
        $this->simCardCount = $simCardCount;
    }
     public function getSimCardCount() {
        return $this->simCardCount;
    }
     public function getInfo() {
        $info = parent::getInfo() . 'Количество SIM-карт: ' . $this->simCardCount;
        return $info;
    }
 }
 class AutoProduct extends ProductShop {
     private $typeOfFuel;
     public function __construct($itemName, $itemDescription, $price, $condition, $typeOfFuel) {
        parent::__construct($itemName, $itemDescription, $price, $condition);
        $this->typeOfFuel = $typeOfFuel;
    }
     public function gettypeOfFuel() {
        return $this->typeOfFuel;
    }
     public function getInfo() {
        $info = parent::getInfo() . 'Вид топлива: ' . $this->typeOfFuel;
        return $info;
    }
 }
 $phone = new PhoneProduct('zenPhone', 'Какой-то телефон', 12000, 'Новый', 2);
echo $phone->getInfo();
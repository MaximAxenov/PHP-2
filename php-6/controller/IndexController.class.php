<?php

class IndexController extends Controller
{
  public $view = 'index';
  public $title;

  function __construct()
  {
    parent::__construct();
    $this->title .= '';
  }

  //Метод, который отправляет в представление информацию в виде переменной content_data
//  function index($data)
//  {
//    return db::getInstance()->Select("SELECT * FROM goods", $selectedValue);
//  }

  function index($selectedValue)
  {
    $goods = db::getInstance()->Select("SELECT * FROM goods, images where goods.id = images.id_good");
    return $goods;


  }


}

//site/index.php?path=index/test/5
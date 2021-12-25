<?php


define('SITE_ROOT', dirname(__DIR__) . '/');
define('WWW_ROOT', SITE_ROOT . 'public/');
define('TPL_DIR', SITE_ROOT . 'templates/');
define('ENG_DIR', SITE_ROOT . 'engine/');
define('DATA_DIR', SITE_ROOT . 'data/');
define('TWIG_DIR', SITE_ROOT . 'Twig/');
define('IMG_DIR', 'img/');


require_once(ENG_DIR . 'functions.php');

require_once(TWIG_DIR . 'Autoloader.php');
Twig_Autoloader::register();
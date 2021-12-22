<?php

trait ForSingleton {
    
    private function __construct() {  } 
	
    
    public static function getInstance() {
        if ( empty(self::$instance) ) {
            self::$instance = new self();
        }
        return self::$instance;                     
    }   

}

class Singleton {
    
    private static $instance;
    
	public function doAction() { 
	   echo "Singleton";
    }
    use ForSingleton;

}

$obj_1 = Singleton::getInstance();
$obj_2 = Singleton::getInstance();

var_dump($obj_1 === $obj_2);    // The Same object


?>

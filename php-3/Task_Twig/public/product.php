<?php

require_once(dirname(__DIR__) . '/config/config.php');

if (!empty($_GET['id'])) {
    $id = $_GET['id'];
} else {
    exit('Товар не найден');
}

try {
    $loader = new Twig_Loader_Filesystem(TPL_DIR);
    $twig = new Twig_Environment($loader);
    $template = $twig->loadTemplate('v_product.tmpl');

    $content = $template->render([
        'title' => 'Продукт ' . $id,
        'header' => 'Продукт ' . $id,
        'src' => 'img/' . $id . '.jpg'
    ]);

    echo $content;
    
} catch (Exception $e) {
    die('ERROR: ' . $e->getMessage());
}



?>
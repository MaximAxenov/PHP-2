<?php

require_once(dirname(__DIR__) . '/config/config.php');


try {
    $loader = new Twig_Loader_Filesystem(TPL_DIR);
    $twig = new Twig_Environment($loader);
    $template = $twig->loadTemplate('v_gallery.tmpl');

    $product = create_gallery(IMG_DIR);

    $content = $template->render([
        'title' => 'Галерея',
        'header' => 'Галерея картинок',
        'product' => $product
    ]);

    echo $content;
    
} catch (Exception $e) {
    die('ERROR: ' . $e->getMessage());
}

?>
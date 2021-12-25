<?php

// Возвращает массив данных по каждой картинке из указанной директории $dir

function create_gallery($dir)
{
    $img_array = scandir($dir);


    foreach ($img_array as $key => $file_name) {
        if (is_file($dir . $file_name)) {

            $source = $dir . $file_name;
            $product_name = mb_substr($file_name, -5, 1, 'utf-8');

            $product[$key]['title'] = 'Продукт ' . $product_name;
            $product[$key]['src'] = $source;
            $product[$key]['link'] = 'product.php?id=' . $product_name;
        }
    }
    return $product;
}
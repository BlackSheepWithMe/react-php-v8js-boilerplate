<?php

$remove = explode('/', realpath(dirname(__FILE__)));
$remove = array_filter($remove);
$arr = explode('/', strtok($_SERVER["REQUEST_URI"], '?'));
$arr = array_filter($arr);
$uri = '';
$base = '';

foreach ($arr as $v) {
  if (!in_array($v, $remove)) {
    $uri .= '/' . $v;
  } else {
    $base .= '/' . $v;
  }
}

$uri .= '/';
$base .= '/';

if (class_exists('V8Js')) {
  function executeJS($js, $u)
  {
    $js = implode(';', array(
        'const uri = \'' . $u . '\'',
        $js
    ));

    $v8js = new V8Js();

    try {
      ob_start();
      $v8js->executeString($js);
      return ob_get_clean();
    } catch (V8JsException $e) {
      echo "<pre>" . $e->getMessage() . "</pre>";
      die();
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <base href="<?=$base;?>">
  <link rel="stylesheet" href="build/css/main.css">
</head>
<body>
  <?php
  if (class_exists('V8Js') && file_exists('build/js/app.js')) {
    echo "<div id=\"app\"><div>" . executeJS(file_get_contents('build/js/app.js'), $uri) . "</div></div>";
  } else {
    echo "<div id=\"app\"></div>";
  }
  ?>
</body>
<script src="build/js/app.js"></script>
</html>

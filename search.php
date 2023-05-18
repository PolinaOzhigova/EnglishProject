<?php
// Получение данных из формы
$var = $_POST['search'];

$var1 = strtolower(str_replace(' ', '', $var));
echo $var;

// Проверка существования директории
$directory = './pages/' . $var1;
echo $directory;
if (is_dir($directory)) {
    // Открытие файла page.html из директории
    $file = $directory . '/page.html';
    echo $file;
    if (file_exists($file)) {
        echo "work";
        header("Location: $file");
        exit;
    }
}

?>
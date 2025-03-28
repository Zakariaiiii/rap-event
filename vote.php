<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$file = __DIR__ . '/votes.json';

// البيانات الافتراضية
$defaultVotes = [
    'BIG A' => 0,
    'mirv48' => 0,
    'Shaoline' => 0,
    'aessa' => 0,
    'krak3n' => 0
];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // قراءة الأصوات
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo json_encode($defaultVotes);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // تسجيل التصويت
    $input = json_decode(file_get_contents('php://input'), true);
    $votes = file_exists($file) ? json_decode(file_get_contents($file), true) : $defaultVotes;
    
    if (isset($input['artist']) && isset($votes[$input['artist']])) {
        $votes[$input['artist']]++;
        file_put_contents($file, json_encode($votes));
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Invalid vote']);
    }
}
?>
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'title' => 'Dashboard'
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/routers', function () {
    return Inertia::render('MikrotikServer', [
        'title'=> 'Mikrotik Servers'
    ]);
})->middleware(['auth','verified'])->name('routers');

require __DIR__ . '/auth.php';

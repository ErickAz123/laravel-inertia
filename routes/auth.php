<?php

use App\Http\Controllers\Auth\LoginAuthUser;
use App\Http\Controllers\Auth\RegisterNewUser;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('Register', [RegisterNewUser::class, 'create'])
    ->name('Register');

    Route::post('Register', [RegisterNewUser::class,'store']);

    Route::get('Login', [LoginAuthUser::class,'create'])
    ->name('Login');

    Route::post('Login', [LoginAuthUser::class,'store']);
});


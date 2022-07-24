<?php

use App\Http\Controllers\web\UserManagementController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix'  =>  'frontend'], function () {
    Route::controller(UserManagementController::class)->group(function () {
        Route::get('/users', 'index')->name('user.list');
    });
});
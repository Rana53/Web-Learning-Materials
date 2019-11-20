<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','HomeController@home');
Route::get('home','HomeController@home')->name('home');
Route::get('contact/us','HomeController@contact')->name('contact');
Route::get('about/us','HomeController@about')->name('about');

// product operation
Route::get('products','ProductsController@showAllProduct');
Route::get('products/all','ProductsController@showAllProduct')->name('allproducts');
Route::get('products/create','ProductsController@createProduct')->name('createproducts');
Route::post('products/create','ProductsController@storeProduct')->name('store.product');
Route::get('products/single/{pid}','ProductsController@showSingleProduct');
Route::get('products/single/remove/{pid}','ProductsController@removeSingleProduct');
Route::get('products/single/edit/{pid}', 'ProductsController@editSingleProduct');
Route::post('products/single/update/{pid}', 'ProductsController@updateSingleProduct');
?>
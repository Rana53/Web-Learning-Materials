<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class ProductsController extends Controller
{
    public function showAllProduct(){
        $allProduct = DB::table('products')->get();
        //return response()->json($allProduct);
        return view('pages.products.product-list', compact('allProduct'));
    }

    public function createProduct(){
        return view('pages.products.product-create');
    }
    public function storeProduct(Request $req){
        $data = array();
        $data['pId'] = $req->producId;
        $data['pName'] = $req->producName;
        $data['price'] = $req->producPrice;
        $data['details'] = $req->productDetails;
        
        $product = DB::table('products')->insert($data);
        return view('pages.products.product-create-success');
    }

    public function showSingleProduct($pid){
        $product = DB::table('products')->where('pId',$pid)->first();
        return view('pages.products.product-single-details',compact('product'));
    }
    public function removeSingleProduct($pid) {
        echo "yes";
        $data = DB::table('products')->where('pId',$pid)->delete();
        return redirect('products/all');
    }
}

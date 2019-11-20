@extends('welcome')
@section('content')
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{{$product->pName}} : Product Details</h1>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
        <h6><strong>Product Id: </strong>{{$product->pId}}<h6>
        <h6><strong>Product Name: </strong>{{$product->pName}}<h6>
        <h6><strong>Product Price: </strong>{{$product->price}}<h6>
        <h6><strong>Product Details: </strong>{{$product->details}}<h6>
    </div>
  </div>
</div>
@endsection
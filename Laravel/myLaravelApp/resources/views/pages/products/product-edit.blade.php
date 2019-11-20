@extends('welcome')
@section('content')
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Update: {{$p->pName}}</h1>
  </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
        <hr>
        <form action="{{ url('products/single/update/'.$p->pId)}}" method="post">
            @csrf
            <div class="form-group">
                <label>Product Id</label>
                <input type="text" class="form-control" placeholder="Enter Product Id" value="{{$p->pId}}" name="producId">
            </div>
            <div class="form-group">
                <label>Product Name</label>
                <input type="text" class="form-control" placeholder="Enter Product Name" value="{{$p->pName}}" name="producName">
            </div>
            <div class="form-group">
                <label>Product Price</label>
                <input type="number" class="form-control" placeholder="Enter Product Price" value="{{$p->price}}" name="producPrice">
            </div>
            <div class="form-group">
                <label>Product Details</label>
                <textarea class="form-control" rows="4" value="{{$p->details}}" name="productDetails"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">update</button>
        </form>
        </div>
    </div>
</div>
@endsection

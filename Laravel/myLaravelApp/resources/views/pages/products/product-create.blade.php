@extends('welcome')
@section('content')
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Create Product.....</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
        <hr>
        <form action="{{route('store.product')}}" method="post">
            @csrf
            <div class="form-group">
                <label>Product Id</label>
                <input type="text" class="form-control" placeholder="Enter Product Id" name="producId">
            </div>
            <div class="form-group">
                <label>Product Name</label>
                <input type="text" class="form-control" placeholder="Enter Product Name" name="producName">
            </div>
            <div class="form-group">
                <label>Product Price</label>
                <input type="number" class="form-control" placeholder="Enter Product Price" name="producPrice">
            </div>
            <div class="form-group">
                <label>Product Details</label>
                <textarea class="form-control" rows="4" name="productDetails"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
</div>
@endsection

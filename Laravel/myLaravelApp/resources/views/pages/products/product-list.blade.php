@extends('welcome')
@section('content')
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Product list.....</h1>
  </div>
</div>
<hr>
<div class="container">
  <div class="row">
    <div class="col">
      <table class="table">
        <tr>
          <th scope="col">Product Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Details</th>
          <th scope="col">Action</th>
        </tr>
      @foreach($allProduct as $product)
        <tr>
            <td>{{$product->pId}}</td>
            <td>{{$product->pName}}</td>
            <td>{{$product->price}}</td>
            <td><a href="{{ URL::to('products/single/'.$product->pId)}}" class="btn btn-sm btn-info">Details</a></td>
            <td>
              <a href="{{ URL::to('products/single/edit/'.$product->pId)}}" class="btn btn-sm btn-info">Edit</a>
              <a href="{{ URL::to('products/single/remove/'.$product->pId)}}" class="btn btn-sm btn-danger" >Delete</a>
            </td>
        </tr>
      @endforeach  
      </table>
    </div>
  </div>
</div>
@endsection
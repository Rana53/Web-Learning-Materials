@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
    <h2>User Login</h2>
    <br>
    <form action="{{url('polling/login/user')}}" method="POST">
      @csrf
      <label>Enter Valid roll </label>
      <input type="text" placeholder="enter a valid roll" require name="userId">
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</div>
@endsection
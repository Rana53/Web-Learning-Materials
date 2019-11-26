@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
  </div>
  <div>
    <form action="{{route('polling.login')}}" method="POST">
      @csrf
      <input type="submit" class="btn btn-danger btn-sm" name = "1" value="User-login" >
    </form> 

    <form action="{{route('polling.login')}}" method="POST">
      @csrf
      <input type="submit" class="btn btn-success btn-sm" name = "option" value="Admin-login">
    </form>
  </div>
</div>
@endsection
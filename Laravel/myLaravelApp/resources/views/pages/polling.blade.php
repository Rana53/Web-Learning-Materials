@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
  </div>
  <div>
    <form action="{{url('polling/login')}}" method="POST">
      @csrf
      <input type="submit" class="btn btn-danger btn-lg" name = "option" value="User-login" >
    </form> 
   <br>
    <form action="{{url('polling/login/')}}" method="POST">
      @csrf
      <input type="submit" class="btn btn-success btn-lg" name = "option" value="Admin-login">
    </form>
  </div>
</div>
@endsection

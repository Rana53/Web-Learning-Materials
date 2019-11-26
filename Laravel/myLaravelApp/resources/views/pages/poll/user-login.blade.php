@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
    <h2>User Login</h2>
    <form>
      <label>Enter Valid roll</label>
      <input type="text" placeholder="ender a valid roll" require name="id">
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</div>
@endsection
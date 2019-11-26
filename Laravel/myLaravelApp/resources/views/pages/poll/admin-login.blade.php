@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
    <h2>Admin Login</h2>
    
    <form>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control"placeholder="Enter email" value="email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control"  placeholder="Password" value="password">
  </div>
 
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  </div>
</div>
@endsection
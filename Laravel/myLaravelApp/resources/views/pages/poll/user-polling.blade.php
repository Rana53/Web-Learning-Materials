@extends('welcome')
@section('content')
<div>
<div class="jumbotron jumbotron-fluid">
  <div class="container"> 
    <h1 class="display-4">Polling System</h1>
    <h2>User Successfully Login</h2>
  </div>
  <h4>Select your poll</h4>
</div>
<div>
<form>
    <fieldset>
        <legend>Select your poll</legend>
        @foreach($events as $e)
        <input type="radio" name="favorite_pet" value="selectValue">{{$e->place}}<br>
        <br>
        @endforeach
        <input type="submit" value="Submit now">
    </fieldset>
</form>
</div>
@endsection

<input type="radio" name="favorite_pet" value="Dogs">Dogs<br>
<input type="radio" name="favorite_pet" value="Birds">Birds<br>
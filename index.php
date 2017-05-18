<!DOCTYPE html>
<html>
<head>
	<title>Fantastic Books</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="bootstrap.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">	
</head>
<br>
<body class="container-fluid">

	<div class="row">
		<div class="Título col-xs-12  col-md-12">
		<h4>Fantastic Books</h4>
		</div>
	</div>

	<br>
	<br>

	<div class="row Começar">
		<div class="Começar1 col-xs-6 col-xs-offset-3">
			<br>
			<h2>Click the Image <br> <br> To begin your Hogwarts adventure</h2>
			<br>
			<button type="submit" class="Inicio">
			</button>
		</div>
	</div>

	<div class="row">
		<div class="locais">
		</div>
		<div class="botoes col-xs-6 col-xs-offset-3">	
			<button type="button" class="botao btn btn-default btn-sm col-xs-4 col-xs-offset-1">
				<span class="glyphicon glyphicon-thumbs-up"></span> Like 
			</button>
			<button type="button" class="botao1 btn btn-default btn-sm col-xs-4 col-xs-offset-2">
				<span class="glyphicon glyphicon-thumbs-down"></span> Dislike 
			</button>
		</div>
	</div>

	<div class="col-xs-4 col-xs-offset-4" id="Repetir">
		<div class="row">
			<div class="Resultados">
				<br>
				<h6>Results of your choices</h6>
				<br>					
				<span class="glyphicon glyphicon-thumbs-up"></span>  Number of books that you liked:  <label id="counter"></label>
				<br>
				<span class="glyphicon glyphicon-thumbs-down"></span>  Number of books that you disliked:  <label id="counter1"></label>
				<br>
				<br>
				<button type="button" class="Repetir col-xs-4 col-xs-offset-4 btn btn-default btn-sm">
					<span class="glyphicon glyphicon-repeat"></span> Try Again
				</button>
				<br>
			</div>
		</div>
	</div>

	<footer class="col-xs-12  col-md-12"><h5> Andre Preto Maio 2017 </h5></footer>

<script src="java script/jquery.js"></script>
<script type="text/javascript" src="java script/java.js"></script>
</body>
</html>
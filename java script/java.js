//Função que coloca texto e links no ficheiro HTML

/*
function CarregarDados(){
$local1 = $(".sitio").eq(0);
$local2 = $(".sitio").eq(1);
$local3 = $(".sitio").eq(2);

	$(".imagem", $local1).attr("src",local1.Imagem);
	$("h1", $local1).text(local1.Titulo);
	$("p", $local1).text(local1.Descriçao);
	$(".video", $local1).attr("src",local1.Youtube);
	$(".wikipedia", $local1).attr("href",local1.LinkWikipedia);
	$(".googlemaps", $local1).attr("href",local1.LinkGoogleMaps);
	$(".wikipedias", $local1).attr("src",local1.ImagemWikipedia);
	$(".googlemapss", $local1).attr("src",local1.ImagemGoogleMaps);

	$(".imagem", $local2).attr("src",local2.Imagem);
	$("h2", $local2).text(local2.Titulo);
	$("p", $local2).text(local2.Descriçao);
	$(".video", $local2).attr("src",local2.Youtube);
	$(".wikipedia", $local2).attr("href",local2.LinkWikipedia);
	$(".googlemaps", $local2).attr("href",local2.LinkGoogleMaps);
	$(".wikipedias",$local2).attr("src",local2.ImagemWikipedia);
	$(".googlemapss",$local2).attr("src",local2.ImagemGoogleMaps);

	$(".imagem", $local3).attr("src",local3.Imagem);
	$("h3", $local3).text(local3.Titulo);
	$("p", $local3).text(local3.Descriçao);
	$(".video", $local3).attr("src",local3.Youtube);
	$(".wikipedia", $local3).attr("href",local3.LinkWikipedia);
	$(".googlemaps", $local3).attr("href",local3.LinkGoogleMaps);
	$(".wikipedias",$local3).attr("src",local3.ImagemWikipedia);
	$(".googlemapss",$local3).attr("src",local3.ImagemGoogleMaps);
};

CarregarDados();

*/

//Dicionários que contém o texto e os links que vão ser inseridos no ficheiro Html 


var local1 = {

	Imagem:"http://harrypotterfanzone.com/wp-content/2009/06/ss-us-jacket-art.jpg", 
	Youtube: "https://www.youtube.com/embed/VyHV0BRtdxo",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Pedra_Filosofal",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X/ref=sr_1_1?ie=UTF8&qid=1494843651&sr=8-1&keywords=harry+potter+and+the+sorcerer%27s+stone",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"
};


var local2 = { 

	Imagem:"http://harrypotterfanzone.com/wp-content/2009/06/cos-us-jacket-art.jpg", 
	Youtube: "https://www.youtube.com/embed/1bq0qff4iF8",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872/ref=sr_1_1?ie=UTF8&qid=1494843719&sr=8-1&keywords=harry+potter+and+the+chamber+of+secrets",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"
};

var local3 = {

	Imagem:"http://bookeando.com/site/wp-content/uploads/2014/07/nova-capa-harry-potter-e-o-prisioneiro-de-azkaban.jpg", 
	Youtube: "https://www.youtube.com/embed/1ZdlAg3j8nI",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_e_o_Prisioneiro_de_Azkaban",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369/ref=sr_1_1?ie=UTF8&qid=1494843752&sr=8-1&keywords=harry+potter+and+the+prisoner+of+azkaban",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"
};

var local4 = {

	Imagem:"http://static2.hypable.com/wp-content/uploads/2013/06/harry-potter-goblet-of-fire-new-cover-630.jpg", 
	Youtube: "https://www.youtube.com/embed/3EGojp4Hh6I",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_e_o_C%C3%A1lice_de_Fogo",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Goblet-Fire-Rowling/dp/0439139600/ref=sr_1_1?ie=UTF8&qid=1494924635&sr=8-1&keywords=harry+potter+and+the+goblet+of+fire",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"


}

var local5 = {

	Imagem:"http://www.pearltrees.com/s/pic/or/harry-potter-order-phoenix-80978554", 
	Youtube: "https://www.youtube.com/embed/y6ZW7KXaXYk",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Order-Phoenix-Rowling/dp/0439358078/ref=sr_1_1?ie=UTF8&qid=1494924898&sr=8-1&keywords=harry+potter+and+the+order+of+the+phoenix",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"


}

var local6 = {

	Imagem:"http://static2.hypable.com/wp-content/uploads/2013/07/harry-potter-half-blood-prince-new-cover.jpg", 
	Youtube: "https://www.youtube.com/embed/sg81Lts5kYY",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960/ref=sr_1_1?ie=UTF8&qid=1494925423&sr=8-1&keywords=harry+potter+and+the+half+blood+prince",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"


}

var local7 = {

	Imagem:"http://media.harrypotter.bloomsbury.com/rep/s/9781408855713_309030.jpeg", 
	Youtube: "https://www.youtube.com/embed/9hXH0Ackz6w",
	LinkWikipedia:"https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
	LinkAmazon:"https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708/ref=sr_1_1?ie=UTF8&qid=1494925844&sr=8-1&keywords=harry+potter+and+the+deathly+hallows",
	ImagemWikipedia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
	ImagemAmazon: "http://www.gemn.org/wp-content/uploads/2014/06/amazon-grey.png"


}

var locais = new Array(local1,local2,local3,local4,local5,local6,local7);


function CarregarDadosHTMLs(){
	var HTMLtoInsert = `

		<div class="sitio col-xs-6 col-xs-offset-3">
			<div class="row">
				<div class="Top">
					<img class="imagem" alt="Livro" height="400" width="300">
					<br>
					<h1></h1>
					<h3></h3>
					Page Count: <h7></h7>
					<br>
					<br>
				</div>
				<br>
				<br>
				<div class="texto">
					<p></p>
				</div>
			</div>
			<br>
			<div>	
				<iframe class="video" width="450" height="315"></iframe>
			</div>
			<br>
			<br>
			<a class="wikipedia"><img class="wikipedias" height="60" width="50"></img></a>
			<a class="amazon"><img class="amazons" height="50" width="50"></img></a>
			<a class="googlebooks"><img class="googlebookss" height="50" width="50" src="http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Google-Play-Books-icon.png"></img></a>
		</div>`;

	jQuery.each(locais,function(index,value){

		$(".locais").append(HTMLtoInsert);
		$local = $(".sitio").eq(index);

		//$(".imagem", $local).attr("src",value.Imagem);
		$(".video", $local).attr("src",value.Youtube);
		$(".wikipedia", $local).attr("href",value.LinkWikipedia);
		$(".amazon", $local).attr("href",value.LinkAmazon);
		$(".wikipedias", $local).attr("src",value.ImagemWikipedia);
		$(".amazons", $local).attr("src",value.ImagemAmazon);
	});

	$(".sitio").eq(0).addClass("active");

};

CarregarDadosHTMLs();


//Em vez de ir buscar à nossa biblioteca utiliza-se o Ajax // ($. é o mesmo que jQuery.)

function CarregarDadosHTML(){

var UserID = "109869585189811913681";
var APIKey = "AIzaSyA7qplsQ_PlNqg0JEQyE31-zKM585Y9AsE";
var ShelfID = "1001";

	$.ajax({
		url:"https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey

	}).done(function(data){
		console.log(data);
		$.each(data.items, function(index,item){

			$sitioHTML = $(".sitio").eq(index);
			$(".imagem", $sitioHTML).attr("src", item.volumeInfo.imageLinks.thumbnail);
			$("h1", $sitioHTML).text(item.volumeInfo.title);
			$("p", $sitioHTML).text(item.volumeInfo.description);
			$(".googlebooks", $sitioHTML).attr("href", item.volumeInfo.previewLink);
			$("h3", $sitioHTML).text(item.volumeInfo.authors);
			$("h7", $sitioHTML).text(item.volumeInfo.pageCount);
		});
	});

};

CarregarDadosHTML();

//////////////////////////////////////////////////////////////////////


var counter = 0;
document.getElementById("counter").innerHTML = counter;
var counter1 = 0;
document.getElementById("counter1").innerHTML = counter1;

$counter=0;
$counter1=0;

//Botão para mudar entre livros


$(".botoes button").click(function(){
	$parent = $(".sitio.active");
	$next = $parent.next(".sitio");
	var index = $(".sitio").index($parent);
	
	if(index >= $(".sitio").length-1) {
		$next = $(".sitio").eq(0);

		$(".locais").fadeOut(50,function(){
			$(".locais").hide();
			$(".botoes").hide();

				$(window).scrollTop(0);

			$("#Repetir").fadeIn(50,function(){
				$("#Repetir").show();
			});
		});
	}

	$parent.fadeOut(50,function(){
		$parent.removeClass("active");

			$(window).scrollTop(0);
		
		$next.fadeIn(50,function(){
			$next.addClass("active");
		});
	});
});

//Quando se clica Gosto incrementa +1 na contagem de gosto dos resultados
$(".botoes button.botao").click(function(){
	var livroslike = `
		<img class =

		`;
	$("#counter").text(++$counter);

});

//Quando se clica Não Gosto incrementa +1 na contagem de não gosto dos resultados

$(".botoes button.botao1").click(function(){

	$("#counter1").text(++$counter1);
});

//Botão para voltar ao inicio e recomeçar a contagem de gostos e não gostos

$("#Repetir button.Repetir").click(function(){
	$("#Repetir").fadeOut(50,function(){
		$("#Repetir").hide();

			$(window).scrollTop(0);

		$(".Começar").fadeIn(50,function(){
			$(".Começar").show();
		});
	});

	$counter=0;
	$counter1=0;

	$("#counter").text($counter);
	$("#counter1").text($counter1);
});

//Botão que sai da start Page e vai para os locais de Lisboa

$(".Começar1 button.Inicio").click(function(){
	$(".Começar").fadeOut(50,function(){
		$(".Começar").hide();

			$(window).scrollTop(0);

		$(".locais").fadeIn(50,function(){
			$(".locais").show();
			$(".botoes").show();
		});
	});
});

/*
function MudarLivro(button){

	var sitio = button.parentElement.parentElement;
	sitio.classList.remove("active");
	button.parentElement.parentElement.nextElementSibling.classList.add("active");

	counter++;
	document.getElementById("counter").innerHTML = counter;
}

function MudarLivro1(button){

	var sitio = button.parentElement.parentElement;
	sitio.classList.remove("active");
	button.parentElement.parentElement.nextElementSibling.classList.add("active");

	counter1++;
	document.getElementById("counter1").innerHTML = counter1;
}

function Repetir(button){

	var sitio = button.parentElement.parentElement.parentElement;
	sitio.classList.remove("active");
	button.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.		classList.add("active");
}

*/








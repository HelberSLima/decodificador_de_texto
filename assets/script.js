var inputTexto;


const botaoCript = document.getElementsByClassName("botao-cript")[0];
botaoCript.addEventListener("click", function criptTexto(){

	inputTexto = document.getElementById("input-texto").value.toString().toLowerCase().split("");
	
	for(let i = 0; i < inputTexto.length; i++){
		switch(inputTexto[i]){
			case "a":
				inputTexto[i] = "ai";
				break;
			case "e":
				inputTexto[i] = "enter";
				break;
			case "i":
				inputTexto[i] = "imes";
				break;
			case "o":
				inputTexto[i] = "ober";
				break;
			case "u":
				inputTexto[i] = "uftat";
		}
	}

	let newTextoCript = inputTexto.toString().replace(/,/g, "");
	clearArticle();
	createTextAreaE1(newTextoCript);

});

const botaoDescript = document.getElementsByClassName("botao-descript")[0];
botaoDescript.addEventListener("click", function descripTexto(){

	for(let i = 0; i < inputTexto.length; i++){
		switch(inputTexto[i]){
			case "ai":
				inputTexto[i] = "a";
				break;
			case "enter":
				inputTexto[i] = "e";
				break;
			case "imes":
				inputTexto[i] = "i";
				break;
			case "ober":
				inputTexto[i] = "o";
				break;
			case "uftat":
				inputTexto[i] = "u";
		}
	}

	let newTextoDescript = inputTexto.toString().replace(/,/g, "");
	createTextAreaE1(newTextoDescript);
});

function clearArticle(){
	document.getElementsByClassName("artigo-img")[0].style.display = "none";
	document.getElementsByClassName("frase-titulo")[0].style.display = "none";
	document.getElementsByClassName("frase-subtitulo")[0].style.display = "none";
}

function createTextAreaE1(newTextoCript){

	if(!document.getElementById("copia-texto")){
		let artigoEl = document.getElementById("artigo");
		let divEl = document.createElement("div");
		divEl.setAttribute("class", "artigo-texto");
		let areaTextoE1 = document.createElement("textarea");
		areaTextoE1.setAttribute("id", "copia-texto");
		let divBotaoE1 = document.createElement("div");
		divBotaoE1.setAttribute("class", "artigo-botao");
		let botaoE1 = document.createElement("input");

		artigoEl.appendChild(divEl);
		artigoEl.appendChild(divBotaoE1);
		divEl.appendChild(areaTextoE1);
		divBotaoE1.appendChild(botaoE1);

		botaoE1.setAttribute("type", "submit");
		botaoE1.setAttribute("class", "botao-copia");
		botaoE1.value = "Copiar";

		areaTextoE1.value = newTextoCript;
		botaoE1.addEventListener("click", copiaTexto);
	}
	else{
		document.getElementById("copia-texto").value = newTextoCript;
	}
}


function copiaTexto(){
	let copiaTexto = document.getElementById("copia-texto");
	copiaTexto.select();
	copiaTexto.setSelectionRange(0, 99999);
	document.execCommand("copy");
	copiaTexto.value = "";
	document.getElementById("input-texto").value = "";
}


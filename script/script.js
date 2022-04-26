//Grupo A

var ga1m = document.getElementById('ga1m');
var ga1v = document.getElementById('ga1v');

var ga2m = document.getElementById('ga2m');
var ga2v = document.getElementById('ga2v');

var ga3m = document.getElementById('ga3m');
var ga3v = document.getElementById('ga3v');

var ga4m = document.getElementById('ga4m');
var ga4v = document.getElementById('ga4v');

var ga5m = document.getElementById('ga5m');
var ga5v = document.getElementById('ga5v');

var ga6m = document.getElementById('ga6m');
var ga6v = document.getElementById('ga6v');

var Catar = document.getElementById('Catar');
var jCatar = document.getElementById('jCatar');
var vCatar = document.getElementById('vCatar');
var eCatar = document.getElementById('eCatar');
var dCatar = document.getElementById('dCatar');
var ptsCatar = document.getElementById('ptsCatar');

var Equador = document.getElementById('Equador');
var jEquador = document.getElementById('jEquador');
var vEquador = document.getElementById('vEquador');
var eEquador = document.getElementById('eEquador');
var dEquador = document.getElementById('dEquador');
var ptsEquador = document.getElementById('ptsEquador');

var Senegal = document.getElementById('Senegal');
var jSenegal = document.getElementById('jSenegal');
var vSenegal = document.getElementById('vSenegal');
var eSenegal = document.getElementById('eSenegal');
var dSenegal = document.getElementById('dSenegal');
var ptsSenegal = document.getElementById('ptsSenegal');

var Holanda = document.getElementById('Holanda');
var jHolanda = document.getElementById('jHolanda');
var vHolanda = document.getElementById('vHolanda');
var eHolanda = document.getElementById('eHolanda');
var dHolanda = document.getElementById('dHolanda');
var ptsHolanda = document.getElementById('ptsHolanda');



// Jogos Grupo A

//Jogo 1: Senegal X Holanda

function resultadoJ1GA() {
	jSenegal.innerHTML = 1;
	jHolanda.innerHTML = 1;

	gpSenegal.innerHTML = ga1m.value;
	gpHolanda.innerHTML = ga1v.value;

	gcSenegal.innerHTML = ga1v.value;
	gcHolanda.innerHTML = ga1m.value;

	sgSenegal.innerHTML = ga1m.value - ga1v.value;
	sgHolanda.innerHTML = ga1v.value - ga1m.value;

	if (ga1m.value == ga1v.value){
		ptsSenegal.innerHTML = 1;
		ptsHolanda.innerHTML = 1;
		vSenegal.innerHTML = 0;
		vHolanda.innerHTML = 0;
		eSenegal.innerHTML = 1;
		eHolanda.innerHTML = 1;
		dSenegal.innerHTML = 0;
		dHolanda.innerHTML = 0;

	}
	else if (ga1m.value > ga1v.value){
		ptsSenegal.innerHTML = 3;
		ptsHolanda.innerHTML = 0;
		vSenegal.innerHTML = 1;
		vHolanda.innerHTML = 0;
		eSenegal.innerHTML = 0;
		eHolanda.innerHTML = 0;
		dSenegal.innerHTML = 0;
		dHolanda.innerHTML = 1;
	}
	else if (ga1m.value < ga1v.value){
		ptsSenegal.innerHTML = 0;
		ptsHolanda.innerHTML = 3;
		vSenegal.innerHTML = 0;
		vHolanda.innerHTML = 1;
		eSenegal.innerHTML = 0;
		eHolanda.innerHTML = 0;
		dSenegal.innerHTML = 1;
		dHolanda.innerHTML = 0;
	}
}

//Jogo 2: Catar X Equador

function resultadoJ2GA() {
	jCatar.innerHTML = 1;
	jEquador.innerHTML = 1;

	gpCatar.innerHTML = ga2m.value;
	gpEquador.innerHTML = ga2v.value;

	gcCatar.innerHTML = ga2v.value;
	gcEquador.innerHTML = ga2m.value;

	sgCatar.innerHTML = ga2m.value - ga2v.value;
	sgEquador.innerHTML = ga2v.value - ga2m.value;

	if (ga2m.value == ga2v.value){
		ptsCatar.innerHTML = 1;
		ptsEquador.innerHTML = 1;
		vCatar.innerHTML = 0;
		vEquador.innerHTML = 0;
		eCatar.innerHTML = 1;
		eEquador.innerHTML = 1;
		dCatar.innerHTML = 0;
		dEquador.innerHTML = 0;

	}
	else if (ga2m.value > ga2v.value){
		ptsCatar.innerHTML = 3;
		ptsEquador.innerHTML = 0;
		vCatar.innerHTML = 1;
		vEquador.innerHTML = 0;
		eCatar.innerHTML = 0;
		eEquador.innerHTML = 0;
		dCatar.innerHTML = 0;
		dEquador.innerHTML = 1;
	}
	else if (ga2m.value < ga2v.value){
		ptsCatar.innerHTML = 0;
		ptsEquador.innerHTML = 3;
		vCatar.innerHTML = 0;
		vEquador.innerHTML = 1;
		eCatar.innerHTML = 0;
		eEquador.innerHTML = 0;
		dCatar.innerHTML = 1;
		dEquador.innerHTML = 0;
	}
}

//Jogo 3: Catar X Senegal

function resultadoJ3GA() {
	jCatar.innerHTML = 2;
	jSenegal.innerHTML = 2;

	gpCatar.innerHTML = parseInt(ga2m.value) + parseInt(ga3m.value);
	gpSenegal.innerHTML = parseInt(ga1m.value) + parseInt(ga3v.value);

	gcCatar.innerHTML = parseInt(ga3v.value) + parseInt(ga2v.value);
	gcSenegal.innerHTML = parseInt(ga3m.value) + parseInt(ga1v.value);

	sgCatar.innerHTML = parseInt(ga3m.value - ga3v.value) + parseInt(ga2m.value - ga2v.value);
	sgSenegal.innerHTML = parseInt(ga3v.value - ga3m.value) + parseInt(ga1m.value - ga1v.value);

	if (ga3m.value == ga3v.value){
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 1;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 1;
		eCatar.innerHTML = parseInt(eCatar.innerHTML) + 1;
		eSenegal.innerHTML = parseInt(eSenegal.innerHTML) + 1;
	}
	else if (ga3m.value > ga3v.value){
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 3;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 0;
		vCatar.innerHTML = parseInt(vCatar.innerHTML) + 1;
		dSenegal.innerHTML = parseInt(dSenegal.innerHTML) + 1;
	}
	else if (ga3m.value < ga3v.value){
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 0;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 3;
		vSenegal.innerHTML = parseInt(vSenegal.innerHTML) + 1;
		dCatar.innerHTML = parseInt(dCatar.innerHTML) + 1;
	}
}

// Jogo 4: Holanda X Equador

function resultadoJ4GA() {
	jHolanda.innerHTML = 2;
	jEquador.innerHTML = 2;

	gpHolanda.innerHTML = parseInt(ga1v.value) + parseInt(ga4m.value);
	gpEquador.innerHTML = parseInt(ga2v.value) + parseInt(ga4v.value);

	gcHolanda.innerHTML = parseInt(ga4v.value) + parseInt(ga1m.value);
	gcEquador.innerHTML = parseInt(ga4m.value) + parseInt(ga2m.value);

	sgHolanda.innerHTML = parseInt(ga4m.value - ga4v.value) + parseInt(ga1v.value - ga1m.value);
	sgEquador.innerHTML = parseInt(ga4v.value - ga4m.value) + parseInt(ga2v.value - ga2m.value);

	if (ga4m.value == ga4v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 1;
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 1;
		eHolanda.innerHTML = parseInt(eHolanda.innerHTML) + 1;
		eEquador.innerHTML = parseInt(eEquador.innerHTML) + 1;
	}
	else if (ga4m.value > ga4v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 3;
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 0;
		vHolanda.innerHTML = parseInt(vHolanda.innerHTML) + 1;
		dEquador.innerHTML = parseInt(dEquador.innerHTML) + 1;
	}
	else if (ga4m.value < ga4v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 0;
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 3;
		vEquador.innerHTML = parseInt(vEquador.innerHTML) + 1;
		dHolanda.innerHTML = parseInt(dHolanda.innerHTML) + 1;
	}
}

// Jogo 5: Holanda X Catar

function resultadoJ5GA() {
	jHolanda.innerHTML = 3;
	jCatar.innerHTML = 3;

	gpHolanda.innerHTML = parseInt(ga1v.value) + parseInt(ga4m.value) + parseInt(ga5m.value);
	gpCatar.innerHTML = parseInt(ga2m.value) + parseInt(ga3m.value) + parseInt(ga5v.value);

	gcHolanda.innerHTML = parseInt(ga4v.value) + parseInt(ga1m.value) + parseInt(ga5v.value);
	gcCatar.innerHTML = parseInt(ga3v.value) + parseInt(ga2v.value) + parseInt(ga5m.value);

	sgHolanda.innerHTML = parseInt(ga5m.value - ga5v.value) + parseInt(ga4m.value - ga4v.value) + parseInt(ga1v.value - ga1m.value);
	sgCatar.innerHTML = parseInt(ga5v.value - ga5m.value) + parseInt(ga3m.value - ga3v.value) + parseInt(ga2m.value - ga2v.value);

	if (ga5m.value == ga5v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 1;
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 1;
		eHolanda.innerHTML = parseInt(eHolanda.innerHTML) + 1;
		eCatar.innerHTML = parseInt(eCatar.innerHTML) + 1;
	}
	else if (ga5m.value > ga5v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 3;
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 0;
		vHolanda.innerHTML = parseInt(vHolanda.innerHTML) + 1;
		dCatar.innerHTML = parseInt(dCatar.innerHTML) + 1;
	}
	else if (ga5m.value < ga5v.value){
		ptsHolanda.innerHTML = parseInt(ptsHolanda.innerHTML) + 0;
		ptsCatar.innerHTML = parseInt(ptsCatar.innerHTML) + 3;
		vCatar.innerHTML = parseInt(vCatar.innerHTML) + 1;
		dHolanda.innerHTML = parseInt(dHolanda.innerHTML) + 1;
	}
}

// Jogo 6: Equador X Senegal

function resultadoJ6GA() {
	jEquador.innerHTML = 3;
	jSenegal.innerHTML = 3;

	gpEquador.innerHTML = parseInt(ga2v.value) + parseInt(ga4v.value) + parseInt(ga6m.value);
	gpSenegal.innerHTML = parseInt(ga1m.value) + parseInt(ga3v.value) + parseInt(ga6v.value);

	gcEquador.innerHTML = parseInt(ga4m.value) + parseInt(ga2m.value) + parseInt(ga6v.value);
	gcSenegal.innerHTML = parseInt(ga3m.value) + parseInt(ga1v.value) + parseInt(ga6m.value);

	sgEquador.innerHTML = parseInt(ga6m.value - ga6v.value) + parseInt(ga4v.value - ga4m.value) + parseInt(ga2v.value - ga2m.value);
	sgSenegal.innerHTML = parseInt(ga6v.value - ga6m.value) + parseInt(ga3v.value - ga3m.value) + parseInt(ga1m.value - ga1v.value);

	if (ga6m.value == ga6v.value){
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 1;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 1;
		eEquador.innerHTML = parseInt(eEquador.innerHTML) + 1;
		eSenegal.innerHTML = parseInt(eSenegal.innerHTML) + 1;
	}
	else if (ga6m.value > ga6v.value){
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 3;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 0;
		vEquador.innerHTML = parseInt(vEquador.innerHTML) + 1;
		dSenegal.innerHTML = parseInt(dSenegal.innerHTML) + 1;
	}
	else if (ga6m.value < ga6v.value){
		ptsEquador.innerHTML = parseInt(ptsEquador.innerHTML) + 0;
		ptsSenegal.innerHTML = parseInt(ptsSenegal.innerHTML) + 3;
		vSenegal.innerHTML = parseInt(vSenegal.innerHTML) + 1;
		dEquador.innerHTML = parseInt(dEquador.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraCatar = '<img src = "images/bandeiraCatar.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraEquador = '<img src = "images/bandeiraEquador.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraSenegal = '<img src = "images/bandeiraSenegal.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraHolanda = '<img src = "images/bandeiraHolanda.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGA; 
var segundoGA;

function classificacaoCatarGA() {
	if (parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML)){
		document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraCatar + Catar.innerHTML;
		primeiroGA = bandeiraCatar + Catar.innerHTML;
	} else if (parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgHolanda.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraCatar + Catar.innerHTML;
			primeiroGA = bandeiraCatar + Catar.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Holanda.innerHTML + bandeiraHolanda;
			segundoGA = Holanda.innerHTML + bandeiraHolanda;
		} else if (parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgSenegal.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraCatar + Catar.innerHTML;
			primeiroGA = bandeiraCatar + Catar.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Senegal.innerHTML + bandeiraSenegal;
			segundoGA = Senegal.innerHTML + bandeiraSenegal;
		} else if (parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgEquador.innerHTML) ){
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraCatar + Catar.innerHTML;
			primeiroGA = bandeiraCatar + Catar.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Equador.innerHTML + bandeiraEquador;
			segundoGA = Equador.innerHTML + bandeiraEquador;
		}

	else if (parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsHolanda.innerHTML) ||
			parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsCatar.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgEquador.innerHTML) ||
			parseInt(ptsCatar.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsSenegal.innerHTML) ||
			parseInt(ptsCatar.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsCatar.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgEquador.innerHTML) || 
			parseInt(ptsCatar.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsEquador.innerHTML) ||
			parseInt(ptsCatar.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsCatar.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsCatar.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsCatar.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsCatar.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgHolanda.innerHTML) && parseInt(sgCatar.innerHTML) > parseInt(sgSenegal.innerHTML) ){
		document.getElementById("Segundo_Grupo_A").innerHTML = Catar.innerHTML + bandeiraCatar;
		segundoGA = Catar.innerHTML + bandeiraCatar;
	}
}

function classificacaoEquadorGA() {
	if (parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML)){
		document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraEquador + Equador.innerHTML;
		primeiroGA = bandeiraEquador + Equador.innerHTML;
	} else if (parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgHolanda.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraEquador + Equador.innerHTML;
			primeiroGA = bandeiraEquador + Equador.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Holanda.innerHTML + bandeiraHolanda;
			segundoGA = bandeiraEquador + Equador.innerHTML;
		} else if (parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgSenegal.innerHTML) ){
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraEquador + Equador.innerHTML;
			primeiroGA = bandeiraEquador + Equador.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Senegal.innerHTML + bandeiraSenegal;
			segundoGA = Senegal.innerHTML + bandeiraSenegal;
		} else if (parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgCatar.innerHTML) ){
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraEquador + Equador.innerHTML;
			primeiroGA = bandeiraEquador + Equador.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Catar.innerHTML + bandeiraCatar;
			segundoGA = Catar.innerHTML + bandeiraCatar;
		}

	else if (parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsHolanda.innerHTML) ||
			parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsEquador.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsEquador.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsSenegal.innerHTML) ||
			parseInt(ptsEquador.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsEquador.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgCatar.innerHTML) || 
			parseInt(ptsEquador.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsCatar.innerHTML) ||
			parseInt(ptsEquador.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsEquador.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquador.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsEquador.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsEquador.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsEquadorr.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgHolanda.innerHTML) && parseInt(sgEquador.innerHTML) > parseInt(sgSenegal.innerHTML) ){
		document.getElementById("Segundo_Grupo_A").innerHTML = Equador.innerHTML + bandeiraEquador;
		segundoGA = Equador.innerHTML + bandeiraEquador;
	}
}


function classificacaoSenegalGA() {
	if (parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML)){
		document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraSenegal + Senegal.innerHTML;
		primeiroGA = bandeiraSenegal + Senegal.innerHTML;
	} else if (parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgHolanda.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraSenegal + Senegal.innerHTML;
			primeiroGA = bandeiraSenegal + Senegal.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Holanda.innerHTML + bandeiraHolanda;
			segundoGA = Holanda.innerHTML + bandeiraHolanda;
		} else if (parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgCatar.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraSenegal + Senegal.innerHTML;
				primeiroGA = bandeiraSenegal + Senegal.innerHTML;
				document.getElementById("Segundo_Grupo_A").innerHTML = Catar.innerHTML + bandeiraCatar;
				segundoGA = Catar.innerHTML + bandeiraCatar;
			} else if (parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgEquador.innerHTML) ){
				document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraSenegal + Senegal.innerHTML;
				primeiroGA = bandeiraSenegal + Senegal.innerHTML;
				document.getElementById("Segundo_Grupo_A").innerHTML = Equador.innerHTML + bandeiraEquador;
				segundoGA = Equador.innerHTML + bandeiraEquador;
			}

	else if (parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsHolanda.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgEquador.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsHolanda.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsCatar.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgEquador.innerHTML) || 
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsEquador.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgHolanda.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) > parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsSenegal.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsSenegal.innerHTML) == parseInt(ptsHolanda.innerHTML) && parseInt(ptsSenegal.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgHolanda.innerHTML) && parseInt(sgSenegal.innerHTML) > parseInt(sgCatar.innerHTML) ){
		document.getElementById("Segundo_Grupo_A").innerHTML = Senegal.innerHTML + bandeiraSenegal;
		segundoGA = Senegal.innerHTML + bandeiraSenegal;
	}
}


function classificacaoHolandaGA() {
	if (parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML)){
		document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraHolanda + Holanda.innerHTML;
		primeiroGA = bandeiraHolanda + Holanda.innerHTML;
	} else if (parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgCatar.innerHTML) ){
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraHolanda + Holanda.innerHTML;
			primeiroGA = bandeiraHolanda + Holanda.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Catar.innerHTML + bandeiraCatar;
			segundoGA = Catar.innerHTML + bandeiraCatar;
		} else if (parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgSenegal.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraHolanda + Holanda.innerHTML;
			primeiroGA = bandeiraHolanda + Holanda.innerHTML;
			document.getElementById("Segundo_Grupo_A").innerHTML = Senegal.innerHTML + bandeiraSenegal;
			segundoGA = Senegal.innerHTML + bandeiraSenegal;
		} else if (parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgEquador.innerHTML) ){
		document.getElementById("Primeiro_Grupo_A").innerHTML = bandeiraHolanda + Holanda.innerHTML;
		primeiroGA = bandeiraHolanda + Holanda.innerHTML;
		document.getElementById("Segundo_Grupo_A").innerHTML = Equador.innerHTML + bandeiraEquador;
		segundoGA = Equador.innerHTML + bandeiraEquador;
	}

	else if (parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsCatar.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgEquador.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsCatar.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsSenegal.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) > parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgEquador.innerHTML) || 
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsEquador.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsSenegal.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsEquador.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) > parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgCatar.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) > parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgSenegal.innerHTML) ||
			parseInt(ptsHolanda.innerHTML) == parseInt(ptsSenegal.innerHTML) && parseInt(ptsHolanda.innerHTML) == parseInt(ptsCatar.innerHTML) && parseInt(ptsHolanda.innerHTML) < parseInt(ptsEquador.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgCatar.innerHTML) && parseInt(sgHolanda.innerHTML) > parseInt(sgSenegal.innerHTML) ){
		document.getElementById("Segundo_Grupo_A").innerHTML = Holanda.innerHTML + bandeiraHolanda;
		segundoGA = Holanda.innerHTML + bandeiraHolanda;
	}
}


// Grupo B

var gb1m = document.getElementById('gb1m');
var gb1v = document.getElementById('gb1v');

var gb2m = document.getElementById('gb2m');
var gb2v = document.getElementById('gb2v');

var gb3m = document.getElementById('gb3m');
var gb3v = document.getElementById('gb3v');

var gb4m = document.getElementById('gb4m');
var gb4v = document.getElementById('gb4v');

var gb5m = document.getElementById('gb5m');
var gb5v = document.getElementById('gb5v');

var gb6m = document.getElementById('gb6m');
var gb6v = document.getElementById('gb6v');

var Inglaterra = document.getElementById('Inglaterra');
var jInglaterra = document.getElementById('jInglaterra');
var vInglaterra = document.getElementById('vInglaterra');
var eInglaterra = document.getElementById('eInglaterra');
var dInglaterra = document.getElementById('dInglaterra');
var ptsInglaterra = document.getElementById('ptsInglaterra');

var Ira = document.getElementById('Ira');
var jIra = document.getElementById('jIra');
var vIra = document.getElementById('vIra');
var eIra = document.getElementById('eIra');
var dIra = document.getElementById('dIra');
var ptsIra = document.getElementById('ptsIra');

var EUA = document.getElementById('EUA');
var jEUA = document.getElementById('jEUA');
var vEUA = document.getElementById('vEUA');
var eEUA = document.getElementById('eEUA');
var dEUA = document.getElementById('dEUA');
var ptsEUA = document.getElementById('ptsEUA');

var UEFA = document.getElementById('UEFA');
var jUEFA = document.getElementById('jUEFA');
var vUEFA = document.getElementById('vUEFA');
var eUEFA = document.getElementById('eUEFA');
var dUEFA = document.getElementById('dUEFA');
var ptsUEFA = document.getElementById('ptsUEFA');



// Jogos Grupo B

//Jogo 1: EUA X UEFA

function resultadoJ1GB() {
	jEUA.innerHTML = 1;
	jUEFA.innerHTML = 1;

	gpEUA.innerHTML = gb1m.value;
	gpUEFA.innerHTML = gb1v.value;

	gcEUA.innerHTML = gb1v.value;
	gcUEFA.innerHTML = gb1m.value;

	sgEUA.innerHTML = gb1m.value - gb1v.value;
	sgUEFA.innerHTML = gb1v.value - gb1m.value;

	if (gb1m.value == gb1v.value){
		ptsEUA.innerHTML = 1;
		ptsUEFA.innerHTML = 1;
		vEUA.innerHTML = 0;
		vUEFA.innerHTML = 0;
		eEUA.innerHTML = 1;
		eUEFA.innerHTML = 1;
		dEUA.innerHTML = 0;
		dUEFA.innerHTML = 0;

	}
	else if (gb1m.value > gb1v.value){
		ptsEUA.innerHTML = 3;
		ptsUEFA.innerHTML = 0;
		vEUA.innerHTML = 1;
		vUEFA.innerHTML = 0;
		eEUA.innerHTML = 0;
		eUEFA.innerHTML = 0;
		dEUA.innerHTML = 0;
		dUEFA.innerHTML = 1;
	}
	else if (gb1m.value < gb1v.value){
		ptsEUA.innerHTML = 0;
		ptsUEFA.innerHTML = 3;
		vEUA.innerHTML = 0;
		vUEFA.innerHTML = 1;
		eEUA.innerHTML = 0;
		eUEFA.innerHTML = 0;
		dEUA.innerHTML = 1;
		dUEFA.innerHTML = 0;
	}
}

//Jogo 2: Inglaterra X Ira

function resultadoJ2GB() {
	jInglaterra.innerHTML = 1;
	jIra.innerHTML = 1;

	gpInglaterra.innerHTML = gb2m.value;
	gpIra.innerHTML = gb2v.value;

	gcInglaterra.innerHTML = gb2v.value;
	gcIra.innerHTML = gb2m.value;

	sgInglaterra.innerHTML = gb2m.value - gb2v.value;
	sgIra.innerHTML = gb2v.value - gb2m.value;

	if (gb2m.value == gb2v.value){
		ptsInglaterra.innerHTML = 1;
		ptsIra.innerHTML = 1;
		vInglaterra.innerHTML = 0;
		vIra.innerHTML = 0;
		eInglaterra.innerHTML = 1;
		eIra.innerHTML = 1;
		dInglaterra.innerHTML = 0;
		dIra.innerHTML = 0;

	}
	else if (gb2m.value > gb2v.value){
		ptsInglaterra.innerHTML = 3;
		ptsIra.innerHTML = 0;
		vInglaterra.innerHTML = 1;
		vIra.innerHTML = 0;
		eInglaterra.innerHTML = 0;
		eIra.innerHTML = 0;
		dInglaterra.innerHTML = 0;
		dIra.innerHTML = 1;
	}
	else if (gb2m.value < gb2v.value){
		ptsInglaterra.innerHTML = 0;
		ptsIra.innerHTML = 3;
		vInglaterra.innerHTML = 0;
		vIra.innerHTML = 1;
		eInglaterra.innerHTML = 0;
		eIra.innerHTML = 0;
		dInglaterra.innerHTML = 1;
		dIra.innerHTML = 0;
	}
}

//Jogo 3: Inglaterra X EUA

function resultadoJ3GB() {
	jInglaterra.innerHTML = 2;
	jEUA.innerHTML = 2;

	gpInglaterra.innerHTML = parseInt(gb2m.value) + parseInt(gb3m.value);
	gpEUA.innerHTML = parseInt(gb1m.value) + parseInt(gb3v.value);

	gcInglaterra.innerHTML = parseInt(gb3v.value) + parseInt(gb2v.value);
	gcEUA.innerHTML = parseInt(gb3m.value) + parseInt(gb1v.value);

	sgInglaterra.innerHTML = parseInt(gb3m.value - gb3v.value) + parseInt(gb2m.value - gb2v.value);
	sgEUA.innerHTML = parseInt(gb3v.value - gb3m.value) + parseInt(gb1m.value - gb1v.value);

	if (gb3m.value == gb3v.value){
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 1;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 1;
		eInglaterra.innerHTML = parseInt(eInglaterra.innerHTML) + 1;
		eEUA.innerHTML = parseInt(eEUA.innerHTML) + 1;
	}
	else if (gb3m.value > gb3v.value){
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 3;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 0;
		vInglaterra.innerHTML = parseInt(vInglaterra.innerHTML) + 1;
		dEUA.innerHTML = parseInt(dEUA.innerHTML) + 1;
	}
	else if (gb3m.value < gb3v.value){
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 0;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 3;
		vEUA.innerHTML = parseInt(vEUA.innerHTML) + 1;
		dInglaterra.innerHTML = parseInt(dInglaterra.innerHTML) + 1;
	}
}

// Jogo 4: UEFA X Ira

function resultadoJ4GB() {
	jUEFA.innerHTML = 2;
	jIra.innerHTML = 2;

	gpUEFA.innerHTML = parseInt(gb1v.value) + parseInt(gb4m.value);
	gpIra.innerHTML = parseInt(gb2v.value) + parseInt(gb4v.value);

	gcUEFA.innerHTML = parseInt(gb4v.value) + parseInt(gb1m.value);
	gcIra.innerHTML = parseInt(gb4m.value) + parseInt(gb2m.value);

	sgUEFA.innerHTML = parseInt(gb4m.value - gb4v.value) + parseInt(gb1v.value - gb1m.value);
	sgIra.innerHTML = parseInt(gb4v.value - gb4m.value) + parseInt(gb2v.value - gb2m.value);

	if (gb4m.value == gb4v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 1;
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 1;
		eUEFA.innerHTML = parseInt(eUEFA.innerHTML) + 1;
		eIra.innerHTML = parseInt(eIra.innerHTML) + 1;
	}
	else if (gb4m.value > gb4v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 3;
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 0;
		vUEFA.innerHTML = parseInt(vUEFA.innerHTML) + 1;
		dIra.innerHTML = parseInt(dIra.innerHTML) + 1;
	}
	else if (gb4m.value < gb4v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 0;
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 3;
		vIra.innerHTML = parseInt(vIra.innerHTML) + 1;
		dUEFA.innerHTML = parseInt(dUEFA.innerHTML) + 1;
	}
}

// Jogo 5: UEFA X Inglaterra

function resultadoJ5GB() {
	jUEFA.innerHTML = 3;
	jInglaterra.innerHTML = 3;

	gpUEFA.innerHTML = parseInt(gb1v.value) + parseInt(gb4m.value) + parseInt(gb5m.value);
	gpInglaterra.innerHTML = parseInt(gb2m.value) + parseInt(gb3m.value) + parseInt(gb5v.value);

	gcUEFA.innerHTML = parseInt(gb4v.value) + parseInt(gb1m.value) + parseInt(gb5v.value);
	gcInglaterra.innerHTML = parseInt(gb3v.value) + parseInt(gb2v.value) + parseInt(gb5m.value);

	sgUEFA.innerHTML = parseInt(gb5m.value - gb5v.value) + parseInt(gb4m.value - gb4v.value) + parseInt(gb1v.value - gb1m.value);
	sgInglaterra.innerHTML = parseInt(gb5v.value - gb5m.value) + parseInt(gb3m.value - gb3v.value) + parseInt(gb2m.value - gb2v.value);

	if (gb5m.value == gb5v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 1;
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 1;
		eUEFA.innerHTML = parseInt(eUEFA.innerHTML) + 1;
		eInglaterra.innerHTML = parseInt(eInglaterra.innerHTML) + 1;
	}
	else if (gb5m.value > gb5v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 3;
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 0;
		vUEFA.innerHTML = parseInt(vUEFA.innerHTML) + 1;
		dInglaterra.innerHTML = parseInt(dInglaterra.innerHTML) + 1;
	}
	else if (gb5m.value < gb5v.value){
		ptsUEFA.innerHTML = parseInt(ptsUEFA.innerHTML) + 0;
		ptsInglaterra.innerHTML = parseInt(ptsInglaterra.innerHTML) + 3;
		vInglaterra.innerHTML = parseInt(vInglaterra.innerHTML) + 1;
		dUEFA.innerHTML = parseInt(dUEFA.innerHTML) + 1;
	}
}

// Jogo 6: Ira X EUA

function resultadoJ6GB() {
	jIra.innerHTML = 3;
	jEUA.innerHTML = 3;

	gpIra.innerHTML = parseInt(gb2v.value) + parseInt(gb4v.value) + parseInt(gb6m.value);
	gpEUA.innerHTML = parseInt(gb1m.value) + parseInt(gb3v.value) + parseInt(gb6v.value);

	gcIra.innerHTML = parseInt(gb4m.value) + parseInt(gb2m.value) + parseInt(gb6v.value);
	gcEUA.innerHTML = parseInt(gb3m.value) + parseInt(gb1v.value) + parseInt(gb6m.value);

	sgIra.innerHTML = parseInt(gb6m.value - gb6v.value) + parseInt(gb4v.value - gb4m.value) + parseInt(gb2v.value - gb2m.value);
	sgEUA.innerHTML = parseInt(gb6v.value - gb6m.value) + parseInt(gb3v.value - gb3m.value) + parseInt(gb1m.value - gb1v.value);

	if (gb6m.value == gb6v.value){
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 1;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 1;
		eIra.innerHTML = parseInt(eIra.innerHTML) + 1;
		eEUA.innerHTML = parseInt(eEUA.innerHTML) + 1;
	}
	else if (gb6m.value > gb6v.value){
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 3;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 0;
		vIra.innerHTML = parseInt(vIra.innerHTML) + 1;
		dEUA.innerHTML = parseInt(dEUA.innerHTML) + 1;
	}
	else if (gb6m.value < gb6v.value){
		ptsIra.innerHTML = parseInt(ptsIra.innerHTML) + 0;
		ptsEUA.innerHTML = parseInt(ptsEUA.innerHTML) + 3;
		vEUA.innerHTML = parseInt(vEUA.innerHTML) + 1;
		dIra.innerHTML = parseInt(dIra.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraInglaterra = '<img src = "images/bandeiraInglaterra.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraIra = '<img src = "images/bandeiraIra.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraEUA = '<img src = "images/bandeiraEUA.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraUEFA = '<img src = "images/bandeiraUEFA.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGB; 
var segundoGB;

function classificacaoInglaterraGB() {
	if (parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML)){
		document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraInglaterra + Inglaterra.innerHTML;
		primeiroGB = bandeiraInglaterra + Inglaterra.innerHTML;
	} else if (parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgUEFA.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraInglaterra + Inglaterra.innerHTML;
			primeiroGB = bandeiraInglaterra + Inglaterra.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = UEFA.innerHTML + bandeiraUEFA;
			segundoGB = UEFA.innerHTML + bandeiraUEFA;
		} else if (parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgEUA.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraInglaterra + Inglaterra.innerHTML;
			primeiroGB = bandeiraInglaterra + Inglaterra.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = EUA.innerHTML + bandeiraEUA;
			segundoGB = EUA.innerHTML + bandeiraEUA;
		} else if (parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgIra.innerHTML) ){
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraInglaterra + Inglaterra.innerHTML;
			primeiroGB = bandeiraInglaterra + Inglaterra.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = Ira.innerHTML + bandeiraIra;
			segundoGB = Ira.innerHTML + bandeiraIra;
		}

	else if (parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsUEFA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgIra.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsEUA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgIra.innerHTML) || 
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsIra.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsInglaterra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsInglaterra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsInglaterra.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgUEFA.innerHTML) && parseInt(sgInglaterra.innerHTML) > parseInt(sgEUA.innerHTML) ){
		document.getElementById("Segundo_Grupo_B").innerHTML = Inglaterra.innerHTML + bandeiraInglaterra;
		segundoGB = Inglaterra.innerHTML + bandeiraInglaterra;
	}
}

function classificacaoIraGB() {
	if (parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML)){
		document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraIra + Ira.innerHTML;
		primeiroGB = bandeiraIra + Ira.innerHTML;
	} else if (parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgUEFA.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraIra + Ira.innerHTML;
			primeiroGB = bandeiraIra + Ira.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = UEFA.innerHTML + bandeiraUEFA;
			segundoGB = bandeiraIra + Ira.innerHTML;
		} else if (parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgEUA.innerHTML) ){
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraIra + Ira.innerHTML;
			primeiroGB = bandeiraIra + Ira.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = EUA.innerHTML + bandeiraEUA;
			segundoGB = EUA.innerHTML + bandeiraEUA;
		} else if (parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgInglaterra.innerHTML) ){
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraIra + Ira.innerHTML;
			primeiroGB = bandeiraIra + Ira.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = Inglaterra.innerHTML + bandeiraInglaterra;
			segundoGB = Inglaterra.innerHTML + bandeiraInglaterra;
		}

	else if (parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsUEFA.innerHTML) ||
			parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsIra.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsIra.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsEUA.innerHTML) ||
			parseInt(ptsIra.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsIra.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgInglaterra.innerHTML) || 
			parseInt(ptsIra.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsInglaterra.innerHTML) ||
			parseInt(ptsIra.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsIra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsIra.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsIra.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsIra.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsIrar.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgUEFA.innerHTML) && parseInt(sgIra.innerHTML) > parseInt(sgEUA.innerHTML) ){
		document.getElementById("Segundo_Grupo_B").innerHTML = Ira.innerHTML + bandeiraIra;
		segundoGB = Ira.innerHTML + bandeiraIra;
	}
}


function classificacaoEUAGB() {
	if (parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML)){
		document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraEUA + EUA.innerHTML;
		primeiroGB = bandeiraEUA + EUA.innerHTML;
	} else if (parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgUEFA.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraEUA + EUA.innerHTML;
			primeiroGB = bandeiraEUA + EUA.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = UEFA.innerHTML + bandeiraUEFA;
			segundoGB = UEFA.innerHTML + bandeiraUEFA;
		} else if (parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgInglaterra.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraEUA + EUA.innerHTML;
				primeiroGB = bandeiraEUA + EUA.innerHTML;
				document.getElementById("Segundo_Grupo_B").innerHTML = Inglaterra.innerHTML + bandeiraInglaterra;
				segundoGB = Inglaterra.innerHTML + bandeiraInglaterra;
			} else if (parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgIra.innerHTML) ){
				document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraEUA + EUA.innerHTML;
				primeiroGB = bandeiraEUA + EUA.innerHTML;
				document.getElementById("Segundo_Grupo_B").innerHTML = Ira.innerHTML + bandeiraIra;
				segundoGB = Ira.innerHTML + bandeiraIra;
			}

	else if (parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsUEFA.innerHTML) ||
			parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgIra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsUEFA.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsInglaterra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsEUA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgIra.innerHTML) || 
			parseInt(ptsEUA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsIra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgUEFA.innerHTML) ||
			parseInt(ptsEUA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) > parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsEUA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsEUA.innerHTML) == parseInt(ptsUEFA.innerHTML) && parseInt(ptsEUA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgUEFA.innerHTML) && parseInt(sgEUA.innerHTML) > parseInt(sgInglaterra.innerHTML) ){
		document.getElementById("Segundo_Grupo_B").innerHTML = EUA.innerHTML + bandeiraEUA;
		segundoGB = EUA.innerHTML + bandeiraEUA;
	}
}


function classificacaoUEFAGB() {
	if (parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML)){
		document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraUEFA + UEFA.innerHTML;
		primeiroGA = bandeiraUEFA + UEFA.innerHTML;
	} else if (parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgInglaterra.innerHTML) ){
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraUEFA + UEFA.innerHTML;
			primeiroGA = bandeiraUEFA + UEFA.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = Inglaterra.innerHTML + bandeiraInglaterra;
			segundoGA = Inglaterra.innerHTML + bandeiraInglaterra;
		} else if (parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgEUA.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraUEFA + UEFA.innerHTML;
			primeiroGA = bandeiraUEFA + UEFA.innerHTML;
			document.getElementById("Segundo_Grupo_B").innerHTML = EUA.innerHTML + bandeiraEUA;
			segundoGA = EUA.innerHTML + bandeiraEUA;
		} else if (parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgIra.innerHTML) ){
		document.getElementById("Primeiro_Grupo_B").innerHTML = bandeiraUEFA + UEFA.innerHTML;
		primeiroGA = bandeiraUEFA + UEFA.innerHTML;
		document.getElementById("Segundo_Grupo_B").innerHTML = Ira.innerHTML + bandeiraIra;
		segundoGA = Ira.innerHTML + bandeiraIra;
	}

	else if (parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsInglaterra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgIra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsInglaterra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsEUA.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) > parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgIra.innerHTML) || 
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsIra.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsEUA.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsIra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) > parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgInglaterra.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) > parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgEUA.innerHTML) ||
			parseInt(ptsUEFA.innerHTML) == parseInt(ptsEUA.innerHTML) && parseInt(ptsUEFA.innerHTML) == parseInt(ptsInglaterra.innerHTML) && parseInt(ptsUEFA.innerHTML) < parseInt(ptsIra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgInglaterra.innerHTML) && parseInt(sgUEFA.innerHTML) > parseInt(sgEUA.innerHTML) ){
		document.getElementById("Segundo_Grupo_B").innerHTML = UEFA.innerHTML + bandeiraUEFA;
		segundoGB = UEFA.innerHTML + bandeiraUEFA;
	}
}


//Grupo C

var gc1m = document.getElementById('gc1m');
var gc1v = document.getElementById('gc1v');

var gc2m = document.getElementById('gc2m');
var gc2v = document.getElementById('gc2v');

var gc3m = document.getElementById('gc3m');
var gc3v = document.getElementById('gc3v');

var gc4m = document.getElementById('gc4m');
var gc4v = document.getElementById('gc4v');

var gc5m = document.getElementById('gc5m');
var gc5v = document.getElementById('gc5v');

var gc6m = document.getElementById('gc6m');
var gc6v = document.getElementById('gc6v');

var Argentina = document.getElementById('Argentina');
var jArgentina = document.getElementById('jArgentina');
var vArgentina = document.getElementById('vArgentina');
var eArgentina = document.getElementById('eArgentina');
var dArgentina = document.getElementById('dArgentina');
var ptsArgentina = document.getElementById('ptsArgentina');

var ArabiaSaudita = document.getElementById('ArabiaSaudita');
var jArabiaSaudita = document.getElementById('jArabiaSaudita');
var vArabiaSaudita = document.getElementById('vArabiaSaudita');
var eArabiaSaudita = document.getElementById('eArabiaSaudita');
var dArabiaSaudita = document.getElementById('dArabiaSaudita');
var ptsArabiaSaudita = document.getElementById('ptsArabiaSaudita');

var Mexico = document.getElementById('Mexico');
var jMexico = document.getElementById('jMexico');
var vMexico = document.getElementById('vMexico');
var eMexico = document.getElementById('eMexico');
var dMexico = document.getElementById('dMexico');
var ptsMexico = document.getElementById('ptsMexico');

var Polonia = document.getElementById('Polonia');
var jPolonia = document.getElementById('jPolonia');
var vPolonia = document.getElementById('vPolonia');
var ePolonia = document.getElementById('ePolonia');
var dPolonia = document.getElementById('dPolonia');
var ptsPolonia = document.getElementById('ptsPolonia');



// Jogos Grupo C

//Jogo 1: Mexico X Polonia

function resultadoJ1GC() {
	jMexico.innerHTML = 1;
	jPolonia.innerHTML = 1;

	gpMexico.innerHTML = gc1m.value;
	gpPolonia.innerHTML = gc1v.value;

	gcMexico.innerHTML = gc1v.value;
	gcPolonia.innerHTML = gc1m.value;

	sgMexico.innerHTML = gc1m.value - gc1v.value;
	sgPolonia.innerHTML = gc1v.value - gc1m.value;

	if (gc1m.value == gc1v.value){
		ptsMexico.innerHTML = 1;
		ptsPolonia.innerHTML = 1;
		vMexico.innerHTML = 0;
		vPolonia.innerHTML = 0;
		eMexico.innerHTML = 1;
		ePolonia.innerHTML = 1;
		dMexico.innerHTML = 0;
		dPolonia.innerHTML = 0;

	}
	else if (gc1m.value > gc1v.value){
		ptsMexico.innerHTML = 3;
		ptsPolonia.innerHTML = 0;
		vMexico.innerHTML = 1;
		vPolonia.innerHTML = 0;
		eMexico.innerHTML = 0;
		ePolonia.innerHTML = 0;
		dMexico.innerHTML = 0;
		dPolonia.innerHTML = 1;
	}
	else if (gc1m.value < gc1v.value){
		ptsMexico.innerHTML = 0;
		ptsPolonia.innerHTML = 3;
		vMexico.innerHTML = 0;
		vPolonia.innerHTML = 1;
		eMexico.innerHTML = 0;
		ePolonia.innerHTML = 0;
		dMexico.innerHTML = 1;
		dPolonia.innerHTML = 0;
	}
}

//Jogo 2: Argentina X ArabiaSaudita

function resultadoJ2GC() {
	jArgentina.innerHTML = 1;
	jArabiaSaudita.innerHTML = 1;

	gpArgentina.innerHTML = gc2m.value;
	gpArabiaSaudita.innerHTML = gc2v.value;

	gcArgentina.innerHTML = gc2v.value;
	gcArabiaSaudita.innerHTML = gc2m.value;

	sgArgentina.innerHTML = gc2m.value - gc2v.value;
	sgArabiaSaudita.innerHTML = gc2v.value - gc2m.value;

	if (gc2m.value == gc2v.value){
		ptsArgentina.innerHTML = 1;
		ptsArabiaSaudita.innerHTML = 1;
		vArgentina.innerHTML = 0;
		vArabiaSaudita.innerHTML = 0;
		eArgentina.innerHTML = 1;
		eArabiaSaudita.innerHTML = 1;
		dArgentina.innerHTML = 0;
		dArabiaSaudita.innerHTML = 0;

	}
	else if (gc2m.value > gc2v.value){
		ptsArgentina.innerHTML = 3;
		ptsArabiaSaudita.innerHTML = 0;
		vArgentina.innerHTML = 1;
		vArabiaSaudita.innerHTML = 0;
		eArgentina.innerHTML = 0;
		eArabiaSaudita.innerHTML = 0;
		dArgentina.innerHTML = 0;
		dArabiaSaudita.innerHTML = 1;
	}
	else if (gc2m.value < gc2v.value){
		ptsArgentina.innerHTML = 0;
		ptsArabiaSaudita.innerHTML = 3;
		vArgentina.innerHTML = 0;
		vArabiaSaudita.innerHTML = 1;
		eArgentina.innerHTML = 0;
		eArabiaSaudita.innerHTML = 0;
		dArgentina.innerHTML = 1;
		dArabiaSaudita.innerHTML = 0;
	}
}

//Jogo 3: Argentina X Mexico

function resultadoJ3GC() {
	jArgentina.innerHTML = 2;
	jMexico.innerHTML = 2;

	gpArgentina.innerHTML = parseInt(gc2m.value) + parseInt(gc3m.value);
	gpMexico.innerHTML = parseInt(gc1m.value) + parseInt(gc3v.value);

	gcArgentina.innerHTML = parseInt(gc3v.value) + parseInt(gc2v.value);
	gcMexico.innerHTML = parseInt(gc3m.value) + parseInt(gc1v.value);

	sgArgentina.innerHTML = parseInt(gc3m.value - gc3v.value) + parseInt(gc2m.value - gc2v.value);
	sgMexico.innerHTML = parseInt(gc3v.value - gc3m.value) + parseInt(gc1m.value - gc1v.value);

	if (gc3m.value == gc3v.value){
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 1;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 1;
		eArgentina.innerHTML = parseInt(eArgentina.innerHTML) + 1;
		eMexico.innerHTML = parseInt(eMexico.innerHTML) + 1;
	}
	else if (gc3m.value > gc3v.value){
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 3;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 0;
		vArgentina.innerHTML = parseInt(vArgentina.innerHTML) + 1;
		dMexico.innerHTML = parseInt(dMexico.innerHTML) + 1;
	}
	else if (gc3m.value < gc3v.value){
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 0;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 3;
		vMexico.innerHTML = parseInt(vMexico.innerHTML) + 1;
		dArgentina.innerHTML = parseInt(dArgentina.innerHTML) + 1;
	}
}

// Jogo 4: Polonia X ArabiaSaudita

function resultadoJ4GC() {
	jPolonia.innerHTML = 2;
	jArabiaSaudita.innerHTML = 2;

	gpPolonia.innerHTML = parseInt(gc1v.value) + parseInt(gc4m.value);
	gpArabiaSaudita.innerHTML = parseInt(gc2v.value) + parseInt(gc4v.value);

	gcPolonia.innerHTML = parseInt(gc4v.value) + parseInt(gc1m.value);
	gcArabiaSaudita.innerHTML = parseInt(gc4m.value) + parseInt(gc2m.value);

	sgPolonia.innerHTML = parseInt(gc4m.value - gc4v.value) + parseInt(gc1v.value - gc1m.value);
	sgArabiaSaudita.innerHTML = parseInt(gc4v.value - gc4m.value) + parseInt(gc2v.value - gc2m.value);

	if (gc4m.value == gc4v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 1;
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 1;
		ePolonia.innerHTML = parseInt(ePolonia.innerHTML) + 1;
		eArabiaSaudita.innerHTML = parseInt(eArabiaSaudita.innerHTML) + 1;
	}
	else if (gc4m.value > gc4v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 3;
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 0;
		vPolonia.innerHTML = parseInt(vPolonia.innerHTML) + 1;
		dArabiaSaudita.innerHTML = parseInt(dArabiaSaudita.innerHTML) + 1;
	}
	else if (gc4m.value < gc4v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 0;
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 3;
		vArabiaSaudita.innerHTML = parseInt(vArabiaSaudita.innerHTML) + 1;
		dPolonia.innerHTML = parseInt(dPolonia.innerHTML) + 1;
	}
}

// Jogo 5: Polonia X Argentina

function resultadoJ5GC() {
	jPolonia.innerHTML = 3;
	jArgentina.innerHTML = 3;

	gpPolonia.innerHTML = parseInt(gc1v.value) + parseInt(gc4m.value) + parseInt(gc5m.value);
	gpArgentina.innerHTML = parseInt(gc2m.value) + parseInt(gc3m.value) + parseInt(gc5v.value);

	gcPolonia.innerHTML = parseInt(gc4v.value) + parseInt(gc1m.value) + parseInt(gc5v.value);
	gcArgentina.innerHTML = parseInt(gc3v.value) + parseInt(gc2v.value) + parseInt(gc5m.value);

	sgPolonia.innerHTML = parseInt(gc5m.value - gc5v.value) + parseInt(gc4m.value - gc4v.value) + parseInt(gc1v.value - gc1m.value);
	sgArgentina.innerHTML = parseInt(gc5v.value - gc5m.value) + parseInt(gc3m.value - gc3v.value) + parseInt(gc2m.value - gc2v.value);

	if (gc5m.value == gc5v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 1;
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 1;
		ePolonia.innerHTML = parseInt(ePolonia.innerHTML) + 1;
		eArgentina.innerHTML = parseInt(eArgentina.innerHTML) + 1;
	}
	else if (gc5m.value > gc5v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 3;
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 0;
		vPolonia.innerHTML = parseInt(vPolonia.innerHTML) + 1;
		dArgentina.innerHTML = parseInt(dArgentina.innerHTML) + 1;
	}
	else if (gc5m.value < gc5v.value){
		ptsPolonia.innerHTML = parseInt(ptsPolonia.innerHTML) + 0;
		ptsArgentina.innerHTML = parseInt(ptsArgentina.innerHTML) + 3;
		vArgentina.innerHTML = parseInt(vArgentina.innerHTML) + 1;
		dPolonia.innerHTML = parseInt(dPolonia.innerHTML) + 1;
	}
}

// Jogo 6: ArabiaSaudita X Mexico

function resultadoJ6GC() {
	jArabiaSaudita.innerHTML = 3;
	jMexico.innerHTML = 3;

	gpArabiaSaudita.innerHTML = parseInt(gc2v.value) + parseInt(gc4v.value) + parseInt(gc6m.value);
	gpMexico.innerHTML = parseInt(gc1m.value) + parseInt(gc3v.value) + parseInt(gc6v.value);

	gcArabiaSaudita.innerHTML = parseInt(gc4m.value) + parseInt(gc2m.value) + parseInt(gc6v.value);
	gcMexico.innerHTML = parseInt(gc3m.value) + parseInt(gc1v.value) + parseInt(gc6m.value);

	sgArabiaSaudita.innerHTML = parseInt(gc6m.value - gc6v.value) + parseInt(gc4v.value - gc4m.value) + parseInt(gc2v.value - gc2m.value);
	sgMexico.innerHTML = parseInt(gc6v.value - gc6m.value) + parseInt(gc3v.value - gc3m.value) + parseInt(gc1m.value - gc1v.value);

	if (gc6m.value == gc6v.value){
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 1;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 1;
		eArabiaSaudita.innerHTML = parseInt(eArabiaSaudita.innerHTML) + 1;
		eMexico.innerHTML = parseInt(eMexico.innerHTML) + 1;
	}
	else if (gc6m.value > gc6v.value){
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 3;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 0;
		vArabiaSaudita.innerHTML = parseInt(vArabiaSaudita.innerHTML) + 1;
		dMexico.innerHTML = parseInt(dMexico.innerHTML) + 1;
	}
	else if (gc6m.value < gc6v.value){
		ptsArabiaSaudita.innerHTML = parseInt(ptsArabiaSaudita.innerHTML) + 0;
		ptsMexico.innerHTML = parseInt(ptsMexico.innerHTML) + 3;
		vMexico.innerHTML = parseInt(vMexico.innerHTML) + 1;
		dArabiaSaudita.innerHTML = parseInt(dArabiaSaudita.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraArgentina = '<img src = "images/bandeiraArgentina.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraArabiaSaudita = '<img src = "images/bandeiraArabiaSaudita.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraMexico = '<img src = "images/bandeiraMexico.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraPolonia = '<img src = "images/bandeiraPolonia.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGC; 
var segundoGC;

function classificacaoArgentinaGC() {
	if (parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML)){
		document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArgentina + Argentina.innerHTML;
		primeiroGC = bandeiraArgentina + Argentina.innerHTML;
	} else if (parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgPolonia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArgentina + Argentina.innerHTML;
			primeiroGC = bandeiraArgentina + Argentina.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Polonia.innerHTML + bandeiraPolonia;
			segundoGC = Polonia.innerHTML + bandeiraPolonia;
		} else if (parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgMexico.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArgentina + Argentina.innerHTML;
			primeiroGC = bandeiraArgentina + Argentina.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Mexico.innerHTML + bandeiraMexico;
			segundoGC = Mexico.innerHTML + bandeiraMexico;
		} else if (parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ){
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArgentina + Argentina.innerHTML;
			primeiroGC = bandeiraArgentina + Argentina.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
			segundoGC = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
		}

	else if (parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsPolonia.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsMexico.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) || 
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArgentina.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArgentina.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArgentina.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgPolonia.innerHTML) && parseInt(sgArgentina.innerHTML) > parseInt(sgMexico.innerHTML) ){
		document.getElementById("Segundo_Grupo_C").innerHTML = Argentina.innerHTML + bandeiraArgentina;
		segundoGC = Argentina.innerHTML + bandeiraArgentina;
	}
}

function classificacaoArabiaSauditaGC() {
	if (parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML)){
		document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
		primeiroGC = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
	} else if (parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgPolonia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			primeiroGC = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Polonia.innerHTML + bandeiraPolonia;
			segundoGC = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
		} else if (parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgMexico.innerHTML) ){
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			primeiroGC = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Mexico.innerHTML + bandeiraMexico;
			segundoGC = Mexico.innerHTML + bandeiraMexico;
		} else if (parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgArgentina.innerHTML) ){
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			primeiroGC = bandeiraArabiaSaudita + ArabiaSaudita.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Argentina.innerHTML + bandeiraArgentina;
			segundoGC = Argentina.innerHTML + bandeiraArgentina;
		}

	else if (parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsPolonia.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsMexico.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgArgentina.innerHTML) || 
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsArgentina.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsArabiaSaudita.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsArabiaSauditar.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgPolonia.innerHTML) && parseInt(sgArabiaSaudita.innerHTML) > parseInt(sgMexico.innerHTML) ){
		document.getElementById("Segundo_Grupo_C").innerHTML = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
		segundoGC = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
	}
}


function classificacaoMexicoGC() {
	if (parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML)){
		document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraMexico + Mexico.innerHTML;
		primeiroGC = bandeiraMexico + Mexico.innerHTML;
	} else if (parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgPolonia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraMexico + Mexico.innerHTML;
			primeiroGC = bandeiraMexico + Mexico.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Polonia.innerHTML + bandeiraPolonia;
			segundoGC = Polonia.innerHTML + bandeiraPolonia;
		} else if (parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArgentina.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraMexico + Mexico.innerHTML;
				primeiroGC = bandeiraMexico + Mexico.innerHTML;
				document.getElementById("Segundo_Grupo_C").innerHTML = Argentina.innerHTML + bandeiraArgentina;
				segundoGC = Argentina.innerHTML + bandeiraArgentina;
			} else if (parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ){
				document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraMexico + Mexico.innerHTML;
				primeiroGC = bandeiraMexico + Mexico.innerHTML;
				document.getElementById("Segundo_Grupo_C").innerHTML = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
				segundoGC = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
			}

	else if (parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsPolonia.innerHTML) ||
			parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ||
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsPolonia.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArgentina.innerHTML) ||
			parseInt(ptsMexico.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) || 
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) ||
			parseInt(ptsMexico.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgPolonia.innerHTML) ||
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) > parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsMexico.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsMexico.innerHTML) == parseInt(ptsPolonia.innerHTML) && parseInt(ptsMexico.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgPolonia.innerHTML) && parseInt(sgMexico.innerHTML) > parseInt(sgArgentina.innerHTML) ){
		document.getElementById("Segundo_Grupo_C").innerHTML = Mexico.innerHTML + bandeiraMexico;
		segundoGC = Mexico.innerHTML + bandeiraMexico;
	}
}


function classificacaoPoloniaGC() {
	if (parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML)){
		document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraPolonia + Polonia.innerHTML;
		primeiroGC = bandeiraPolonia + Polonia.innerHTML;
	} else if (parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArgentina.innerHTML) ){
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraPolonia + Polonia.innerHTML;
			primeiroGC = bandeiraPolonia + Polonia.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Argentina.innerHTML + bandeiraArgentina;
			segundoGC = Argentina.innerHTML + bandeiraArgentina;
		} else if (parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgMexico.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraPolonia + Polonia.innerHTML;
			primeiroGC = bandeiraPolonia + Polonia.innerHTML;
			document.getElementById("Segundo_Grupo_C").innerHTML = Mexico.innerHTML + bandeiraMexico;
			segundoGC = Mexico.innerHTML + bandeiraMexico;
		} else if (parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ){
		document.getElementById("Primeiro_Grupo_C").innerHTML = bandeiraPolonia + Polonia.innerHTML;
		primeiroGC = bandeiraPolonia + Polonia.innerHTML;
		document.getElementById("Segundo_Grupo_C").innerHTML = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
		segundoGC = ArabiaSaudita.innerHTML + bandeiraArabiaSaudita;
	}

	else if (parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArgentina.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArgentina.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsMexico.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) > parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) || 
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsArabiaSaudita.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsMexico.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) > parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArgentina.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) > parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgMexico.innerHTML) ||
			parseInt(ptsPolonia.innerHTML) == parseInt(ptsMexico.innerHTML) && parseInt(ptsPolonia.innerHTML) == parseInt(ptsArgentina.innerHTML) && parseInt(ptsPolonia.innerHTML) < parseInt(ptsArabiaSaudita.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgArgentina.innerHTML) && parseInt(sgPolonia.innerHTML) > parseInt(sgMexico.innerHTML) ){
		document.getElementById("Segundo_Grupo_C").innerHTML = Polonia.innerHTML + bandeiraPolonia;
		segundoGC = Polonia.innerHTML + bandeiraPolonia;
	}
}


//Grupo D

var gd1m = document.getElementById('gd1m');
var gd1v = document.getElementById('gd1v');

var gd2m = document.getElementById('gd2m');
var gd2v = document.getElementById('gd2v');

var gd3m = document.getElementById('gd3m');
var gd3v = document.getElementById('gd3v');

var gd4m = document.getElementById('gd4m');
var gd4v = document.getElementById('gd4v');

var gd5m = document.getElementById('gd5m');
var gd5v = document.getElementById('gd5v');

var gd6m = document.getElementById('gd6m');
var gd6v = document.getElementById('gd6v');

var França = document.getElementById('França');
var jFrança = document.getElementById('jFrança');
var vFrança = document.getElementById('vFrança');
var eFrança = document.getElementById('eFrança');
var dFrança = document.getElementById('dFrança');
var ptsFrança = document.getElementById('ptsFrança');

var Repescagem1 = document.getElementById('Repescagem1');
var jRepescagem1 = document.getElementById('jRepescagem1');
var vRepescagem1 = document.getElementById('vRepescagem1');
var eRepescagem1 = document.getElementById('eRepescagem1');
var dRepescagem1 = document.getElementById('dRepescagem1');
var ptsRepescagem1 = document.getElementById('ptsRepescagem1');

var Dinamarca = document.getElementById('Dinamarca');
var jDinamarca = document.getElementById('jDinamarca');
var vDinamarca = document.getElementById('vDinamarca');
var eDinamarca = document.getElementById('eDinamarca');
var dDinamarca = document.getElementById('dDinamarca');
var ptsDinamarca = document.getElementById('ptsDinamarca');

var Tunisia = document.getElementById('Tunisia');
var jTunisia = document.getElementById('jTunisia');
var vTunisia = document.getElementById('vTunisia');
var eTunisia = document.getElementById('eTunisia');
var dTunisia = document.getElementById('dTunisia');
var ptsTunisia = document.getElementById('ptsTunisia');



// Jogos Grupo D

//Jogo 1: Dinamarca X Tunisia

function resultadoJ1GD() {
	jDinamarca.innerHTML = 1;
	jTunisia.innerHTML = 1;

	gpDinamarca.innerHTML = gd1m.value;
	gpTunisia.innerHTML = gd1v.value;

	gcDinamarca.innerHTML = gd1v.value;
	gcTunisia.innerHTML = gd1m.value;

	sgDinamarca.innerHTML = gd1m.value - gd1v.value;
	sgTunisia.innerHTML = gd1v.value - gd1m.value;

	if (gd1m.value == gd1v.value){
		ptsDinamarca.innerHTML = 1;
		ptsTunisia.innerHTML = 1;
		vDinamarca.innerHTML = 0;
		vTunisia.innerHTML = 0;
		eDinamarca.innerHTML = 1;
		eTunisia.innerHTML = 1;
		dDinamarca.innerHTML = 0;
		dTunisia.innerHTML = 0;

	}
	else if (gd1m.value > gd1v.value){
		ptsDinamarca.innerHTML = 3;
		ptsTunisia.innerHTML = 0;
		vDinamarca.innerHTML = 1;
		vTunisia.innerHTML = 0;
		eDinamarca.innerHTML = 0;
		eTunisia.innerHTML = 0;
		dDinamarca.innerHTML = 0;
		dTunisia.innerHTML = 1;
	}
	else if (gd1m.value < gd1v.value){
		ptsDinamarca.innerHTML = 0;
		ptsTunisia.innerHTML = 3;
		vDinamarca.innerHTML = 0;
		vTunisia.innerHTML = 1;
		eDinamarca.innerHTML = 0;
		eTunisia.innerHTML = 0;
		dDinamarca.innerHTML = 1;
		dTunisia.innerHTML = 0;
	}
}

//Jogo 2: França X Repescagem1

function resultadoJ2GD() {
	jFrança.innerHTML = 1;
	jRepescagem1.innerHTML = 1;

	gpFrança.innerHTML = gd2m.value;
	gpRepescagem1.innerHTML = gd2v.value;

	gcFrança.innerHTML = gd2v.value;
	gcRepescagem1.innerHTML = gd2m.value;

	sgFrança.innerHTML = gd2m.value - gd2v.value;
	sgRepescagem1.innerHTML = gd2v.value - gd2m.value;

	if (gd2m.value == gd2v.value){
		ptsFrança.innerHTML = 1;
		ptsRepescagem1.innerHTML = 1;
		vFrança.innerHTML = 0;
		vRepescagem1.innerHTML = 0;
		eFrança.innerHTML = 1;
		eRepescagem1.innerHTML = 1;
		dFrança.innerHTML = 0;
		dRepescagem1.innerHTML = 0;

	}
	else if (gd2m.value > gd2v.value){
		ptsFrança.innerHTML = 3;
		ptsRepescagem1.innerHTML = 0;
		vFrança.innerHTML = 1;
		vRepescagem1.innerHTML = 0;
		eFrança.innerHTML = 0;
		eRepescagem1.innerHTML = 0;
		dFrança.innerHTML = 0;
		dRepescagem1.innerHTML = 1;
	}
	else if (gd2m.value < gd2v.value){
		ptsFrança.innerHTML = 0;
		ptsRepescagem1.innerHTML = 3;
		vFrança.innerHTML = 0;
		vRepescagem1.innerHTML = 1;
		eFrança.innerHTML = 0;
		eRepescagem1.innerHTML = 0;
		dFrança.innerHTML = 1;
		dRepescagem1.innerHTML = 0;
	}
}

//Jogo 3: França X Dinamarca

function resultadoJ3GD() {
	jFrança.innerHTML = 2;
	jDinamarca.innerHTML = 2;

	gpFrança.innerHTML = parseInt(gd2m.value) + parseInt(gd3m.value);
	gpDinamarca.innerHTML = parseInt(gd1m.value) + parseInt(gd3v.value);

	gcFrança.innerHTML = parseInt(gd3v.value) + parseInt(gd2v.value);
	gcDinamarca.innerHTML = parseInt(gd3m.value) + parseInt(gd1v.value);

	sgFrança.innerHTML = parseInt(gd3m.value - gd3v.value) + parseInt(gd2m.value - gd2v.value);
	sgDinamarca.innerHTML = parseInt(gd3v.value - gd3m.value) + parseInt(gd1m.value - gd1v.value);

	if (gd3m.value == gd3v.value){
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 1;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 1;
		eFrança.innerHTML = parseInt(eFrança.innerHTML) + 1;
		eDinamarca.innerHTML = parseInt(eDinamarca.innerHTML) + 1;
	}
	else if (gd3m.value > gd3v.value){
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 3;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 0;
		vFrança.innerHTML = parseInt(vFrança.innerHTML) + 1;
		dDinamarca.innerHTML = parseInt(dDinamarca.innerHTML) + 1;
	}
	else if (gd3m.value < gd3v.value){
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 0;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 3;
		vDinamarca.innerHTML = parseInt(vDinamarca.innerHTML) + 1;
		dFrança.innerHTML = parseInt(dFrança.innerHTML) + 1;
	}
}

// Jogo 4: Tunisia X Repescagem1

function resultadoJ4GD() {
	jTunisia.innerHTML = 2;
	jRepescagem1.innerHTML = 2;

	gpTunisia.innerHTML = parseInt(gd1v.value) + parseInt(gd4m.value);
	gpRepescagem1.innerHTML = parseInt(gd2v.value) + parseInt(gd4v.value);

	gcTunisia.innerHTML = parseInt(gd4v.value) + parseInt(gd1m.value);
	gcRepescagem1.innerHTML = parseInt(gd4m.value) + parseInt(gd2m.value);

	sgTunisia.innerHTML = parseInt(gd4m.value - gd4v.value) + parseInt(gd1v.value - gd1m.value);
	sgRepescagem1.innerHTML = parseInt(gd4v.value - gd4m.value) + parseInt(gd2v.value - gd2m.value);

	if (gd4m.value == gd4v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 1;
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 1;
		eTunisia.innerHTML = parseInt(eTunisia.innerHTML) + 1;
		eRepescagem1.innerHTML = parseInt(eRepescagem1.innerHTML) + 1;
	}
	else if (gd4m.value > gd4v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 3;
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 0;
		vTunisia.innerHTML = parseInt(vTunisia.innerHTML) + 1;
		dRepescagem1.innerHTML = parseInt(dRepescagem1.innerHTML) + 1;
	}
	else if (gd4m.value < gd4v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 0;
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 3;
		vRepescagem1.innerHTML = parseInt(vRepescagem1.innerHTML) + 1;
		dTunisia.innerHTML = parseInt(dTunisia.innerHTML) + 1;
	}
}

// Jogo 5: Tunisia X França

function resultadoJ5GD() {
	jTunisia.innerHTML = 3;
	jFrança.innerHTML = 3;

	gpTunisia.innerHTML = parseInt(gd1v.value) + parseInt(gd4m.value) + parseInt(gd5m.value);
	gpFrança.innerHTML = parseInt(gd2m.value) + parseInt(gd3m.value) + parseInt(gd5v.value);

	gcTunisia.innerHTML = parseInt(gd4v.value) + parseInt(gd1m.value) + parseInt(gd5v.value);
	gcFrança.innerHTML = parseInt(gd3v.value) + parseInt(gd2v.value) + parseInt(gd5m.value);

	sgTunisia.innerHTML = parseInt(gd5m.value - gd5v.value) + parseInt(gd4m.value - gd4v.value) + parseInt(gd1v.value - gd1m.value);
	sgFrança.innerHTML = parseInt(gd5v.value - gd5m.value) + parseInt(gd3m.value - gd3v.value) + parseInt(gd2m.value - gd2v.value);

	if (gd5m.value == gd5v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 1;
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 1;
		eTunisia.innerHTML = parseInt(eTunisia.innerHTML) + 1;
		eFrança.innerHTML = parseInt(eFrança.innerHTML) + 1;
	}
	else if (gd5m.value > gd5v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 3;
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 0;
		vTunisia.innerHTML = parseInt(vTunisia.innerHTML) + 1;
		dFrança.innerHTML = parseInt(dFrança.innerHTML) + 1;
	}
	else if (gd5m.value < gd5v.value){
		ptsTunisia.innerHTML = parseInt(ptsTunisia.innerHTML) + 0;
		ptsFrança.innerHTML = parseInt(ptsFrança.innerHTML) + 3;
		vFrança.innerHTML = parseInt(vFrança.innerHTML) + 1;
		dTunisia.innerHTML = parseInt(dTunisia.innerHTML) + 1;
	}
}

// Jogo 6: Repescagem1 X Dinamarca

function resultadoJ6GD() {
	jRepescagem1.innerHTML = 3;
	jDinamarca.innerHTML = 3;

	gpRepescagem1.innerHTML = parseInt(gd2v.value) + parseInt(gd4v.value) + parseInt(gd6m.value);
	gpDinamarca.innerHTML = parseInt(gd1m.value) + parseInt(gd3v.value) + parseInt(gd6v.value);

	gcRepescagem1.innerHTML = parseInt(gd4m.value) + parseInt(gd2m.value) + parseInt(gd6v.value);
	gcDinamarca.innerHTML = parseInt(gd3m.value) + parseInt(gd1v.value) + parseInt(gd6m.value);

	sgRepescagem1.innerHTML = parseInt(gd6m.value - gd6v.value) + parseInt(gd4v.value - gd4m.value) + parseInt(gd2v.value - gd2m.value);
	sgDinamarca.innerHTML = parseInt(gd6v.value - gd6m.value) + parseInt(gd3v.value - gd3m.value) + parseInt(gd1m.value - gd1v.value);

	if (gd6m.value == gd6v.value){
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 1;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 1;
		eRepescagem1.innerHTML = parseInt(eRepescagem1.innerHTML) + 1;
		eDinamarca.innerHTML = parseInt(eDinamarca.innerHTML) + 1;
	}
	else if (gd6m.value > gd6v.value){
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 3;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 0;
		vRepescagem1.innerHTML = parseInt(vRepescagem1.innerHTML) + 1;
		dDinamarca.innerHTML = parseInt(dDinamarca.innerHTML) + 1;
	}
	else if (gd6m.value < gd6v.value){
		ptsRepescagem1.innerHTML = parseInt(ptsRepescagem1.innerHTML) + 0;
		ptsDinamarca.innerHTML = parseInt(ptsDinamarca.innerHTML) + 3;
		vDinamarca.innerHTML = parseInt(vDinamarca.innerHTML) + 1;
		dRepescagem1.innerHTML = parseInt(dRepescagem1.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraFrança = '<img src = "images/bandeiraFrança.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraRepescagem1 = '<img src = "images/bandeiraRepescagem1.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraDinamarca = '<img src = "images/bandeiraDinamarca.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraTunisia = '<img src = "images/bandeiraTunisia.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGD; 
var segundoGD;

function classificacaoFrançaGD() {
	if (parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML)){
		document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraFrança + França.innerHTML;
		primeiroGD = bandeiraFrança + França.innerHTML;
	} else if (parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgTunisia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraFrança + França.innerHTML;
			primeiroGD = bandeiraFrança + França.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Tunisia.innerHTML + bandeiraTunisia;
			segundoGD = Tunisia.innerHTML + bandeiraTunisia;
		} else if (parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgDinamarca.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraFrança + França.innerHTML;
			primeiroGD = bandeiraFrança + França.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Dinamarca.innerHTML + bandeiraDinamarca;
			segundoGD = Dinamarca.innerHTML + bandeiraDinamarca;
		} else if (parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgRepescagem1.innerHTML) ){
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraFrança + França.innerHTML;
			primeiroGD = bandeiraFrança + França.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Repescagem1.innerHTML + bandeiraRepescagem1;
			segundoGD = Repescagem1.innerHTML + bandeiraRepescagem1;
		}

	else if (parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsTunisia.innerHTML) ||
			parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsFrança.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgRepescagem1.innerHTML) ||
			parseInt(ptsFrança.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsDinamarca.innerHTML) ||
			parseInt(ptsFrança.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsFrança.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgRepescagem1.innerHTML) || 
			parseInt(ptsFrança.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsRepescagem1.innerHTML) ||
			parseInt(ptsFrança.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsFrança.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsFrança.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsFrança.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsFrança.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgTunisia.innerHTML) && parseInt(sgFrança.innerHTML) > parseInt(sgDinamarca.innerHTML) ){
		document.getElementById("Segundo_Grupo_D").innerHTML = França.innerHTML + bandeiraFrança;
		segundoGD = França.innerHTML + bandeiraFrança;
	}
}

function classificacaoRepescagem1GD() {
	if (parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML)){
		document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraRepescagem1 + Repescagem1.innerHTML;
		primeiroGD = bandeiraRepescagem1 + Repescagem1.innerHTML;
	} else if (parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgTunisia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraRepescagem1 + Repescagem1.innerHTML;
			primeiroGD = bandeiraRepescagem1 + Repescagem1.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Tunisia.innerHTML + bandeiraTunisia;
			segundoGD = bandeiraRepescagem1 + Repescagem1.innerHTML;
		} else if (parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgDinamarca.innerHTML) ){
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraRepescagem1 + Repescagem1.innerHTML;
			primeiroGD = bandeiraRepescagem1 + Repescagem1.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Dinamarca.innerHTML + bandeiraDinamarca;
			segundoGD = Dinamarca.innerHTML + bandeiraDinamarca;
		} else if (parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgFrança.innerHTML) ){
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraRepescagem1 + Repescagem1.innerHTML;
			primeiroGD = bandeiraRepescagem1 + Repescagem1.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = França.innerHTML + bandeiraFrança;
			segundoGD = França.innerHTML + bandeiraFrança;
		}

	else if (parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsTunisia.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsDinamarca.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgFrança.innerHTML) || 
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsFrança.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsRepescagem1.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsRepescagem1r.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgTunisia.innerHTML) && parseInt(sgRepescagem1.innerHTML) > parseInt(sgDinamarca.innerHTML) ){
		document.getElementById("Segundo_Grupo_D").innerHTML = Repescagem1.innerHTML + bandeiraRepescagem1;
		segundoGD = Repescagem1.innerHTML + bandeiraRepescagem1;
	}
}


function classificacaoDinamarcaGD() {
	if (parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML)){
		document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraDinamarca + Dinamarca.innerHTML;
		primeiroGD = bandeiraDinamarca + Dinamarca.innerHTML;
	} else if (parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgTunisia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraDinamarca + Dinamarca.innerHTML;
			primeiroGD = bandeiraDinamarca + Dinamarca.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Tunisia.innerHTML + bandeiraTunisia;
			segundoGD = Tunisia.innerHTML + bandeiraTunisia;
		} else if (parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgFrança.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraDinamarca + Dinamarca.innerHTML;
				primeiroGD = bandeiraDinamarca + Dinamarca.innerHTML;
				document.getElementById("Segundo_Grupo_D").innerHTML = França.innerHTML + bandeiraFrança;
				segundoGD = França.innerHTML + bandeiraFrança;
			} else if (parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgRepescagem1.innerHTML) ){
				document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraDinamarca + Dinamarca.innerHTML;
				primeiroGD = bandeiraDinamarca + Dinamarca.innerHTML;
				document.getElementById("Segundo_Grupo_D").innerHTML = Repescagem1.innerHTML + bandeiraRepescagem1;
				segundoGD = Repescagem1.innerHTML + bandeiraRepescagem1;
			}

	else if (parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsTunisia.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgRepescagem1.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsTunisia.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsFrança.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgRepescagem1.innerHTML) || 
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsRepescagem1.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgTunisia.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) > parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsDinamarca.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsDinamarca.innerHTML) == parseInt(ptsTunisia.innerHTML) && parseInt(ptsDinamarca.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgTunisia.innerHTML) && parseInt(sgDinamarca.innerHTML) > parseInt(sgFrança.innerHTML) ){
		document.getElementById("Segundo_Grupo_D").innerHTML = Dinamarca.innerHTML + bandeiraDinamarca;
		segundoGD = Dinamarca.innerHTML + bandeiraDinamarca;
	}
}


function classificacaoTunisiaGD() {
	if (parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML)){
		document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraTunisia + Tunisia.innerHTML;
		primeiroGD = bandeiraTunisia + Tunisia.innerHTML;
	} else if (parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgFrança.innerHTML) ){
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraunisia + Tunisia.innerHTML;
			primeiroGD = bandeiraTunisia + Tunisia.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = França.innerHTML + bandeiraFrança;
			segundoGD = França.innerHTML + bandeiraFrança;
		} else if (parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgDinamarca.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraTunisia + Tunisia.innerHTML;
			primeiroGD = bandeiraTunisia + Tunisia.innerHTML;
			document.getElementById("Segundo_Grupo_D").innerHTML = Dinamarca.innerHTML + bandeiraDinamarca;
			segundoGD = Dinamarca.innerHTML + bandeiraDinamarca;
		} else if (parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgRepescagem1.innerHTML) ){
		document.getElementById("Primeiro_Grupo_D").innerHTML = bandeiraTunisia + Tunisia.innerHTML;
		primeiroGD = bandeiraTunisia + Tunisia.innerHTML;
		document.getElementById("Segundo_Grupo_D").innerHTML = Repescagem1.innerHTML + bandeiraRepescagem1;
		segundoGD = Repescagem1.innerHTML + bandeiraRepescagem1;
	}

	else if (parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsFrança.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgRepescagem1.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsFrança.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsDinamarca.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) > parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgRepescagem1.innerHTML) || 
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsRepescagem1.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsDinamarca.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsRepescagem1.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) > parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgFrança.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) > parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgDinamarca.innerHTML) ||
			parseInt(ptsTunisia.innerHTML) == parseInt(ptsDinamarca.innerHTML) && parseInt(ptsTunisia.innerHTML) == parseInt(ptsFrança.innerHTML) && parseInt(ptsTunisia.innerHTML) < parseInt(ptsRepescagem1.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgFrança.innerHTML) && parseInt(sgTunisia.innerHTML) > parseInt(sgDinamarca.innerHTML) ){
		document.getElementById("Segundo_Grupo_D").innerHTML = Tunisia.innerHTML + bandeiraTunisia;
		segundoGD = Tunisia.innerHTML + bandeiraTunisia;
	}
}


//Grupo E

var ge1m = document.getElementById('ge1m');
var ge1v = document.getElementById('ge1v');

var ge2m = document.getElementById('ge2m');
var ge2v = document.getElementById('ge2v');

var ge3m = document.getElementById('ge3m');
var ge3v = document.getElementById('ge3v');

var ge4m = document.getElementById('ge4m');
var ge4v = document.getElementById('ge4v');

var ge5m = document.getElementById('ge5m');
var ge5v = document.getElementById('ge5v');

var ge6m = document.getElementById('ge6m');
var ge6v = document.getElementById('ge6v');

var Espanha = document.getElementById('Espanha');
var jEspanha = document.getElementById('jEspanha');
var vEspanha = document.getElementById('vEspanha');
var eEspanha = document.getElementById('eEspanha');
var dEspanha = document.getElementById('dEspanha');
var ptsEspanha = document.getElementById('ptsEspanha');

var Repescagem2 = document.getElementById('Repescagem2');
var jRepescagem2 = document.getElementById('jRepescagem2');
var vRepescagem2 = document.getElementById('vRepescagem2');
var eRepescagem2 = document.getElementById('eRepescagem2');
var dRepescagem2 = document.getElementById('dRepescagem2');
var ptsRepescagem2 = document.getElementById('ptsRepescagem2');

var Alemanha = document.getElementById('Alemanha');
var jAlemanha = document.getElementById('jAlemanha');
var vAlemanha = document.getElementById('vAlemanha');
var eAlemanha = document.getElementById('eAlemanha');
var dAlemanha = document.getElementById('dAlemanha');
var ptsAlemanha = document.getElementById('ptsAlemanha');

var Japao = document.getElementById('Japao');
var jJapao = document.getElementById('jJapao');
var vJapao = document.getElementById('vJapao');
var eJapao = document.getElementById('eJapao');
var dJapao = document.getElementById('dJapao');
var ptsJapao = document.getElementById('ptsJapao');



// Jogos Grupo E

//Jogo 1: Alemanha X Japao

function resultadoJ1GE() {
	jAlemanha.innerHTML = 1;
	jJapao.innerHTML = 1;

	gpAlemanha.innerHTML = ge1m.value;
	gpJapao.innerHTML = ge1v.value;

	gcAlemanha.innerHTML = ge1v.value;
	gcJapao.innerHTML = ge1m.value;

	sgAlemanha.innerHTML = ge1m.value - ge1v.value;
	sgJapao.innerHTML = ge1v.value - ge1m.value;

	if (ge1m.value == ge1v.value){
		ptsAlemanha.innerHTML = 1;
		ptsJapao.innerHTML = 1;
		vAlemanha.innerHTML = 0;
		vJapao.innerHTML = 0;
		eAlemanha.innerHTML = 1;
		eJapao.innerHTML = 1;
		dAlemanha.innerHTML = 0;
		dJapao.innerHTML = 0;

	}
	else if (ge1m.value > ge1v.value){
		ptsAlemanha.innerHTML = 3;
		ptsJapao.innerHTML = 0;
		vAlemanha.innerHTML = 1;
		vJapao.innerHTML = 0;
		eAlemanha.innerHTML = 0;
		eJapao.innerHTML = 0;
		dAlemanha.innerHTML = 0;
		dJapao.innerHTML = 1;
	}
	else if (ge1m.value < ge1v.value){
		ptsAlemanha.innerHTML = 0;
		ptsJapao.innerHTML = 3;
		vAlemanha.innerHTML = 0;
		vJapao.innerHTML = 1;
		eAlemanha.innerHTML = 0;
		eJapao.innerHTML = 0;
		dAlemanha.innerHTML = 1;
		dJapao.innerHTML = 0;
	}
}

//Jogo 2: Espanha X Repescagem2

function resultadoJ2GE() {
	jEspanha.innerHTML = 1;
	jRepescagem2.innerHTML = 1;

	gpEspanha.innerHTML = ge2m.value;
	gpRepescagem2.innerHTML = ge2v.value;

	gcEspanha.innerHTML = ge2v.value;
	gcRepescagem2.innerHTML = ge2m.value;

	sgEspanha.innerHTML = ge2m.value - ge2v.value;
	sgRepescagem2.innerHTML = ge2v.value - ge2m.value;

	if (ge2m.value == ge2v.value){
		ptsEspanha.innerHTML = 1;
		ptsRepescagem2.innerHTML = 1;
		vEspanha.innerHTML = 0;
		vRepescagem2.innerHTML = 0;
		eEspanha.innerHTML = 1;
		eRepescagem2.innerHTML = 1;
		dEspanha.innerHTML = 0;
		dRepescagem2.innerHTML = 0;

	}
	else if (ge2m.value > ge2v.value){
		ptsEspanha.innerHTML = 3;
		ptsRepescagem2.innerHTML = 0;
		vEspanha.innerHTML = 1;
		vRepescagem2.innerHTML = 0;
		eEspanha.innerHTML = 0;
		eRepescagem2.innerHTML = 0;
		dEspanha.innerHTML = 0;
		dRepescagem2.innerHTML = 1;
	}
	else if (ge2m.value < ge2v.value){
		ptsEspanha.innerHTML = 0;
		ptsRepescagem2.innerHTML = 3;
		vEspanha.innerHTML = 0;
		vRepescagem2.innerHTML = 1;
		eEspanha.innerHTML = 0;
		eRepescagem2.innerHTML = 0;
		dEspanha.innerHTML = 1;
		dRepescagem2.innerHTML = 0;
	}
}

//Jogo 3: Espanha X Alemanha

function resultadoJ3GE() {
	jEspanha.innerHTML = 2;
	jAlemanha.innerHTML = 2;

	gpEspanha.innerHTML = parseInt(ge2m.value) + parseInt(ge3m.value);
	gpAlemanha.innerHTML = parseInt(ge1m.value) + parseInt(ge3v.value);

	gcEspanha.innerHTML = parseInt(ge3v.value) + parseInt(ge2v.value);
	gcAlemanha.innerHTML = parseInt(ge3m.value) + parseInt(ge1v.value);

	sgEspanha.innerHTML = parseInt(ge3m.value - ge3v.value) + parseInt(ge2m.value - ge2v.value);
	sgAlemanha.innerHTML = parseInt(ge3v.value - ge3m.value) + parseInt(ge1m.value - ge1v.value);

	if (ge3m.value == ge3v.value){
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 1;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 1;
		eEspanha.innerHTML = parseInt(eEspanha.innerHTML) + 1;
		eAlemanha.innerHTML = parseInt(eAlemanha.innerHTML) + 1;
	}
	else if (ge3m.value > ge3v.value){
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 3;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 0;
		vEspanha.innerHTML = parseInt(vEspanha.innerHTML) + 1;
		dAlemanha.innerHTML = parseInt(dAlemanha.innerHTML) + 1;
	}
	else if (ge3m.value < ge3v.value){
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 0;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 3;
		vAlemanha.innerHTML = parseInt(vAlemanha.innerHTML) + 1;
		dEspanha.innerHTML = parseInt(dEspanha.innerHTML) + 1;
	}
}

// Jogo 4: Japao X Repescagem2

function resultadoJ4GE() {
	jJapao.innerHTML = 2;
	jRepescagem2.innerHTML = 2;

	gpJapao.innerHTML = parseInt(ge1v.value) + parseInt(ge4m.value);
	gpRepescagem2.innerHTML = parseInt(ge2v.value) + parseInt(ge4v.value);

	gcJapao.innerHTML = parseInt(ge4v.value) + parseInt(ge1m.value);
	gcRepescagem2.innerHTML = parseInt(ge4m.value) + parseInt(ge2m.value);

	sgJapao.innerHTML = parseInt(ge4m.value - ge4v.value) + parseInt(ge1v.value - ge1m.value);
	sgRepescagem2.innerHTML = parseInt(ge4v.value - ge4m.value) + parseInt(ge2v.value - ge2m.value);

	if (ge4m.value == ge4v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 1;
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 1;
		eJapao.innerHTML = parseInt(eJapao.innerHTML) + 1;
		eRepescagem2.innerHTML = parseInt(eRepescagem2.innerHTML) + 1;
	}
	else if (ge4m.value > ge4v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 3;
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 0;
		vJapao.innerHTML = parseInt(vJapao.innerHTML) + 1;
		dRepescagem2.innerHTML = parseInt(dRepescagem2.innerHTML) + 1;
	}
	else if (ge4m.value < ge4v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 0;
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 3;
		vRepescagem2.innerHTML = parseInt(vRepescagem2.innerHTML) + 1;
		dJapao.innerHTML = parseInt(dJapao.innerHTML) + 1;
	}
}

// Jogo 5: Japao X Espanha

function resultadoJ5GE() {
	jJapao.innerHTML = 3;
	jEspanha.innerHTML = 3;

	gpJapao.innerHTML = parseInt(ge1v.value) + parseInt(ge4m.value) + parseInt(ge5m.value);
	gpEspanha.innerHTML = parseInt(ge2m.value) + parseInt(ge3m.value) + parseInt(ge5v.value);

	gcJapao.innerHTML = parseInt(ge4v.value) + parseInt(ge1m.value) + parseInt(ge5v.value);
	gcEspanha.innerHTML = parseInt(ge3v.value) + parseInt(ge2v.value) + parseInt(ge5m.value);

	sgJapao.innerHTML = parseInt(ge5m.value - ge5v.value) + parseInt(ge4m.value - ge4v.value) + parseInt(ge1v.value - ge1m.value);
	sgEspanha.innerHTML = parseInt(ge5v.value - ge5m.value) + parseInt(ge3m.value - ge3v.value) + parseInt(ge2m.value - ge2v.value);

	if (ge5m.value == ge5v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 1;
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 1;
		eJapao.innerHTML = parseInt(eJapao.innerHTML) + 1;
		eEspanha.innerHTML = parseInt(eEspanha.innerHTML) + 1;
	}
	else if (ge5m.value > ge5v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 3;
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 0;
		vJapao.innerHTML = parseInt(vJapao.innerHTML) + 1;
		dEspanha.innerHTML = parseInt(dEspanha.innerHTML) + 1;
	}
	else if (ge5m.value < ge5v.value){
		ptsJapao.innerHTML = parseInt(ptsJapao.innerHTML) + 0;
		ptsEspanha.innerHTML = parseInt(ptsEspanha.innerHTML) + 3;
		vEspanha.innerHTML = parseInt(vEspanha.innerHTML) + 1;
		dJapao.innerHTML = parseInt(dJapao.innerHTML) + 1;
	}
}

// Jogo 6: Repescagem2 X Alemanha

function resultadoJ6GE() {
	jRepescagem2.innerHTML = 3;
	jAlemanha.innerHTML = 3;

	gpRepescagem2.innerHTML = parseInt(ge2v.value) + parseInt(ge4v.value) + parseInt(ge6m.value);
	gpAlemanha.innerHTML = parseInt(ge1m.value) + parseInt(ge3v.value) + parseInt(ge6v.value);

	gcRepescagem2.innerHTML = parseInt(ge4m.value) + parseInt(ge2m.value) + parseInt(ge6v.value);
	gcAlemanha.innerHTML = parseInt(ge3m.value) + parseInt(ge1v.value) + parseInt(ge6m.value);

	sgRepescagem2.innerHTML = parseInt(ge6m.value - ge6v.value) + parseInt(ge4v.value - ge4m.value) + parseInt(ge2v.value - ge2m.value);
	sgAlemanha.innerHTML = parseInt(ge6v.value - ge6m.value) + parseInt(ge3v.value - ge3m.value) + parseInt(ge1m.value - ge1v.value);

	if (ge6m.value == ge6v.value){
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 1;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 1;
		eRepescagem2.innerHTML = parseInt(eRepescagem2.innerHTML) + 1;
		eAlemanha.innerHTML = parseInt(eAlemanha.innerHTML) + 1;
	}
	else if (ge6m.value > ge6v.value){
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 3;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 0;
		vRepescagem2.innerHTML = parseInt(vRepescagem2.innerHTML) + 1;
		dAlemanha.innerHTML = parseInt(dAlemanha.innerHTML) + 1;
	}
	else if (ge6m.value < ge6v.value){
		ptsRepescagem2.innerHTML = parseInt(ptsRepescagem2.innerHTML) + 0;
		ptsAlemanha.innerHTML = parseInt(ptsAlemanha.innerHTML) + 3;
		vAlemanha.innerHTML = parseInt(vAlemanha.innerHTML) + 1;
		dRepescagem2.innerHTML = parseInt(dRepescagem2.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraEspanha = '<img src = "images/bandeiraEspanha.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraRepescagem2 = '<img src = "images/bandeiraRepescagem2.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraAlemanha = '<img src = "images/bandeiraAlemanha.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraJapao = '<img src = "images/bandeiraJapao.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGE; 
var segundoGE;

function classificacaoEspanhaGE() {
	if (parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML)){
		document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraEspanha + Espanha.innerHTML;
		primeiroGE = bandeiraEspanha + Espanha.innerHTML;
	} else if (parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgJapao.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraEspanha + Espanha.innerHTML;
			primeiroGE = bandeiraEspanha + Espanha.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Japao.innerHTML + bandeiraJapao;
			segundoGE = Japao.innerHTML + bandeiraJapao;
		} else if (parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgAlemanha.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraEspanha + Espanha.innerHTML;
			primeiroGE = bandeiraEspanha + Espanha.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Alemanha.innerHTML + bandeiraAlemanha;
			segundoGE = Alemanha.innerHTML + bandeiraAlemanha;
		} else if (parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) ){
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraEspanha + Espanha.innerHTML;
			primeiroGE = bandeiraEspanha + Espanha.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Repescagem2.innerHTML + bandeiraRepescagem2;
			segundoGE = Repescagem2.innerHTML + bandeiraRepescagem2;
		}

	else if (parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsJapao.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsAlemanha.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) || 
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsEspanha.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsEspanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsEspanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgJapao.innerHTML) && parseInt(sgEspanha.innerHTML) > parseInt(sgAlemanha.innerHTML) ){
		document.getElementById("Segundo_Grupo_E").innerHTML = Espanha.innerHTML + bandeiraEspanha;
		segundoGE = Espanha.innerHTML + bandeiraEspanha;
	}
}

function classificacaoRepescagem2GE() {
	if (parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML)){
		document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraRepescagem2 + Repescagem2.innerHTML;
		primeiroGE = bandeiraRepescagem2 + Repescagem2.innerHTML;
	} else if (parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgJapao.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraRepescagem2 + Repescagem2.innerHTML;
			primeiroGE = bandeiraRepescagem2 + Repescagem2.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Japao.innerHTML + bandeiraJapao;
			segundoGE = bandeiraRepescagem2 + Repescagem2.innerHTML;
		} else if (parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgAlemanha.innerHTML) ){
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraRepescagem2 + Repescagem2.innerHTML;
			primeiroGE = bandeiraRepescagem2 + Repescagem2.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Alemanha.innerHTML + bandeiraAlemanha;
			segundoGE = Alemanha.innerHTML + bandeiraAlemanha;
		} else if (parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgEspanha.innerHTML) ){
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraRepescagem2 + Repescagem2.innerHTML;
			primeiroGE = bandeiraRepescagem2 + Repescagem2.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Espanha.innerHTML + bandeiraEspanha;
			segundoGE = Espanha.innerHTML + bandeiraEspanha;
		}

	else if (parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsJapao.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsAlemanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgEspanha.innerHTML) || 
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsEspanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsRepescagem2.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsRepescagem2r.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgJapao.innerHTML) && parseInt(sgRepescagem2.innerHTML) > parseInt(sgAlemanha.innerHTML) ){
		document.getElementById("Segundo_Grupo_E").innerHTML = Repescagem2.innerHTML + bandeiraRepescagem2;
		segundoGE = Repescagem2.innerHTML + bandeiraRepescagem2;
	}
}


function classificacaoAlemanhaGE() {
	if (parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML)){
		document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraAlemanha + Alemanha.innerHTML;
		primeiroGE = bandeiraAlemanha + Alemanha.innerHTML;
	} else if (parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgJapao.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraAlemanha + Alemanha.innerHTML;
			primeiroGE = bandeiraAlemanha + Alemanha.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Japao.innerHTML + bandeiraJapao;
			segundoGE = Japao.innerHTML + bandeiraJapao;
		} else if (parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgEspanha.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraAlemanha + Alemanha.innerHTML;
				primeiroGE = bandeiraAlemanha + Alemanha.innerHTML;
				document.getElementById("Segundo_Grupo_E").innerHTML = Espanha.innerHTML + bandeiraEspanha;
				segundoGE = Espanha.innerHTML + bandeiraEspanha;
			} else if (parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) ){
				document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraAlemanha + Alemanha.innerHTML;
				primeiroGE = bandeiraAlemanha + Alemanha.innerHTML;
				document.getElementById("Segundo_Grupo_E").innerHTML = Repescagem2.innerHTML + bandeiraRepescagem2;
				segundoGE = Repescagem2.innerHTML + bandeiraRepescagem2;
			}

	else if (parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsJapao.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsJapao.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsEspanha.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) || 
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgJapao.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) > parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsAlemanha.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsAlemanha.innerHTML) == parseInt(ptsJapao.innerHTML) && parseInt(ptsAlemanha.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgJapao.innerHTML) && parseInt(sgAlemanha.innerHTML) > parseInt(sgEspanha.innerHTML) ){
		document.getElementById("Segundo_Grupo_E").innerHTML = Alemanha.innerHTML + bandeiraAlemanha;
		segundoGE = Alemanha.innerHTML + bandeiraAlemanha;
	}
}


function classificacaoJapaoGE() {
	if (parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML)){
		document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraJapao + Japao.innerHTML;
		primeiroGD = bandeiraJapao + Japao.innerHTML;
	} else if (parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgEspanha.innerHTML) ){
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraunisia + Japao.innerHTML;
			primeiroGD = bandeiraJapao + Japao.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Espanha.innerHTML + bandeiraEspanha;
			segundoGD = Espanha.innerHTML + bandeiraEspanha;
		} else if (parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgAlemanha.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraJapao + Japao.innerHTML;
			primeiroGD = bandeiraJapao + Japao.innerHTML;
			document.getElementById("Segundo_Grupo_E").innerHTML = Alemanha.innerHTML + bandeiraAlemanha;
			segundoGD = Alemanha.innerHTML + bandeiraAlemanha;
		} else if (parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgRepescagem2.innerHTML) ){
		document.getElementById("Primeiro_Grupo_E").innerHTML = bandeiraJapao + Japao.innerHTML;
		primeiroGD = bandeiraJapao + Japao.innerHTML;
		document.getElementById("Segundo_Grupo_E").innerHTML = Repescagem2.innerHTML + bandeiraRepescagem2;
		segundoGD = Repescagem2.innerHTML + bandeiraRepescagem2;
	}

	else if (parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsEspanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgRepescagem2.innerHTML) ||
			parseInt(ptsJapao.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsEspanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsAlemanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) > parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgRepescagem2.innerHTML) || 
			parseInt(ptsJapao.innerHTML) == parseInt(ptsRepescagem2.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsAlemanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsRepescagem2.innerHTML) ||
			parseInt(ptsJapao.innerHTML) > parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgEspanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) > parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgAlemanha.innerHTML) ||
			parseInt(ptsJapao.innerHTML) == parseInt(ptsAlemanha.innerHTML) && parseInt(ptsJapao.innerHTML) == parseInt(ptsEspanha.innerHTML) && parseInt(ptsJapao.innerHTML) < parseInt(ptsRepescagem2.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgEspanha.innerHTML) && parseInt(sgJapao.innerHTML) > parseInt(sgAlemanha.innerHTML) ){
		document.getElementById("Segundo_Grupo_E").innerHTML = Japao.innerHTML + bandeiraJapao;
		segundoGE = Japao.innerHTML + bandeiraJapao;
	}
}


//Grupo F

var gf1m = document.getElementById('gf1m');
var gf1v = document.getElementById('gf1v');

var gf2m = document.getElementById('gf2m');
var gf2v = document.getElementById('gf2v');

var gf3m = document.getElementById('gf3m');
var gf3v = document.getElementById('gf3v');

var gf4m = document.getElementById('gf4m');
var gf4v = document.getElementById('gf4v');

var gf5m = document.getElementById('gf5m');
var gf5v = document.getElementById('gf5v');

var gf6m = document.getElementById('gf6m');
var gf6v = document.getElementById('gf6v');

var Belgica = document.getElementById('Belgica');
var jBelgica = document.getElementById('jBelgica');
var vBelgica = document.getElementById('vBelgica');
var eBelgica = document.getElementById('eBelgica');
var dBelgica = document.getElementById('dBelgica');
var ptsBelgica = document.getElementById('ptsBelgica');

var Canada = document.getElementById('Canada');
var jCanada = document.getElementById('jCanada');
var vCanada = document.getElementById('vCanada');
var eCanada = document.getElementById('eCanada');
var dCanada = document.getElementById('dCanada');
var ptsCanada = document.getElementById('ptsCanada');

var Marrocos = document.getElementById('Marrocos');
var jMarrocos = document.getElementById('jMarrocos');
var vMarrocos = document.getElementById('vMarrocos');
var eMarrocos = document.getElementById('eMarrocos');
var dMarrocos = document.getElementById('dMarrocos');
var ptsMarrocos = document.getElementById('ptsMarrocos');

var Croacia = document.getElementById('Croacia');
var jCroacia = document.getElementById('jCroacia');
var vCroacia = document.getElementById('vCroacia');
var eCroacia = document.getElementById('eCroacia');
var dCroacia = document.getElementById('dCroacia');
var ptsCroacia = document.getElementById('ptsCroacia');



// Jogos Grupo F

//Jogo 1: Marrocos X Croacia

function resultadoJ1GF() {
	jMarrocos.innerHTML = 1;
	jCroacia.innerHTML = 1;

	gpMarrocos.innerHTML = gf1m.value;
	gpCroacia.innerHTML = gf1v.value;

	gcMarrocos.innerHTML = gf1v.value;
	gcCroacia.innerHTML = gf1m.value;

	sgMarrocos.innerHTML = gf1m.value - gf1v.value;
	sgCroacia.innerHTML = gf1v.value - gf1m.value;

	if (gf1m.value == gf1v.value){
		ptsMarrocos.innerHTML = 1;
		ptsCroacia.innerHTML = 1;
		vMarrocos.innerHTML = 0;
		vCroacia.innerHTML = 0;
		eMarrocos.innerHTML = 1;
		eCroacia.innerHTML = 1;
		dMarrocos.innerHTML = 0;
		dCroacia.innerHTML = 0;

	}
	else if (gf1m.value > gf1v.value){
		ptsMarrocos.innerHTML = 3;
		ptsCroacia.innerHTML = 0;
		vMarrocos.innerHTML = 1;
		vCroacia.innerHTML = 0;
		eMarrocos.innerHTML = 0;
		eCroacia.innerHTML = 0;
		dMarrocos.innerHTML = 0;
		dCroacia.innerHTML = 1;
	}
	else if (gf1m.value < gf1v.value){
		ptsMarrocos.innerHTML = 0;
		ptsCroacia.innerHTML = 3;
		vMarrocos.innerHTML = 0;
		vCroacia.innerHTML = 1;
		eMarrocos.innerHTML = 0;
		eCroacia.innerHTML = 0;
		dMarrocos.innerHTML = 1;
		dCroacia.innerHTML = 0;
	}
}

//Jogo 2: Belgica X Canada

function resultadoJ2GF() {
	jBelgica.innerHTML = 1;
	jCanada.innerHTML = 1;

	gpBelgica.innerHTML = gf2m.value;
	gpCanada.innerHTML = gf2v.value;

	gcBelgica.innerHTML = gf2v.value;
	gcCanada.innerHTML = gf2m.value;

	sgBelgica.innerHTML = gf2m.value - gf2v.value;
	sgCanada.innerHTML = gf2v.value - gf2m.value;

	if (gf2m.value == gf2v.value){
		ptsBelgica.innerHTML = 1;
		ptsCanada.innerHTML = 1;
		vBelgica.innerHTML = 0;
		vCanada.innerHTML = 0;
		eBelgica.innerHTML = 1;
		eCanada.innerHTML = 1;
		dBelgica.innerHTML = 0;
		dCanada.innerHTML = 0;

	}
	else if (gf2m.value > gf2v.value){
		ptsBelgica.innerHTML = 3;
		ptsCanada.innerHTML = 0;
		vBelgica.innerHTML = 1;
		vCanada.innerHTML = 0;
		eBelgica.innerHTML = 0;
		eCanada.innerHTML = 0;
		dBelgica.innerHTML = 0;
		dCanada.innerHTML = 1;
	}
	else if (gf2m.value < gf2v.value){
		ptsBelgica.innerHTML = 0;
		ptsCanada.innerHTML = 3;
		vBelgica.innerHTML = 0;
		vCanada.innerHTML = 1;
		eBelgica.innerHTML = 0;
		eCanada.innerHTML = 0;
		dBelgica.innerHTML = 1;
		dCanada.innerHTML = 0;
	}
}

//Jogo 3: Belgica X Marrocos

function resultadoJ3GF() {
	jBelgica.innerHTML = 2;
	jMarrocos.innerHTML = 2;

	gpBelgica.innerHTML = parseInt(gf2m.value) + parseInt(gf3m.value);
	gpMarrocos.innerHTML = parseInt(gf1m.value) + parseInt(gf3v.value);

	gcBelgica.innerHTML = parseInt(gf3v.value) + parseInt(gf2v.value);
	gcMarrocos.innerHTML = parseInt(gf3m.value) + parseInt(gf1v.value);

	sgBelgica.innerHTML = parseInt(gf3m.value - gf3v.value) + parseInt(gf2m.value - gf2v.value);
	sgMarrocos.innerHTML = parseInt(gf3v.value - gf3m.value) + parseInt(gf1m.value - gf1v.value);

	if (gf3m.value == gf3v.value){
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 1;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 1;
		eBelgica.innerHTML = parseInt(eBelgica.innerHTML) + 1;
		eMarrocos.innerHTML = parseInt(eMarrocos.innerHTML) + 1;
	}
	else if (gf3m.value > gf3v.value){
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 3;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 0;
		vBelgica.innerHTML = parseInt(vBelgica.innerHTML) + 1;
		dMarrocos.innerHTML = parseInt(dMarrocos.innerHTML) + 1;
	}
	else if (gf3m.value < gf3v.value){
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 0;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 3;
		vMarrocos.innerHTML = parseInt(vMarrocos.innerHTML) + 1;
		dBelgica.innerHTML = parseInt(dBelgica.innerHTML) + 1;
	}
}

// Jogo 4: Croacia X Canada

function resultadoJ4GF() {
	jCroacia.innerHTML = 2;
	jCanada.innerHTML = 2;

	gpCroacia.innerHTML = parseInt(gf1v.value) + parseInt(gf4m.value);
	gpCanada.innerHTML = parseInt(gf2v.value) + parseInt(gf4v.value);

	gcCroacia.innerHTML = parseInt(gf4v.value) + parseInt(gf1m.value);
	gcCanada.innerHTML = parseInt(gf4m.value) + parseInt(gf2m.value);

	sgCroacia.innerHTML = parseInt(gf4m.value - gf4v.value) + parseInt(gf1v.value - gf1m.value);
	sgCanada.innerHTML = parseInt(gf4v.value - gf4m.value) + parseInt(gf2v.value - gf2m.value);

	if (gf4m.value == gf4v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 1;
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 1;
		eCroacia.innerHTML = parseInt(eCroacia.innerHTML) + 1;
		eCanada.innerHTML = parseInt(eCanada.innerHTML) + 1;
	}
	else if (gf4m.value > gf4v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 3;
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 0;
		vCroacia.innerHTML = parseInt(vCroacia.innerHTML) + 1;
		dCanada.innerHTML = parseInt(dCanada.innerHTML) + 1;
	}
	else if (gf4m.value < gf4v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 0;
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 3;
		vCanada.innerHTML = parseInt(vCanada.innerHTML) + 1;
		dCroacia.innerHTML = parseInt(dCroacia.innerHTML) + 1;
	}
}

// Jogo 5: Croacia X Belgica

function resultadoJ5GF() {
	jCroacia.innerHTML = 3;
	jBelgica.innerHTML = 3;

	gpCroacia.innerHTML = parseInt(gf1v.value) + parseInt(gf4m.value) + parseInt(gf5m.value);
	gpBelgica.innerHTML = parseInt(gf2m.value) + parseInt(gf3m.value) + parseInt(gf5v.value);

	gcCroacia.innerHTML = parseInt(gf4v.value) + parseInt(gf1m.value) + parseInt(gf5v.value);
	gcBelgica.innerHTML = parseInt(gf3v.value) + parseInt(gf2v.value) + parseInt(gf5m.value);

	sgCroacia.innerHTML = parseInt(gf5m.value - gf5v.value) + parseInt(gf4m.value - gf4v.value) + parseInt(gf1v.value - gf1m.value);
	sgBelgica.innerHTML = parseInt(gf5v.value - gf5m.value) + parseInt(gf3m.value - gf3v.value) + parseInt(gf2m.value - gf2v.value);

	if (gf5m.value == gf5v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 1;
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 1;
		eCroacia.innerHTML = parseInt(eCroacia.innerHTML) + 1;
		eBelgica.innerHTML = parseInt(eBelgica.innerHTML) + 1;
	}
	else if (gf5m.value > gf5v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 3;
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 0;
		vCroacia.innerHTML = parseInt(vCroacia.innerHTML) + 1;
		dBelgica.innerHTML = parseInt(dBelgica.innerHTML) + 1;
	}
	else if (gf5m.value < gf5v.value){
		ptsCroacia.innerHTML = parseInt(ptsCroacia.innerHTML) + 0;
		ptsBelgica.innerHTML = parseInt(ptsBelgica.innerHTML) + 3;
		vBelgica.innerHTML = parseInt(vBelgica.innerHTML) + 1;
		dCroacia.innerHTML = parseInt(dCroacia.innerHTML) + 1;
	}
}

// Jogo 6: Canada X Marrocos

function resultadoJ6GF() {
	jCanada.innerHTML = 3;
	jMarrocos.innerHTML = 3;

	gpCanada.innerHTML = parseInt(gf2v.value) + parseInt(gf4v.value) + parseInt(gf6m.value);
	gpMarrocos.innerHTML = parseInt(gf1m.value) + parseInt(gf3v.value) + parseInt(gf6v.value);

	gcCanada.innerHTML = parseInt(gf4m.value) + parseInt(gf2m.value) + parseInt(gf6v.value);
	gcMarrocos.innerHTML = parseInt(gf3m.value) + parseInt(gf1v.value) + parseInt(gf6m.value);

	sgCanada.innerHTML = parseInt(gf6m.value - gf6v.value) + parseInt(gf4v.value - gf4m.value) + parseInt(gf2v.value - gf2m.value);
	sgMarrocos.innerHTML = parseInt(gf6v.value - gf6m.value) + parseInt(gf3v.value - gf3m.value) + parseInt(gf1m.value - gf1v.value);

	if (gf6m.value == gf6v.value){
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 1;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 1;
		eCanada.innerHTML = parseInt(eCanada.innerHTML) + 1;
		eMarrocos.innerHTML = parseInt(eMarrocos.innerHTML) + 1;
	}
	else if (gf6m.value > gf6v.value){
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 3;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 0;
		vCanada.innerHTML = parseInt(vCanada.innerHTML) + 1;
		dMarrocos.innerHTML = parseInt(dMarrocos.innerHTML) + 1;
	}
	else if (gf6m.value < gf6v.value){
		ptsCanada.innerHTML = parseInt(ptsCanada.innerHTML) + 0;
		ptsMarrocos.innerHTML = parseInt(ptsMarrocos.innerHTML) + 3;
		vMarrocos.innerHTML = parseInt(vMarrocos.innerHTML) + 1;
		dCanada.innerHTML = parseInt(dCanada.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraBelgica = '<img src = "images/bandeiraBelgica.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraCanada = '<img src = "images/bandeiraCanada.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraMarrocos = '<img src = "images/bandeiraMarrocos.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraCroacia = '<img src = "images/bandeiraCroacia.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGF; 
var segundoGF;

function classificacaoBelgicaGF() {
	if (parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML)){
		document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraBelgica + Belgica.innerHTML;
		primeiroGF = bandeiraBelgica + Belgica.innerHTML;
	} else if (parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCroacia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraBelgica + Belgica.innerHTML;
			primeiroGF = bandeiraBelgica + Belgica.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Croacia.innerHTML + bandeiraCroacia;
			segundoGF = Croacia.innerHTML + bandeiraCroacia;
		} else if (parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgMarrocos.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraBelgica + Belgica.innerHTML;
			primeiroGF = bandeiraBelgica + Belgica.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Marrocos.innerHTML + bandeiraMarrocos;
			segundoGF = Marrocos.innerHTML + bandeiraMarrocos;
		} else if (parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCanada.innerHTML) ){
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraBelgica + Belgica.innerHTML;
			primeiroGF = bandeiraBelgica + Belgica.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Canada.innerHTML + bandeiraCanada;
			segundoGF = Canada.innerHTML + bandeiraCanada;
		}

	else if (parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCroacia.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCanada.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsMarrocos.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCanada.innerHTML) || 
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCanada.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsBelgica.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsBelgica.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsBelgica.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgCroacia.innerHTML) && parseInt(sgBelgica.innerHTML) > parseInt(sgMarrocos.innerHTML) ){
		document.getElementById("Segundo_Grupo_F").innerHTML = Belgica.innerHTML + bandeiraBelgica;
		segundoGF = Belgica.innerHTML + bandeiraBelgica;
	}
}

function classificacaoCanadaGF() {
	if (parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML)){
		document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCanada + Canada.innerHTML;
		primeiroGF = bandeiraCanada + Canada.innerHTML;
	} else if (parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgCroacia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCanada + Canada.innerHTML;
			primeiroGF = bandeiraCanada + Canada.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Croacia.innerHTML + bandeiraCroacia;
			segundoGF = bandeiraCanada + Canada.innerHTML;
		} else if (parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgMarrocos.innerHTML) ){
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCanada + Canada.innerHTML;
			primeiroGF = bandeiraCanada + Canada.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Marrocos.innerHTML + bandeiraMarrocos;
			segundoGF = Marrocos.innerHTML + bandeiraMarrocos;
		} else if (parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgBelgica.innerHTML) ){
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCanada + Canada.innerHTML;
			primeiroGF = bandeiraCanada + Canada.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Belgica.innerHTML + bandeiraBelgica;
			segundoGF = Belgica.innerHTML + bandeiraBelgica;
		}

	else if (parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsCroacia.innerHTML) ||
			parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCanada.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsCanada.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsMarrocos.innerHTML) ||
			parseInt(ptsCanada.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsCanada.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgBelgica.innerHTML) || 
			parseInt(ptsCanada.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsBelgica.innerHTML) ||
			parseInt(ptsCanada.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsCanada.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanada.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCanada.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCanada.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsCanadar.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgCroacia.innerHTML) && parseInt(sgCanada.innerHTML) > parseInt(sgMarrocos.innerHTML) ){
		document.getElementById("Segundo_Grupo_F").innerHTML = Canada.innerHTML + bandeiraCanada;
		segundoGF = Canada.innerHTML + bandeiraCanada;
	}
}


function classificacaoMarrocosGF() {
	if (parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML)){
		document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraMarrocos + Marrocos.innerHTML;
		primeiroGF = bandeiraMarrocos + Marrocos.innerHTML;
	} else if (parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCroacia.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraMarrocos + Marrocos.innerHTML;
			primeiroGF = bandeiraMarrocos + Marrocos.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Croacia.innerHTML + bandeiraCroacia;
			segundoGF = Croacia.innerHTML + bandeiraCroacia;
		} else if (parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgBelgica.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraMarrocos + Marrocos.innerHTML;
				primeiroGF = bandeiraMarrocos + Marrocos.innerHTML;
				document.getElementById("Segundo_Grupo_F").innerHTML = Belgica.innerHTML + bandeiraBelgica;
				segundoGF = Belgica.innerHTML + bandeiraBelgica;
			} else if (parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCanada.innerHTML) ){
				document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraMarrocos + Marrocos.innerHTML;
				primeiroGF = bandeiraMarrocos + Marrocos.innerHTML;
				document.getElementById("Segundo_Grupo_F").innerHTML = Canada.innerHTML + bandeiraCanada;
				segundoGF = Canada.innerHTML + bandeiraCanada;
			}

	else if (parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCroacia.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCanada.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCroacia.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsBelgica.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCanada.innerHTML) || 
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCanada.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCroacia.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) > parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsMarrocos.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsMarrocos.innerHTML) == parseInt(ptsCroacia.innerHTML) && parseInt(ptsMarrocos.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgCroacia.innerHTML) && parseInt(sgMarrocos.innerHTML) > parseInt(sgBelgica.innerHTML) ){
		document.getElementById("Segundo_Grupo_F").innerHTML = Marrocos.innerHTML + bandeiraMarrocos;
		segundoGF = Marrocos.innerHTML + bandeiraMarrocos;
	}
}


function classificacaoCroaciaGF() {
	if (parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML)){
		document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCroacia + Croacia.innerHTML;
		primeiroGD = bandeiraCroacia + Croacia.innerHTML;
	} else if (parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgBelgica.innerHTML) ){
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraunisia + Croacia.innerHTML;
			primeiroGD = bandeiraCroacia + Croacia.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Belgica.innerHTML + bandeiraBelgica;
			segundoGD = Belgica.innerHTML + bandeiraBelgica;
		} else if (parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgMarrocos.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCroacia + Croacia.innerHTML;
			primeiroGD = bandeiraCroacia + Croacia.innerHTML;
			document.getElementById("Segundo_Grupo_F").innerHTML = Marrocos.innerHTML + bandeiraMarrocos;
			segundoGD = Marrocos.innerHTML + bandeiraMarrocos;
		} else if (parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgCanada.innerHTML) ){
		document.getElementById("Primeiro_Grupo_F").innerHTML = bandeiraCroacia + Croacia.innerHTML;
		primeiroGD = bandeiraCroacia + Croacia.innerHTML;
		document.getElementById("Segundo_Grupo_F").innerHTML = Canada.innerHTML + bandeiraCanada;
		segundoGD = Canada.innerHTML + bandeiraCanada;
	}

	else if (parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsBelgica.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgCanada.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsBelgica.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsMarrocos.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) > parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgCanada.innerHTML) || 
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsCanada.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsMarrocos.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsCanada.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) > parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgBelgica.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) > parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgMarrocos.innerHTML) ||
			parseInt(ptsCroacia.innerHTML) == parseInt(ptsMarrocos.innerHTML) && parseInt(ptsCroacia.innerHTML) == parseInt(ptsBelgica.innerHTML) && parseInt(ptsCroacia.innerHTML) < parseInt(ptsCanada.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgBelgica.innerHTML) && parseInt(sgCroacia.innerHTML) > parseInt(sgMarrocos.innerHTML) ){
		document.getElementById("Segundo_Grupo_F").innerHTML = Croacia.innerHTML + bandeiraCroacia;
		segundoGF = Croacia.innerHTML + bandeiraCroacia;
	}
}


//Grupo G

var gg1m = document.getElementById('gg1m');
var gg1v = document.getElementById('gg1v');

var gg2m = document.getElementById('gg2m');
var gg2v = document.getElementById('gg2v');

var gg3m = document.getElementById('gg3m');
var gg3v = document.getElementById('gg3v');

var gg4m = document.getElementById('gg4m');
var gg4v = document.getElementById('gg4v');

var gg5m = document.getElementById('gg5m');
var gg5v = document.getElementById('gg5v');

var gg6m = document.getElementById('gg6m');
var gg6v = document.getElementById('gg6v');

var Brasil = document.getElementById('Brasil');
var jBrasil = document.getElementById('jBrasil');
var vBrasil = document.getElementById('vBrasil');
var eBrasil = document.getElementById('eBrasil');
var dBrasil = document.getElementById('dBrasil');
var ptsBrasil = document.getElementById('ptsBrasil');

var Servia = document.getElementById('Servia');
var jServia = document.getElementById('jServia');
var vServia = document.getElementById('vServia');
var eServia = document.getElementById('eServia');
var dServia = document.getElementById('dServia');
var ptsServia = document.getElementById('ptsServia');

var Suiça = document.getElementById('Suiça');
var jSuiça = document.getElementById('jSuiça');
var vSuiça = document.getElementById('vSuiça');
var eSuiça = document.getElementById('eSuiça');
var dSuiça = document.getElementById('dSuiça');
var ptsSuiça = document.getElementById('ptsSuiça');

var Camaroes = document.getElementById('Camaroes');
var jCamaroes = document.getElementById('jCamaroes');
var vCamaroes = document.getElementById('vCamaroes');
var eCamaroes = document.getElementById('eCamaroes');
var dCamaroes = document.getElementById('dCamaroes');
var ptsCamaroes = document.getElementById('ptsCamaroes');



// Jogos Grupo G

//Jogo 1: Suiça X Camaroes

function resultadoJ1GG() {
	jSuiça.innerHTML = 1;
	jCamaroes.innerHTML = 1;

	gpSuiça.innerHTML = gg1m.value;
	gpCamaroes.innerHTML = gg1v.value;

	gcSuiça.innerHTML = gg1v.value;
	gcCamaroes.innerHTML = gg1m.value;

	sgSuiça.innerHTML = gg1m.value - gg1v.value;
	sgCamaroes.innerHTML = gg1v.value - gg1m.value;

	if (gg1m.value == gg1v.value){
		ptsSuiça.innerHTML = 1;
		ptsCamaroes.innerHTML = 1;
		vSuiça.innerHTML = 0;
		vCamaroes.innerHTML = 0;
		eSuiça.innerHTML = 1;
		eCamaroes.innerHTML = 1;
		dSuiça.innerHTML = 0;
		dCamaroes.innerHTML = 0;

	}
	else if (gg1m.value > gg1v.value){
		ptsSuiça.innerHTML = 3;
		ptsCamaroes.innerHTML = 0;
		vSuiça.innerHTML = 1;
		vCamaroes.innerHTML = 0;
		eSuiça.innerHTML = 0;
		eCamaroes.innerHTML = 0;
		dSuiça.innerHTML = 0;
		dCamaroes.innerHTML = 1;
	}
	else if (gg1m.value < gg1v.value){
		ptsSuiça.innerHTML = 0;
		ptsCamaroes.innerHTML = 3;
		vSuiça.innerHTML = 0;
		vCamaroes.innerHTML = 1;
		eSuiça.innerHTML = 0;
		eCamaroes.innerHTML = 0;
		dSuiça.innerHTML = 1;
		dCamaroes.innerHTML = 0;
	}
}

//Jogo 2: Brasil X Servia

function resultadoJ2GG() {
	jBrasil.innerHTML = 1;
	jServia.innerHTML = 1;

	gpBrasil.innerHTML = gg2m.value;
	gpServia.innerHTML = gg2v.value;

	gcBrasil.innerHTML = gg2v.value;
	gcServia.innerHTML = gg2m.value;

	sgBrasil.innerHTML = gg2m.value - gg2v.value;
	sgServia.innerHTML = gg2v.value - gg2m.value;

	if (gg2m.value == gg2v.value){
		ptsBrasil.innerHTML = 1;
		ptsServia.innerHTML = 1;
		vBrasil.innerHTML = 0;
		vServia.innerHTML = 0;
		eBrasil.innerHTML = 1;
		eServia.innerHTML = 1;
		dBrasil.innerHTML = 0;
		dServia.innerHTML = 0;

	}
	else if (gg2m.value > gg2v.value){
		ptsBrasil.innerHTML = 3;
		ptsServia.innerHTML = 0;
		vBrasil.innerHTML = 1;
		vServia.innerHTML = 0;
		eBrasil.innerHTML = 0;
		eServia.innerHTML = 0;
		dBrasil.innerHTML = 0;
		dServia.innerHTML = 1;
	}
	else if (gg2m.value < gg2v.value){
		ptsBrasil.innerHTML = 0;
		ptsServia.innerHTML = 3;
		vBrasil.innerHTML = 0;
		vServia.innerHTML = 1;
		eBrasil.innerHTML = 0;
		eServia.innerHTML = 0;
		dBrasil.innerHTML = 1;
		dServia.innerHTML = 0;
	}
}

//Jogo 3: Brasil X Suiça

function resultadoJ3GG() {
	jBrasil.innerHTML = 2;
	jSuiça.innerHTML = 2;

	gpBrasil.innerHTML = parseInt(gg2m.value) + parseInt(gg3m.value);
	gpSuiça.innerHTML = parseInt(gg1m.value) + parseInt(gg3v.value);

	gcBrasil.innerHTML = parseInt(gg3v.value) + parseInt(gg2v.value);
	gcSuiça.innerHTML = parseInt(gg3m.value) + parseInt(gg1v.value);

	sgBrasil.innerHTML = parseInt(gg3m.value - gg3v.value) + parseInt(gg2m.value - gg2v.value);
	sgSuiça.innerHTML = parseInt(gg3v.value - gg3m.value) + parseInt(gg1m.value - gg1v.value);

	if (gg3m.value == gg3v.value){
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 1;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 1;
		eBrasil.innerHTML = parseInt(eBrasil.innerHTML) + 1;
		eSuiça.innerHTML = parseInt(eSuiça.innerHTML) + 1;
	}
	else if (gg3m.value > gg3v.value){
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 3;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 0;
		vBrasil.innerHTML = parseInt(vBrasil.innerHTML) + 1;
		dSuiça.innerHTML = parseInt(dSuiça.innerHTML) + 1;
	}
	else if (gg3m.value < gg3v.value){
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 0;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 3;
		vSuiça.innerHTML = parseInt(vSuiça.innerHTML) + 1;
		dBrasil.innerHTML = parseInt(dBrasil.innerHTML) + 1;
	}
}

// Jogo 4: Camaroes X Servia

function resultadoJ4GG() {
	jCamaroes.innerHTML = 2;
	jServia.innerHTML = 2;

	gpCamaroes.innerHTML = parseInt(gg1v.value) + parseInt(gg4m.value);
	gpServia.innerHTML = parseInt(gg2v.value) + parseInt(gg4v.value);

	gcCamaroes.innerHTML = parseInt(gg4v.value) + parseInt(gg1m.value);
	gcServia.innerHTML = parseInt(gg4m.value) + parseInt(gg2m.value);

	sgCamaroes.innerHTML = parseInt(gg4m.value - gg4v.value) + parseInt(gg1v.value - gg1m.value);
	sgServia.innerHTML = parseInt(gg4v.value - gg4m.value) + parseInt(gg2v.value - gg2m.value);

	if (gg4m.value == gg4v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 1;
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 1;
		eCamaroes.innerHTML = parseInt(eCamaroes.innerHTML) + 1;
		eServia.innerHTML = parseInt(eServia.innerHTML) + 1;
	}
	else if (gg4m.value > gg4v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 3;
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 0;
		vCamaroes.innerHTML = parseInt(vCamaroes.innerHTML) + 1;
		dServia.innerHTML = parseInt(dServia.innerHTML) + 1;
	}
	else if (gg4m.value < gg4v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 0;
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 3;
		vServia.innerHTML = parseInt(vServia.innerHTML) + 1;
		dCamaroes.innerHTML = parseInt(dCamaroes.innerHTML) + 1;
	}
}

// Jogo 5: Camaroes X Brasil

function resultadoJ5GG() {
	jCamaroes.innerHTML = 3;
	jBrasil.innerHTML = 3;

	gpCamaroes.innerHTML = parseInt(gg1v.value) + parseInt(gg4m.value) + parseInt(gg5m.value);
	gpBrasil.innerHTML = parseInt(gg2m.value) + parseInt(gg3m.value) + parseInt(gg5v.value);

	gcCamaroes.innerHTML = parseInt(gg4v.value) + parseInt(gg1m.value) + parseInt(gg5v.value);
	gcBrasil.innerHTML = parseInt(gg3v.value) + parseInt(gg2v.value) + parseInt(gg5m.value);

	sgCamaroes.innerHTML = parseInt(gg5m.value - gg5v.value) + parseInt(gg4m.value - gg4v.value) + parseInt(gg1v.value - gg1m.value);
	sgBrasil.innerHTML = parseInt(gg5v.value - gg5m.value) + parseInt(gg3m.value - gg3v.value) + parseInt(gg2m.value - gg2v.value);

	if (gg5m.value == gg5v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 1;
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 1;
		eCamaroes.innerHTML = parseInt(eCamaroes.innerHTML) + 1;
		eBrasil.innerHTML = parseInt(eBrasil.innerHTML) + 1;
	}
	else if (gg5m.value > gg5v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 3;
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 0;
		vCamaroes.innerHTML = parseInt(vCamaroes.innerHTML) + 1;
		dBrasil.innerHTML = parseInt(dBrasil.innerHTML) + 1;
	}
	else if (gg5m.value < gg5v.value){
		ptsCamaroes.innerHTML = parseInt(ptsCamaroes.innerHTML) + 0;
		ptsBrasil.innerHTML = parseInt(ptsBrasil.innerHTML) + 3;
		vBrasil.innerHTML = parseInt(vBrasil.innerHTML) + 1;
		dCamaroes.innerHTML = parseInt(dCamaroes.innerHTML) + 1;
	}
}

// Jogo 6: Servia X Suiça

function resultadoJ6GG() {
	jServia.innerHTML = 3;
	jSuiça.innerHTML = 3;

	gpServia.innerHTML = parseInt(gg2v.value) + parseInt(gg4v.value) + parseInt(gg6m.value);
	gpSuiça.innerHTML = parseInt(gg1m.value) + parseInt(gg3v.value) + parseInt(gg6v.value);

	gcServia.innerHTML = parseInt(gg4m.value) + parseInt(gg2m.value) + parseInt(gg6v.value);
	gcSuiça.innerHTML = parseInt(gg3m.value) + parseInt(gg1v.value) + parseInt(gg6m.value);

	sgServia.innerHTML = parseInt(gg6m.value - gg6v.value) + parseInt(gg4v.value - gg4m.value) + parseInt(gg2v.value - gg2m.value);
	sgSuiça.innerHTML = parseInt(gg6v.value - gg6m.value) + parseInt(gg3v.value - gg3m.value) + parseInt(gg1m.value - gg1v.value);

	if (gg6m.value == gg6v.value){
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 1;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 1;
		eServia.innerHTML = parseInt(eServia.innerHTML) + 1;
		eSuiça.innerHTML = parseInt(eSuiça.innerHTML) + 1;
	}
	else if (gg6m.value > gg6v.value){
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 3;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 0;
		vServia.innerHTML = parseInt(vServia.innerHTML) + 1;
		dSuiça.innerHTML = parseInt(dSuiça.innerHTML) + 1;
	}
	else if (gg6m.value < gg6v.value){
		ptsServia.innerHTML = parseInt(ptsServia.innerHTML) + 0;
		ptsSuiça.innerHTML = parseInt(ptsSuiça.innerHTML) + 3;
		vSuiça.innerHTML = parseInt(vSuiça.innerHTML) + 1;
		dServia.innerHTML = parseInt(dServia.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraBrasil = '<img src = "images/bandeiraBrasil.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraServia = '<img src = "images/bandeiraServia.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraSuiça = '<img src = "images/bandeiraSuiça.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraCamaroes = '<img src = "images/bandeiraCamaroes.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGG; 
var segundoGG;

function classificacaoBrasilGG() {
	if (parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML)){
		document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraBrasil + Brasil.innerHTML;
		primeiroGG = bandeiraBrasil + Brasil.innerHTML;
	} else if (parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgCamaroes.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraBrasil + Brasil.innerHTML;
			primeiroGG = bandeiraBrasil + Brasil.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Camaroes.innerHTML + bandeiraCamaroes;
			segundoGG = Camaroes.innerHTML + bandeiraCamaroes;
		} else if (parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgSuiça.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraBrasil + Brasil.innerHTML;
			primeiroGG = bandeiraBrasil + Brasil.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Suiça.innerHTML + bandeiraSuiça;
			segundoGG = Suiça.innerHTML + bandeiraSuiça;
		} else if (parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgServia.innerHTML) ){
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraBrasil + Brasil.innerHTML;
			primeiroGG = bandeiraBrasil + Brasil.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Servia.innerHTML + bandeiraServia;
			segundoGG = Servia.innerHTML + bandeiraServia;
		}

	else if (parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsCamaroes.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgServia.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsSuiça.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgServia.innerHTML) || 
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsServia.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsBrasil.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsBrasil.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsBrasil.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgCamaroes.innerHTML) && parseInt(sgBrasil.innerHTML) > parseInt(sgSuiça.innerHTML) ){
		document.getElementById("Segundo_Grupo_G").innerHTML = Brasil.innerHTML + bandeiraBrasil;
		segundoGG = Brasil.innerHTML + bandeiraBrasil;
	}
}

function classificacaoServiaGG() {
	if (parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML)){
		document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraServia + Servia.innerHTML;
		primeiroGG = bandeiraServia + Servia.innerHTML;
	} else if (parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgCamaroes.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraServia + Servia.innerHTML;
			primeiroGG = bandeiraServia + Servia.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Camaroes.innerHTML + bandeiraCamaroes;
			segundoGG = bandeiraServia + Servia.innerHTML;
		} else if (parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgSuiça.innerHTML) ){
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraServia + Servia.innerHTML;
			primeiroGG = bandeiraServia + Servia.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Suiça.innerHTML + bandeiraSuiça;
			segundoGG = Suiça.innerHTML + bandeiraSuiça;
		} else if (parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgBrasil.innerHTML) ){
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraServia + Servia.innerHTML;
			primeiroGG = bandeiraServia + Servia.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Brasil.innerHTML + bandeiraBrasil;
			segundoGG = Brasil.innerHTML + bandeiraBrasil;
		}

	else if (parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsCamaroes.innerHTML) ||
			parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsServia.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsServia.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsSuiça.innerHTML) ||
			parseInt(ptsServia.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsServia.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgBrasil.innerHTML) || 
			parseInt(ptsServia.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsBrasil.innerHTML) ||
			parseInt(ptsServia.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsServia.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServia.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsServia.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsServia.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsServiar.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgCamaroes.innerHTML) && parseInt(sgServia.innerHTML) > parseInt(sgSuiça.innerHTML) ){
		document.getElementById("Segundo_Grupo_G").innerHTML = Servia.innerHTML + bandeiraServia;
		segundoGG = Servia.innerHTML + bandeiraServia;
	}
}


function classificacaoSuiçaGG() {
	if (parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML)){
		document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraSuiça + Suiça.innerHTML;
		primeiroGG = bandeiraSuiça + Suiça.innerHTML;
	} else if (parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgCamaroes.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraSuiça + Suiça.innerHTML;
			primeiroGG = bandeiraSuiça + Suiça.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Camaroes.innerHTML + bandeiraCamaroes;
			segundoGG = Camaroes.innerHTML + bandeiraCamaroes;
		} else if (parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgBrasil.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraSuiça + Suiça.innerHTML;
				primeiroGG = bandeiraSuiça + Suiça.innerHTML;
				document.getElementById("Segundo_Grupo_G").innerHTML = Brasil.innerHTML + bandeiraBrasil;
				segundoGG = Brasil.innerHTML + bandeiraBrasil;
			} else if (parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgServia.innerHTML) ){
				document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraSuiça + Suiça.innerHTML;
				primeiroGG = bandeiraSuiça + Suiça.innerHTML;
				document.getElementById("Segundo_Grupo_G").innerHTML = Servia.innerHTML + bandeiraServia;
				segundoGG = Servia.innerHTML + bandeiraServia;
			}

	else if (parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsCamaroes.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgServia.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsCamaroes.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsBrasil.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgServia.innerHTML) || 
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsServia.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgCamaroes.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) > parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsSuiça.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsSuiça.innerHTML) == parseInt(ptsCamaroes.innerHTML) && parseInt(ptsSuiça.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgCamaroes.innerHTML) && parseInt(sgSuiça.innerHTML) > parseInt(sgBrasil.innerHTML) ){
		document.getElementById("Segundo_Grupo_G").innerHTML = Suiça.innerHTML + bandeiraSuiça;
		segundoGG = Suiça.innerHTML + bandeiraSuiça;
	}
}


function classificacaoCamaroesGG() {
	if (parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML)){
		document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraCamaroes + Camaroes.innerHTML;
		primeiroGG = bandeiraCamaroes + Camaroes.innerHTML;
	} else if (parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgBrasil.innerHTML) ){
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraunisia + Camaroes.innerHTML;
			primeiroGG = bandeiraCamaroes + Camaroes.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Brasil.innerHTML + bandeiraBrasil;
			segundoGG = Brasil.innerHTML + bandeiraBrasil;
		} else if (parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgSuiça.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraCamaroes + Camaroes.innerHTML;
			primeiroGG = bandeiraCamaroes + Camaroes.innerHTML;
			document.getElementById("Segundo_Grupo_G").innerHTML = Suiça.innerHTML + bandeiraSuiça;
			segundoGG = Suiça.innerHTML + bandeiraSuiça;
		} else if (parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgServia.innerHTML) ){
		document.getElementById("Primeiro_Grupo_G").innerHTML = bandeiraCamaroes + Camaroes.innerHTML;
		primeiroGG = bandeiraCamaroes + Camaroes.innerHTML;
		document.getElementById("Segundo_Grupo_G").innerHTML = Servia.innerHTML + bandeiraServia;
		segundoGG = Servia.innerHTML + bandeiraServia;
	}

	else if (parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsBrasil.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgServia.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsBrasil.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsSuiça.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) > parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgServia.innerHTML) || 
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsServia.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsSuiça.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsServia.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) > parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgBrasil.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) > parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgSuiça.innerHTML) ||
			parseInt(ptsCamaroes.innerHTML) == parseInt(ptsSuiça.innerHTML) && parseInt(ptsCamaroes.innerHTML) == parseInt(ptsBrasil.innerHTML) && parseInt(ptsCamaroes.innerHTML) < parseInt(ptsServia.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgBrasil.innerHTML) && parseInt(sgCamaroes.innerHTML) > parseInt(sgSuiça.innerHTML) ){
		document.getElementById("Segundo_Grupo_G").innerHTML = Camaroes.innerHTML + bandeiraCamaroes;
		segundoGG = Camaroes.innerHTML + bandeiraCamaroes;
	}
}


//Grupo H

var gh1m = document.getElementById('gh1m');
var gh1v = document.getElementById('gh1v');

var gh2m = document.getElementById('gh2m');
var gh2v = document.getElementById('gh2v');

var gh3m = document.getElementById('gh3m');
var gh3v = document.getElementById('gh3v');

var gh4m = document.getElementById('gh4m');
var gh4v = document.getElementById('gh4v');

var gh5m = document.getElementById('gh5m');
var gh5v = document.getElementById('gh5v');

var gh6m = document.getElementById('gh6m');
var gh6v = document.getElementById('gh6v');

var Portugal = document.getElementById('Portugal');
var jPortugal = document.getElementById('jPortugal');
var vPortugal = document.getElementById('vPortugal');
var ePortugal = document.getElementById('ePortugal');
var dPortugal = document.getElementById('dPortugal');
var ptsPortugal = document.getElementById('ptsPortugal');

var Gana = document.getElementById('Gana');
var jGana = document.getElementById('jGana');
var vGana = document.getElementById('vGana');
var eGana = document.getElementById('eGana');
var dGana = document.getElementById('dGana');
var ptsGana = document.getElementById('ptsGana');

var Uruguai = document.getElementById('Uruguai');
var jUruguai = document.getElementById('jUruguai');
var vUruguai = document.getElementById('vUruguai');
var eUruguai = document.getElementById('eUruguai');
var dUruguai = document.getElementById('dUruguai');
var ptsUruguai = document.getElementById('ptsUruguai');

var CoreiaDoSul = document.getElementById('CoreiaDoSul');
var jCoreiaDoSul = document.getElementById('jCoreiaDoSul');
var vCoreiaDoSul = document.getElementById('vCoreiaDoSul');
var eCoreiaDoSul = document.getElementById('eCoreiaDoSul');
var dCoreiaDoSul = document.getElementById('dCoreiaDoSul');
var ptsCoreiaDoSul = document.getElementById('ptsCoreiaDoSul');



// Jogos Grupo H

//Jogo 1: Uruguai X CoreiaDoSul

function resultadoJ1GH() {
	jUruguai.innerHTML = 1;
	jCoreiaDoSul.innerHTML = 1;

	gpUruguai.innerHTML = gh1m.value;
	gpCoreiaDoSul.innerHTML = gh1v.value;

	gcUruguai.innerHTML = gh1v.value;
	gcCoreiaDoSul.innerHTML = gh1m.value;

	sgUruguai.innerHTML = gh1m.value - gh1v.value;
	sgCoreiaDoSul.innerHTML = gh1v.value - gh1m.value;

	if (gh1m.value == gh1v.value){
		ptsUruguai.innerHTML = 1;
		ptsCoreiaDoSul.innerHTML = 1;
		vUruguai.innerHTML = 0;
		vCoreiaDoSul.innerHTML = 0;
		eUruguai.innerHTML = 1;
		eCoreiaDoSul.innerHTML = 1;
		dUruguai.innerHTML = 0;
		dCoreiaDoSul.innerHTML = 0;

	}
	else if (gh1m.value > gh1v.value){
		ptsUruguai.innerHTML = 3;
		ptsCoreiaDoSul.innerHTML = 0;
		vUruguai.innerHTML = 1;
		vCoreiaDoSul.innerHTML = 0;
		eUruguai.innerHTML = 0;
		eCoreiaDoSul.innerHTML = 0;
		dUruguai.innerHTML = 0;
		dCoreiaDoSul.innerHTML = 1;
	}
	else if (gh1m.value < gh1v.value){
		ptsUruguai.innerHTML = 0;
		ptsCoreiaDoSul.innerHTML = 3;
		vUruguai.innerHTML = 0;
		vCoreiaDoSul.innerHTML = 1;
		eUruguai.innerHTML = 0;
		eCoreiaDoSul.innerHTML = 0;
		dUruguai.innerHTML = 1;
		dCoreiaDoSul.innerHTML = 0;
	}
}

//Jogo 2: Portugal X Gana

function resultadoJ2GH() {
	jPortugal.innerHTML = 1;
	jGana.innerHTML = 1;

	gpPortugal.innerHTML = gh2m.value;
	gpGana.innerHTML = gh2v.value;

	gcPortugal.innerHTML = gh2v.value;
	gcGana.innerHTML = gh2m.value;

	sgPortugal.innerHTML = gh2m.value - gh2v.value;
	sgGana.innerHTML = gh2v.value - gh2m.value;

	if (gh2m.value == gh2v.value){
		ptsPortugal.innerHTML = 1;
		ptsGana.innerHTML = 1;
		vPortugal.innerHTML = 0;
		vGana.innerHTML = 0;
		ePortugal.innerHTML = 1;
		eGana.innerHTML = 1;
		dPortugal.innerHTML = 0;
		dGana.innerHTML = 0;

	}
	else if (gh2m.value > gh2v.value){
		ptsPortugal.innerHTML = 3;
		ptsGana.innerHTML = 0;
		vPortugal.innerHTML = 1;
		vGana.innerHTML = 0;
		ePortugal.innerHTML = 0;
		eGana.innerHTML = 0;
		dPortugal.innerHTML = 0;
		dGana.innerHTML = 1;
	}
	else if (gh2m.value < gh2v.value){
		ptsPortugal.innerHTML = 0;
		ptsGana.innerHTML = 3;
		vPortugal.innerHTML = 0;
		vGana.innerHTML = 1;
		ePortugal.innerHTML = 0;
		eGana.innerHTML = 0;
		dPortugal.innerHTML = 1;
		dGana.innerHTML = 0;
	}
}

//Jogo 3: Portugal X Uruguai

function resultadoJ3GH() {
	jPortugal.innerHTML = 2;
	jUruguai.innerHTML = 2;

	gpPortugal.innerHTML = parseInt(gh2m.value) + parseInt(gh3m.value);
	gpUruguai.innerHTML = parseInt(gh1m.value) + parseInt(gh3v.value);

	gcPortugal.innerHTML = parseInt(gh3v.value) + parseInt(gh2v.value);
	gcUruguai.innerHTML = parseInt(gh3m.value) + parseInt(gh1v.value);

	sgPortugal.innerHTML = parseInt(gh3m.value - gh3v.value) + parseInt(gh2m.value - gh2v.value);
	sgUruguai.innerHTML = parseInt(gh3v.value - gh3m.value) + parseInt(gh1m.value - gh1v.value);

	if (gh3m.value == gh3v.value){
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 1;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 1;
		ePortugal.innerHTML = parseInt(ePortugal.innerHTML) + 1;
		eUruguai.innerHTML = parseInt(eUruguai.innerHTML) + 1;
	}
	else if (gh3m.value > gh3v.value){
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 3;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 0;
		vPortugal.innerHTML = parseInt(vPortugal.innerHTML) + 1;
		dUruguai.innerHTML = parseInt(dUruguai.innerHTML) + 1;
	}
	else if (gh3m.value < gh3v.value){
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 0;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 3;
		vUruguai.innerHTML = parseInt(vUruguai.innerHTML) + 1;
		dPortugal.innerHTML = parseInt(dPortugal.innerHTML) + 1;
	}
}

// Jogo 4: CoreiaDoSul X Gana

function resultadoJ4GH() {
	jCoreiaDoSul.innerHTML = 2;
	jGana.innerHTML = 2;

	gpCoreiaDoSul.innerHTML = parseInt(gh1v.value) + parseInt(gh4m.value);
	gpGana.innerHTML = parseInt(gh2v.value) + parseInt(gh4v.value);

	gcCoreiaDoSul.innerHTML = parseInt(gh4v.value) + parseInt(gh1m.value);
	gcGana.innerHTML = parseInt(gh4m.value) + parseInt(gh2m.value);

	sgCoreiaDoSul.innerHTML = parseInt(gh4m.value - gh4v.value) + parseInt(gh1v.value - gh1m.value);
	sgGana.innerHTML = parseInt(gh4v.value - gh4m.value) + parseInt(gh2v.value - gh2m.value);

	if (gh4m.value == gh4v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 1;
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 1;
		eCoreiaDoSul.innerHTML = parseInt(eCoreiaDoSul.innerHTML) + 1;
		eGana.innerHTML = parseInt(eGana.innerHTML) + 1;
	}
	else if (gh4m.value > gh4v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 3;
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 0;
		vCoreiaDoSul.innerHTML = parseInt(vCoreiaDoSul.innerHTML) + 1;
		dGana.innerHTML = parseInt(dGana.innerHTML) + 1;
	}
	else if (gh4m.value < gh4v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 0;
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 3;
		vGana.innerHTML = parseInt(vGana.innerHTML) + 1;
		dCoreiaDoSul.innerHTML = parseInt(dCoreiaDoSul.innerHTML) + 1;
	}
}

// Jogo 5: CoreiaDoSul X Portugal

function resultadoJ5GH() {
	jCoreiaDoSul.innerHTML = 3;
	jPortugal.innerHTML = 3;

	gpCoreiaDoSul.innerHTML = parseInt(gh1v.value) + parseInt(gh4m.value) + parseInt(gh5m.value);
	gpPortugal.innerHTML = parseInt(gh2m.value) + parseInt(gh3m.value) + parseInt(gh5v.value);

	gcCoreiaDoSul.innerHTML = parseInt(gh4v.value) + parseInt(gh1m.value) + parseInt(gh5v.value);
	gcPortugal.innerHTML = parseInt(gh3v.value) + parseInt(gh2v.value) + parseInt(gh5m.value);

	sgCoreiaDoSul.innerHTML = parseInt(gh5m.value - gh5v.value) + parseInt(gh4m.value - gh4v.value) + parseInt(gh1v.value - gh1m.value);
	sgPortugal.innerHTML = parseInt(gh5v.value - gh5m.value) + parseInt(gh3m.value - gh3v.value) + parseInt(gh2m.value - gh2v.value);

	if (gh5m.value == gh5v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 1;
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 1;
		eCoreiaDoSul.innerHTML = parseInt(eCoreiaDoSul.innerHTML) + 1;
		ePortugal.innerHTML = parseInt(ePortugal.innerHTML) + 1;
	}
	else if (gh5m.value > gh5v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 3;
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 0;
		vCoreiaDoSul.innerHTML = parseInt(vCoreiaDoSul.innerHTML) + 1;
		dPortugal.innerHTML = parseInt(dPortugal.innerHTML) + 1;
	}
	else if (gh5m.value < gh5v.value){
		ptsCoreiaDoSul.innerHTML = parseInt(ptsCoreiaDoSul.innerHTML) + 0;
		ptsPortugal.innerHTML = parseInt(ptsPortugal.innerHTML) + 3;
		vPortugal.innerHTML = parseInt(vPortugal.innerHTML) + 1;
		dCoreiaDoSul.innerHTML = parseInt(dCoreiaDoSul.innerHTML) + 1;
	}
}

// Jogo 6: Gana X Uruguai

function resultadoJ6GH() {
	jGana.innerHTML = 3;
	jUruguai.innerHTML = 3;

	gpGana.innerHTML = parseInt(gh2v.value) + parseInt(gh4v.value) + parseInt(gh6m.value);
	gpUruguai.innerHTML = parseInt(gh1m.value) + parseInt(gh3v.value) + parseInt(gh6v.value);

	gcGana.innerHTML = parseInt(gh4m.value) + parseInt(gh2m.value) + parseInt(gh6v.value);
	gcUruguai.innerHTML = parseInt(gh3m.value) + parseInt(gh1v.value) + parseInt(gh6m.value);

	sgGana.innerHTML = parseInt(gh6m.value - gh6v.value) + parseInt(gh4v.value - gh4m.value) + parseInt(gh2v.value - gh2m.value);
	sgUruguai.innerHTML = parseInt(gh6v.value - gh6m.value) + parseInt(gh3v.value - gh3m.value) + parseInt(gh1m.value - gh1v.value);

	if (gh6m.value == gh6v.value){
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 1;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 1;
		eGana.innerHTML = parseInt(eGana.innerHTML) + 1;
		eUruguai.innerHTML = parseInt(eUruguai.innerHTML) + 1;
	}
	else if (gh6m.value > gh6v.value){
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 3;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 0;
		vGana.innerHTML = parseInt(vGana.innerHTML) + 1;
		dUruguai.innerHTML = parseInt(dUruguai.innerHTML) + 1;
	}
	else if (gh6m.value < gh6v.value){
		ptsGana.innerHTML = parseInt(ptsGana.innerHTML) + 0;
		ptsUruguai.innerHTML = parseInt(ptsUruguai.innerHTML) + 3;
		vUruguai.innerHTML = parseInt(vUruguai.innerHTML) + 1;
		dGana.innerHTML = parseInt(dGana.innerHTML) + 1;
	}
}

//------------------------------------------------------------------------------------------------

var bandeiraPortugal = '<img src = "images/bandeiraPortugal.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraGana = '<img src = "images/bandeiraGana.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraUruguai = '<img src = "images/bandeiraUruguai.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var bandeiraCoreiaDoSul = '<img src = "images/bandeiraCoreiaDoSul.JPG" height = "30" width = "50" style="vertical-align: middle;">';
var primeiroGH; 
var segundoGH;

function classificacaoPortugalGH() {
	if (parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML)){
		document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraPortugal + Portugal.innerHTML;
		primeiroGH = bandeiraPortugal + Portugal.innerHTML;
	} else if (parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraPortugal + Portugal.innerHTML;
			primeiroGH = bandeiraPortugal + Portugal.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
			segundoGH = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
		} else if (parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgUruguai.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraPortugal + Portugal.innerHTML;
			primeiroGH = bandeiraPortugal + Portugal.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Uruguai.innerHTML + bandeiraUruguai;
			segundoGH = Uruguai.innerHTML + bandeiraUruguai;
		} else if (parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgGana.innerHTML) ){
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraPortugal + Portugal.innerHTML;
			primeiroGH = bandeiraPortugal + Portugal.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Gana.innerHTML + bandeiraGana;
			segundoGH = Gana.innerHTML + bandeiraGana;
		}

	else if (parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgGana.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsUruguai.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgGana.innerHTML) || 
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsGana.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsPortugal.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsPortugal.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsPortugal.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) && parseInt(sgPortugal.innerHTML) > parseInt(sgUruguai.innerHTML) ){
		document.getElementById("Segundo_Grupo_H").innerHTML = Portugal.innerHTML + bandeiraPortugal;
		segundoGH = Portugal.innerHTML + bandeiraPortugal;
	}
}

function classificacaoGanaGH() {
	if (parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML)){
		document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraGana + Gana.innerHTML;
		primeiroGH = bandeiraGana + Gana.innerHTML;
	} else if (parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraGana + Gana.innerHTML;
			primeiroGH = bandeiraGana + Gana.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
			segundoGH = bandeiraGana + Gana.innerHTML;
		} else if (parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgUruguai.innerHTML) ){
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraGana + Gana.innerHTML;
			primeiroGH = bandeiraGana + Gana.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Uruguai.innerHTML + bandeiraUruguai;
			segundoGH = Uruguai.innerHTML + bandeiraUruguai;
		} else if (parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgPortugal.innerHTML) ){
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraGana + Gana.innerHTML;
			primeiroGH = bandeiraGana + Gana.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Portugal.innerHTML + bandeiraPortugal;
			segundoGH = Portugal.innerHTML + bandeiraPortugal;
		}

	else if (parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) ||
			parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsGana.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsGana.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsUruguai.innerHTML) ||
			parseInt(ptsGana.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsGana.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgPortugal.innerHTML) || 
			parseInt(ptsGana.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsPortugal.innerHTML) ||
			parseInt(ptsGana.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsGana.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGana.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsGana.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsGana.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsGanar.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) && parseInt(sgGana.innerHTML) > parseInt(sgUruguai.innerHTML) ){
		document.getElementById("Segundo_Grupo_H").innerHTML = Gana.innerHTML + bandeiraGana;
		segundoGH = Gana.innerHTML + bandeiraGana;
	}
}


function classificacaoUruguaiGH() {
	if (parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML)){
		document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraUruguai + Uruguai.innerHTML;
		primeiroGH = bandeiraUruguai + Uruguai.innerHTML;
	} else if (parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraUruguai + Uruguai.innerHTML;
			primeiroGH = bandeiraUruguai + Uruguai.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
			segundoGH = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
		} else if (parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgPortugal.innerHTML) ) {
				document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraUruguai + Uruguai.innerHTML;
				primeiroGH = bandeiraUruguai + Uruguai.innerHTML;
				document.getElementById("Segundo_Grupo_H").innerHTML = Portugal.innerHTML + bandeiraPortugal;
				segundoGH = Portugal.innerHTML + bandeiraPortugal;
			} else if (parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgGana.innerHTML) ){
				document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraUruguai + Uruguai.innerHTML;
				primeiroGH = bandeiraUruguai + Uruguai.innerHTML;
				document.getElementById("Segundo_Grupo_H").innerHTML = Gana.innerHTML + bandeiraGana;
				segundoGH = Gana.innerHTML + bandeiraGana;
			}

	else if (parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgGana.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsPortugal.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgGana.innerHTML) || 
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsGana.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) > parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsUruguai.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsUruguai.innerHTML) == parseInt(ptsCoreiaDoSul.innerHTML) && parseInt(ptsUruguai.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgCoreiaDoSul.innerHTML) && parseInt(sgUruguai.innerHTML) > parseInt(sgPortugal.innerHTML) ){
		document.getElementById("Segundo_Grupo_H").innerHTML = Uruguai.innerHTML + bandeiraUruguai;
		segundoGH = Uruguai.innerHTML + bandeiraUruguai;
	}
}


function classificacaoCoreiaDoSulGH() {
	if (parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML)){
		document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
		primeiroGH = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
	} else if (parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgPortugal.innerHTML) ){
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraunisia + CoreiaDoSul.innerHTML;
			primeiroGH = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Portugal.innerHTML + bandeiraPortugal;
			segundoGH = Portugal.innerHTML + bandeiraPortugal;
		} else if (parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgUruguai.innerHTML) ) {
			document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
			primeiroGH = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
			document.getElementById("Segundo_Grupo_H").innerHTML = Uruguai.innerHTML + bandeiraUruguai;
			segundoGH = Uruguai.innerHTML + bandeiraUruguai;
		} else if (parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgGana.innerHTML) ){
		document.getElementById("Primeiro_Grupo_H").innerHTML = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
		primeiroGH = bandeiraCoreiaDoSul + CoreiaDoSul.innerHTML;
		document.getElementById("Segundo_Grupo_H").innerHTML = Gana.innerHTML + bandeiraGana;
		segundoGH = Gana.innerHTML + bandeiraGana;
	}

	else if (parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsPortugal.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgGana.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsPortugal.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsUruguai.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgGana.innerHTML) || 
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsGana.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsUruguai.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsGana.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgPortugal.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) > parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgUruguai.innerHTML) ||
			parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsUruguai.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) == parseInt(ptsPortugal.innerHTML) && parseInt(ptsCoreiaDoSul.innerHTML) < parseInt(ptsGana.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgPortugal.innerHTML) && parseInt(sgCoreiaDoSul.innerHTML) > parseInt(sgUruguai.innerHTML) ){
		document.getElementById("Segundo_Grupo_H").innerHTML = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
		segundoGH = CoreiaDoSul.innerHTML + bandeiraCoreiaDoSul;
	}
}


//-----------------------------------------------------------------------------------------------------------------
//Oitavas de Final

var quartas1;
var quartas2;
var quartas3;
var quartas4;
var quartas5;
var quartas6;
var quartas6;
var quartas8;


function resultadoOitavas1() {
	if (oitavas1m.value > oitavas1v.value){
		document.getElementById("VencedorOitavas_1").innerHTML = primeiroGA;
		quartas1 = primeiroGA; 
	} else if (oitavas1m.value < oitavas1v.value){
		document.getElementById("VencedorOitavas_1").innerHTML = segundoGB;
		quartas1 = segundoGB;
	}
}

function resultadoOitavas2() {
	if (oitavas2m.value > oitavas2v.value){
		document.getElementById("VencedorOitavas_2").innerHTML = primeiroGC;
		quartas2 = primeiroGC; 
	} else if (oitavas2m.value < oitavas2v.value){
		document.getElementById("VencedorOitavas_2").innerHTML = segundoGD;
		quartas2 = segundoGD;
	}
}

function resultadoOitavas3() {
	if (oitavas3m.value > oitavas3v.value){
		document.getElementById("VencedorOitavas_3").innerHTML = primeiroGE;
		quartas3 = primeiroGE; 
	} else if (oitavas3m.value < oitavas3v.value){
		document.getElementById("VencedorOitavas_3").innerHTML = segundoGF;
		quartas3 = segundoGF;
	}
}

function resultadoOitavas4() {
	if (oitavas4m.value > oitavas4v.value){
		document.getElementById("VencedorOitavas_4").innerHTML = primeiroGG;
		quartas4 = primeiroGG; 
	} else if (oitavas4m.value < oitavas4v.value){
		document.getElementById("VencedorOitavas_4").innerHTML = segundoGH;
		quartas4 = segundoGH;
	}
}

function resultadoOitavas5() {
	if (oitavas5m.value > oitavas5v.value){
		document.getElementById("VencedorOitavas_5").innerHTML = primeiroGB;
		quartas5 = primeiroGB; 
	} else if (oitavas5m.value < oitavas5v.value){
		document.getElementById("VencedorOitavas_5").innerHTML = segundoGA;
		quartas5 = segundoGA;
	}
}

function resultadoOitavas6() {
	if (oitavas6m.value > oitavas6v.value){
		document.getElementById("VencedorOitavas_6").innerHTML = primeiroGD;
		quartas6 = primeiroGD; 
	} else if (oitavas6m.value < oitavas6v.value){
		document.getElementById("VencedorOitavas_6").innerHTML = segundoGC;
		quartas6 = segundoGC;
	}
}

function resultadoOitavas7() {
	if (oitavas7m.value > oitavas7v.value){
		document.getElementById("VencedorOitavas_7").innerHTML = primeiroGF;
		quartas7 = primeiroGF; 
	} else if (oitavas7m.value < oitavas7v.value){
		document.getElementById("VencedorOitavas_7").innerHTML = segundoGE;
		quartas7 = segundoGE;
	}
}

function resultadoOitavas8() {
	if (oitavas8m.value > oitavas8v.value){
		document.getElementById("VencedorOitavas_8").innerHTML = primeiroGH;
		quartas8 = primeiroGH; 
	} else if (oitavas8m.value < oitavas8v.value){
		document.getElementById("VencedorOitavas_8").innerHTML = segundoGG;
		quartas8 = segundoGG;
	}
}


//------------------------------------------------------------------------------------------------
//Quartas de Final

var semi1;
var semi2;
var semi3;
var semi4;


function resultadoQuartas1() {
	if (quartas1m.value > quartas1v.value){
		document.getElementById("VencedorQuartas_1").innerHTML = quartas1;
		semi1 = quartas1;
	} else if (quartas1m.value < quartas1v.value){
		document.getElementById("VencedorQuartas_1").innerHTML = quartas2;
		semi1 = quartas2;
	}
}

function resultadoQuartas2() {
	if (quartas2m.value > quartas2v.value){
		document.getElementById("VencedorQuartas_2").innerHTML = quartas3;
		semi2 = quartas3;
	} else if (quartas2m.value < quartas2v.value){
		document.getElementById("VencedorQuartas_2").innerHTML = quartas4;
		semi2 = quartas4;
	}
}

function resultadoQuartas3() {
	if (quartas3m.value > quartas3v.value){
		document.getElementById("VencedorQuartas_3").innerHTML = quartas5;
		semi3 = quartas5;
	} else if (quartas3m.value < quartas3v.value){
		document.getElementById("VencedorQuartas_3").innerHTML = quartas6;
		semi3 = quartas6;
	}
}

function resultadoQuartas4() {
	if (quartas4m.value > quartas4v.value){
		document.getElementById("VencedorQuartas_4").innerHTML = quartas7;
		semi4 = quartas7;
	} else if (quartas4m.value < quartas4v.value){
		document.getElementById("VencedorQuartas_4").innerHTML = quartas8;
		semi4 = quartas8;
	}
}


//------------------------------------------------------------------------------------------------
//Semi Final

var final1;
var final2;

function resultadoSemi1() {
	if (semi1m.value > semi1v.value) {
		document.getElementById("VencedorSemi_1").innerHTML = semi1;
		final1 = semi1;	
	} else if (semi1m.value < semi1v.value) {
		document.getElementById("VencedorSemi_1").innerHTML = semi2;
		final1 = semi2;
	}
}

function resultadoSemi2() {
	if (semi2m.value > semi2v.value) {
		document.getElementById("VencedorSemi_2").innerHTML = semi3;
		final2 = semi3;
	} else if (semi2m.value < semi2v.value) {
		document.getElementById("VencedorSemi_2").innerHTML = semi4;
		final2 = semi4;
	}
}


//------------------------------------------------------------------------------------------------
//Final

var campeao;

function resultadoFinal() {
	if (final1m.value > final1v.value) {
		document.getElementById("VencedorFinal").innerHTML = final1;
		campeao = final1;
	} else if (final1m.value < final1v.value) {
		document.getElementById("VencedorFinal").innerHTML = final2;
		campeao = final2;
	}
}


//Functions para trocar as sections

function showGrupoA(){
	document.getElementById("grupo_a_section").style.display = 'grid';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoB(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'grid';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoC(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'grid';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoD(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'grid';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoE(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'grid';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoF(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'grid';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoG(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'grid';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showGrupoH(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'grid';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showOitavas(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'grid';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showQuartas(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'grid';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'none';
}

function showSemi(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'grid';
	document.getElementById("final_section").style.display = 'none';
}

function showFinal(){
	document.getElementById("grupo_a_section").style.display = 'none';
	document.getElementById("grupo_b_section").style.display = 'none';
	document.getElementById("grupo_c_section").style.display = 'none';
	document.getElementById("grupo_d_section").style.display = 'none';
	document.getElementById("grupo_e_section").style.display = 'none';
	document.getElementById("grupo_f_section").style.display = 'none';
	document.getElementById("grupo_g_section").style.display = 'none';
	document.getElementById("grupo_h_section").style.display = 'none';
	document.getElementById("oitavas_section").style.display = 'none';
	document.getElementById("quartas_section").style.display = 'none';
	document.getElementById("semi_section").style.display = 'none';
	document.getElementById("final_section").style.display = 'grid';
}
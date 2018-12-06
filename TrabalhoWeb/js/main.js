var dados = [
				{"titulo": "Ex-genro de Silvio Santos é preso em Itajaí!",
			     "descricao": "teste"}, 
			    {"titulo": "segunda noticia",
			     "descricao": "teste"}, 
			    {"titulo": "segunda noticia",
			     "descricao": "teste"}, 
			];


main = document.querySelector('main');
dados.forEach(noticia =>
{
	div = document.createElement('div');
	div.setAttribute('class', 'noticia');
	h2 = document.createElement('h2');
	
	txt = document.createTextNode(noticia.titulo);
	h2.appendChild(txt);
	p = document.createElement('p')
	desc = document.createTextNode(noticia.descricao);

	p.appendChild(desc);
	div.appendChild(h2);
	div.appendChild(p);
	main.appendChild(div);
});
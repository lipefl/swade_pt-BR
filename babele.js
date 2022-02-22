Hooks.once('init', () => { 
	//alert('oi');
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'swade_pt-BR',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});

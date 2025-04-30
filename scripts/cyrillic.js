txt = "";

function latinChanged(){
		txt = document.getElementById('latin').value;
		
		rpl('Dd', 'dd', 'Ђ', 'ђ');
		//rpl('Si', 'si', 'Ш', 'ш');
		rpl('Ff', 'ff', 'Ф', 'ф');
		rpl('Ph', 'ph', 'Ф', 'ф');
		rpl('Ch', 'ch', 'Х', 'х');
		rpl('Ll', 'll', 'Љ', 'љ');
		rpl('Ng', 'ng', 'Ғ', 'ғ');
		rpl('Rh', 'rh', 'Ҏ', 'ҏ');
		rpl('Th', 'th', 'Ћ', 'ћ');
		
		rpl('A', 'a', 'А', 'а');
		rpl('A', 'â', 'Ā', 'ā');
		rpl('B', 'b', 'Б', 'б');
		rpl('F', 'f', 'В', 'в');
		rpl('H', 'h', 'Г', 'г');
		rpl('G', 'g', 'Ѓ', 'ѓ');
		rpl('D', 'd', 'Д', 'д');
		rpl('E', 'e', 'Е', 'е');
		rpl('I', 'i', 'И', 'и');
		rpl('C', 'c', 'К', 'к');
		rpl('L', 'l', 'Л', 'л');
		rpl('M', 'm', 'М', 'м');
		rpl('N', 'n', 'Н', 'н');
		rpl('O', 'o', 'О', 'о');
		rpl('P', 'p', 'П', 'п');
		rpl('R', 'r', 'Р', 'р');
		rpl('S', 's', 'С', 'с');
		rpl('T', 't', 'Т', 'т');
		rpl('W', 'w', 'У', 'у');
		rpl('Y', 'y', 'Ъ', 'ъ');
		rpl('U', 'u', 'Ы', 'ы');
		rpl('J', 'j', 'Џ', 'џ');
		
		document.getElementById('cyrillic').value = txt;
}

function cyrillicChanged(){
		txt = document.getElementById('cyrillic').value;
		
		pl('Dd', 'dd', 'Ђ', 'ђ');
		//pl('Si', 'si', 'Ш', 'ш');
		pl('Ff', 'ff', 'Ф', 'ф');
		pl('Ph', 'ph', 'Ф', 'ф');
		pl('Ch', 'ch', 'Х', 'х');
		pl('Ll', 'll', 'Љ', 'љ');
		pl('Ng', 'ng', 'Ғ', 'ғ');
		pl('Rh', 'rh', 'Ҏ', 'ҏ');
		pl('Th', 'th', 'Ћ', 'ћ');
		
		pl('A', 'a', 'А', 'а');
		pl('A', 'â', 'Ā', 'ā');
		pl('B', 'b', 'Б', 'б');
		pl('F', 'f', 'В', 'в');
		pl('H', 'h', 'Г', 'г');
		pl('G', 'g', 'Ѓ', 'ѓ');
		pl('D', 'd', 'Д', 'д');
		pl('E', 'e', 'Е', 'е');
		pl('I', 'i', 'И', 'и');
		pl('C', 'c', 'К', 'к');
		pl('L', 'l', 'Л', 'л');
		pl('M', 'm', 'М', 'м');
		pl('N', 'n', 'Н', 'н');
		pl('O', 'o', 'О', 'о');
		pl('P', 'p', 'П', 'п');
		pl('R', 'r', 'Р', 'р');
		pl('S', 's', 'С', 'с');
		pl('T', 't', 'Т', 'т');
		pl('W', 'w', 'У', 'у');
		pl('Y', 'y', 'Ъ', 'ъ');
		pl('U', 'u', 'Ы', 'ы');
		pl('J', 'j', 'Џ', 'џ');
		
		document.getElementById('latin').value = txt;
}

function rpl(cap, sml, capC, smlC){
	txt = txt.replaceAll(cap, capC);
	txt = txt.replaceAll(sml, smlC);
}

function pl(cap, sml, capC, smlC){
	txt = txt.replaceAll(capC, cap);
	txt = txt.replaceAll(smlC, sml);
}
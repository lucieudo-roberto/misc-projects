const WCM = [
    'Sara é a minha prima preferida, sempre pronta para me animar quando estou triste. 😊💕',
    'Manu é a melhor prima do mundo, sempre presente nas minhas alegrias e tristezas. 👑🌟',
    'Sara é uma garota incrível, tem um coração enorme e um sorriso que ilumina qualquer lugar. 💖🌞',
    'Manu é uma amiga para todas as horas, uma companheira fiel e sempre disposta a ajudar. 🤝🌼',
    'Sara é especial porque me conhece como ninguém e sempre me aceita do jeito que sou. 💜🤗',
    'Sara é uma amiga que sempre me faz rir, mesmo nos momentos mais difíceis.😂👍',
    'Manu é uma prima única, sempre me incentivando a ser a minha melhor versão.🌟🙌',
    'Sara é uma menina especial, que tem um lugar especial no meu coração. 💕❤️',
    'Sara é uma pessoa incrível, cheia de qualidades que admiro e respeito. 👌👏',
    'Manu é uma amiga leal, uma pessoa que eu sei que sempre estará do meu lado. 🤝💪',
    'Manu é uma companheira de risadas, alguém com quem posso ser eu mesmo sem medo de julgamentos. 😆🤪', 
    'chegou o dia! 🎉 Hoje você pode finalmente abrir o seu presente! 🎁 Espero que goste e que ele te traga muita alegria',
];

const MSG = [
    'Não consigo expressar o quanto sou grato por ter uma amiga como você em minha vida.  🙏🌟',
    'Você me aceita pelo que sou, sem julgamentos ou preconceitos. Isso é raro e muito valioso. 💖🤗',
    'Sara, você é uma pessoa incrível, que sempre me faz sentir confortável e feliz.☺️👍',
    'Mesmo sem saber você me ajudou em momentos difíceis e me mostrou que não estou sozinho. 🤝💜',
    'É muito reconfortante saber que existe alguém no mundo que não se importa com aparências e valores superficiais. 🌟💫',
    'Quando você fala, sinto que estou em um lugar seguro e acolhedor. A sua voz é uma melodia para meus ouvidos. 🎵👂',
    'Te abraçar é uma das melhores sensações que eu já experimentei. Sinto-me em paz e reconfortado. 🤗💕',
    'O mais incrível em nossa amizade é que você não me pede nada em troca. Você é minha amiga por quem eu sou, não pelo que posso oferecer. 🙌🤝',
    'É inspirador ver como você é gentil e generosa com todos ao seu redor. Você é uma luz no mundo. 🌟✨',
    'Quando me senti deprimido, você me mostrou que há sempre uma luz no fim do túnel. Eu devo a você a minha recuperação. 🌞💛',
    'Estou sempre ansioso para passar tempo com você, pois você é uma das poucas pessoas com quem posso ser eu mesmo. 🤗💯',
    'Sou grato por sua amizade todos os dias. Você é uma pessoa incrível Sara, e eu estou feliz por tê-la em minha vida. 🙏💖',
    'Você é uma pessoa tão incrível que eu não consigo imaginar minha vida sem você. 🌟💖',
    'A sua amizade é uma dádiva, e eu me sinto sortudo por tê-la em minha vida. 🍀🤝',
    'Uma das coisas que mais admiro em você é a sua autenticidade. Você é sempre fiel a si mesma. 👌👏',
    'Passar tempo com você me faz sentir mais feliz e realizado do que qualquer outra coisa. 🤗😊',
    'Eu sou uma pessoa melhor por sua causa. Sara, você é uma inspiração para mim. 🌟💪',
    'Você me ajuda a manter uma perspectiva positiva e me incentiva a sempre lutar pelos meus sonhos. 🌈',
    'A conexão que temos é tão forte que eu sinto como se pudéssemos nos comunicar sem palavras. 💬💖',
    'A sua presença em minha vida é um presente que eu valorizo muito. 🎁🙏',
    'Você é a prova viva de que a verdadeira beleza vem de dentro. Sara, você é uma pessoa linda por dentro e por fora. 💕🌸',
    'Eu sou tão grato por tê-la como amiga e prima que não consigo nem expressar em palavras. Sara, você é uma pessoa muito especial para mim. 🤗💖',
    'Obrigado por Tudo, com amor, seu primo . 🤗💕' 
]

var ACT_HPGIF = 1   // gif "feliz" atual , máximo: 31
var ACT_MESSG = 0   // menssagem atual a exibir
var MAX_ANIME = 12  // N° de animações no css

const $dy = x => {
	//return new Date().getDate();
	return 2;
}
const $id = x => {return document.getElementById(x)}
const $cl = x => {return document.querySelector(x)}


window.onload = function() {

	function set_dayCount() {
		let rt;
		switch($dy()) {
			case 19: rt=11; break;
			case 20: rt=10; break;
			case 21: rt=9; break;
			case 22: rt=8; break;
			case 23: rt=7; break;
			case 24: rt=6; break;
			case 25: rt=5; break;
			case 26: rt=4; break;
			case 27: rt=3; break;
			case 28: rt=2; break;
			case 1: rt=1;  break;
			case 2: rt=0;  break;
		}
		if (rt == 0 ) {
		    $id('time-lcd').innerText = `é hoje !! `
		    return;
		}
	    $id('time-lcd').innerText = `Faltam ${rt} dias`
	}
	
	function set_wellcome() {
		let rt;
		switch($dy()) {
			case 19: rt=0; break;
			case 20: rt=1; break;
			case 21: rt=2; break;
			case 22: rt=3; break;
			case 23: rt=4; break;
			case 24: rt=5; break;
			case 25: rt=6; break;
			case 26: rt=7; break;
			case 27: rt=8; break;
			case 28: rt=9; break;
			case 1: rt=10;  break;
			case 2: rt=11;  break;
		}
		
		$id('wellcome').innerText =WCM[rt];
	 	$id('anim').src = `res/png/h_${rt}.gif`;
	 	ACT_HPGIF = rt;
	}
	
	
	function openBox() {
		if ( $dy() != 2 ) {
			let rand = Math.round(Math.random()*4);
			$id('anim').src = `res/png/n_${rand}.gif`;
			$id('open-bnt').disabled = true;
			
			setTimeout(()=>{
		        $id('anim').src = `res/png/h_${ACT_HPGIF}.gif`;
		        $id('open-bnt').disabled = false;
			},2500);

		} else {
			$id('bg-sound1').src = ''
			$id('bg-sound2').play()
			$id('box-well').style.display = 'none';
			$id('part').src = 'res/png/p_07.gif';
			
			setTimeout(()=>{
				 ACT_HPGIF += 1;
				 $id('anim').src = `res/png/h_${ACT_HPGIF}.gif`;
				 $id('card-message').style.display = 'block'
				 $id('card-message').classList.add('anim_1')
			},8490); //8490
			
			$id('card-text').innerText = MSG[ACT_MESSG];
			
			$id('next-bnt').addEventListener('click',()=> {
				$id('next-bnt').disabled = true;
				$id('next-bnt').style.backgroundColor = "darkgray";
				$id('next-bnt').style.borderColor = "darkgray";
				
				if( ACT_MESSG <= 21 ) {
					$id('card-text').innerText = '';
			    	ACT_MESSG +=1; ACT_HPGIF +=1;
			    	let buf = MSG[ACT_MESSG].toString();
			    	
			    	let max_char = Math.round($id('card-message').clientWidth/5);
			    	let count_char = 0;
                    let count_line = 0;
					let rand = Math.round(Math.random()*MAX_ANIME);
				

					if (ACT_MESSG == 22 ) {
			    		setTimeout (()=>{$id('card-message').classList.value = 'anim_FIN';},4050);
			        	$id('anim').src = 'res/png/h_FIN.gif';
					}else {
						$id('card-message').classList.value = `anim_${rand}`;
						$id('anim').src = `res/png/h_${ACT_HPGIF}.gif`;
					}
                    setTimeout(()=>{
                        let writing_state = setInterval(()=> {
                            if (count_char == buf.length+8 ){
                                clearInterval(writing_state);
                                $id('next-bnt').disabled = false;
			    			    $id('next-bnt').style.backgroundColor = "seagreen";
						    	$id('next-bnt').style.borderColor = "seagreen";
                            }
                            let _char = ( count_line < max_char ) ? buf.charAt(count_char) : '\n'
                            _char = (_char !== 'undefined' ) ? _char : '';
                            $id('card-text').textContent += _char;
                            if (_char !== '\n' ) count_char +=1;
                            count_line = (count_line == max_char) ? 0 : count_line+1;                      
                    },70)},700);
				}
			});
		}
	}
	
	setInterval(set_dayCount(),1000);
	set_wellcome();

	$id('open-bnt').addEventListener('click',()=> { 
		$id('bg-sound1').play()
	    openBox()
	});
}

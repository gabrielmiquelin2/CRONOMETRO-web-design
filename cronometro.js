     (function(){
                
      let $cronometro = document.querySelector('#cronometro');
      let $iniciar = document.querySelector('#iniciar');
      let $pausar = document.querySelector('#pausar');
      let $parar = document.querySelector('#parar');

       $iniciar.addEventListener('click', iniciar);
       $pausar.addEventListener('click', pausar);
       $parar.addEventListener('click', parar);
       
       let invtervalo = null;
       let msClickIniciar = 0;
       let msClickPausar = 0;
       let msTempoDecorrido = 0;
       let rodando = false;

       function iniciar (){
          if(rodando)return;
          parar();
          msClickIniciar = Date.now();
          iniciaCronometro();
          rodando = true // ou seja quando clicar em inicar rodando recebe true (verdadeiro)
       }
       
       function pausar (){
        if(!$cronometro.value) return; //SE NÃO TÈM VALOR LÁ DENTRO, ENTÃO RETORNE
         if(rodando){
          rodando = false;
          clearInterval(invtervalo);
          msClickPausar = Date.now();
          msTempoDecorrido += (msClickPausar - msClickIniciar)         
         }else{
          rodando = true;
          msClickIniciar = Date.now();
          iniciaCronometro(msTempoDecorrido);
         }
       }

       function parar (){
          msClickPausar = 0;
          msClickIniciar = 0;
          msTempoDecorrido = 0;
          rodando = false;
          clearInterval(invtervalo)//limpei o intervalo
          $cronometro.value = " ";
       }

       function iniciaCronometro (tempoDecorrido){
        let _ms = tempoDecorrido || 0;
        invtervalo = setInterval(function(){
              let msAgora = Date.now();
              let diferenca = msAgora - msClickIniciar;
              $cronometro.value = formataMs(diferenca + _ms) ;
           },100)
       }

       function formataMs(ms){
      /*
      valor em ms      valor em segundos
      ms = 900 ->         900
      ms = 1500 ->        1:500 //1 segundo e 500 milesegundos
      ms = 5900 ->        59:000 //59 segundos
      ms = 61500 ->       1:1:500 //1 minuto 1 segundo e 500milesegundos
      */ 

      const MINUTO = 60 * 1000;
        if(ms < 1000){
          return ms;
        }else if (ms < MINUTO){
          let s = ms/1000;
          s = parseInt(s)// para o numero não ficar com vírguala ou quebrado
          let c = ms - (s * 1000);
          return s + ":" + c;
        }else{
           let m = ms / MINUTO;
           m = parseInt(m);
           return m + ":" + formataMs(ms - m * MINUTO);
        }
       }

      })()
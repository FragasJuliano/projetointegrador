// Acadêmico: Juliano Fragas //
// TSI18 - Tecnólogo Sistemas para Internet //
// IFC - Instituto Federal Catarinense Campus Camboriú //
// Programação Web - Prof° Rafael Speroni //

// Função modal Esportes //

       function iniciaModal(modalID) {
         const modal = document.getElementById(modalID); // identificador da variável constante não pode ser alterado //
         modal.classList.add('mostrar');
         modal.addEventListener('click', (e) => {
           if(e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
           }
         });
       }

          const meio = document.querySelector('.meio'); // document. querySelector é usado para selecionar a class no CSS //
          meio.addEventListener('click', () => iniciaModal('modal-noticias')); 
          
// Função  modal Infomrativos //

        function iniciaModal(modalID) {
           const modal = document.getElementById(modalID);
           modal.classList.add('mostrar');
           modal.addEventListener('click', (e) => {
             if(e.target.id == modalID || e.target.className == 'fechar') {
              modal.classList.remove('mostrar');
           }
         });
       }

          const ladoD = document.querySelector('.ladoE');
          ladoD.addEventListener('click', () => iniciaModal('modal-noticias1'));

// Função  modal Clima //

        function iniciaModal(modalID) {
           const modal = document.getElementById(modalID);
           modal.classList.add('mostrar');
           modal.addEventListener('click', (e) => {
             if(e.target.id == modalID || e.target.className == 'fechar') {
              modal.classList.remove('mostrar');
           }
         });
       }

          const ladoE = document.querySelector('.ladoD');
          ladoE.addEventListener('click', () => iniciaModal('modal-noticias3'));

         
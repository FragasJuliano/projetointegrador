// Acadêmico: Juliano Fragas 
// TSI18 - Tecnólogo Sistemas para Internet 
// IFC - Instituto Federal Catarinense Campus Camboriú 
// Programação Web - Prof° Rafael Speroni 

// FUNÇÃO DO MODAL NOTICIAS 1 

       function iniciaModal(modalID) {
         const modal = document.getElementById(modalID); // identificador da variável constante não pode ser alterado //
         modal.classList.add('mostrar');
         modal.addEventListener('click', (e) => {
           if(e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
           }
         });
       }

          const meio = document.querySelector('.ladoE'); // document. querySelector é usado para selecionar a class no CSS //
          meio.addEventListener('click', () => iniciaModal('modal-noticias')); 
          
// FUNÇÃO DO MODAL VAGA

       function iniciaModal(modalID) {
           const modal = document.getElementById(modalID);
           modal.classList.add('mostrar');
           modal.addEventListener('click', (e) => {
             if(e.target.id == modalID || e.target.className == 'fechar') {
              modal.classList.remove('mostrar');
           }
         });
       }

          const v1 = document.querySelector('.v1');
          v1.addEventListener('click', () => iniciaModal('modal-vagas'));


// FUNÇÃO DO MODAL VAGA1

       function iniciaModal(modalID) {
           const modal = document.getElementById(modalID);
           modal.classList.add('mostrar');
           modal.addEventListener('click', (e) => {
             if(e.target.id == modalID || e.target.className == 'fechar') {
              modal.classList.remove('mostrar');
           }
         });
       }

          const v2 = document.querySelector('.v2');
          v2.addEventListener('click', () => iniciaModal('modal-vagas1'));
          


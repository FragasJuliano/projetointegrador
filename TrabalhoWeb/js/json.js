var json = [
    {'PHP': 
        [
            {'aula1':
                [
                'txt','O PHP é uma linguagem ...',
                'img','caminho','descrição'
                ]
            },
            {'aula2':
                [
                'txt','Nessa aula aprenderemos ...',
                'btn','Download','caminho','nome'
                ]
            }
        ]
    },
    {'HTML':
        [
            {'aula1':
                [
                'txt','HTML significa linguagem ...'
                ]
            },
            {'aula2':
                [
                'txt','Nessa aula aprenderemos ...',
                'btn','Download','caminho','nome'
                ]
            }
        ]
    }];
    
var indice1 = 0;
var materia = "PHP";
var indice2 = 0;
var aula = "aula1";

//Caso o objeto exista
if(typeof json[indice1][materia][indice2][aula] !== "undefined"){
      console.log(json[indice1][materia][indice2][aula]);
}
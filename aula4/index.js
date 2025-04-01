const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')
const { emitKeypressEvents } = require('readline')

function operation(){
    inquirer.prompt([
        {
            type:'list',
            name:'action',
            message:'Escolha uma das opcoes do menu: ',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        }
    ]).then((answer) => {
        const action = answer['action']

        if(action === 'Criar conta'){
            console.log('Criando a conta...')
        }else if(action === 'Consultar saldo'){
            console.log('consultando saldo...')
        }else if(action === 'Depositar'){
            console.log('Depositando...')
        }else if(action === 'Sacar'){
            console.log('Sacando...')
        }else if(action === 'Sair'){
            console.log('Sair do sistema...')
            process.exit()

        }else {
            console.log('nao e valido')
        }
    })  
        
    }

    

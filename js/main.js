$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');

    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000-000');

    $('#form-cadastro').validate( {
        rules: {
            nomeCompleto: {
                required: true
            },
            cpf: {
                required: true,
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            enderecoCompleto: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Insira seu nome completo.',
            cpf: 'Insira o CPF corretamente.',
            email: 'Insira o e-mail corretamente.',
            cep: 'Insira o CEP corretamente.',
            enderecoCompleto: 'Insira seu endereço completo'
        }
    })

})
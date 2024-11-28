export const cadastroPage = {
    registrar: '//button[text()="Registrar"]',
    email: 'input[name="email"]',
    nome: 'input[name="name"]',
    senha: 'input[name="password"]',
    confirmacao_senha: 'input[name="passwordConfirmation"]',
    botao_conta_com_saldo: 'button[id="toggleAddBalance"]',
    botao_sucesso: '//button[text()="Cadastrar"]',
    mensagem_sucesso: 'div:contains("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")',
    
    erro_nome: 'span:contains("É necessário informar o nome")',
    erro_cpf: 'span:contains("É necessário informar o CPF")',
    erro_email: 'span:contains("É necessário informar o email")',
    erro_cep: 'span:contains("É necessário informar o CEP")',
    erro_endereco: 'span:contains("É necessário informar o número do endereço")',
    erro_entrega : 'span:contains("Selecione o método de entrega")',
    erro_img: 'span:contains("Adicione uma foto da sua CNH")',
    erro_whats: 'span:contains("Oops! Whatsapp com formato incorreto")',
    erro_cpf_invalido: 'span:contains("Oops! CPF inválido")'
};
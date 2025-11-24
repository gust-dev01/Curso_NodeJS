import e from "express";

 const api = e();

api.get('/helloworld', (req, resp) => {
    resp.send('Hello World');
})

api.get('/mensagens/boasvindas', (req, resp) =>{
    resp.send('Oi, como vai? Sejam bem vindos');
})


api.get('/mensagens/ocupado', (req, resp) =>{
    resp.send('Estou ocupado no momento');
})






api.get('/calculadora/soma/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2;
    
    resp.send("A soma é " + soma);
})

api.get('/calculadora/subtrair/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let subtrair = n1 - n2;
    
    resp.send("A subtrair é " + subtrair);
})

api.get('/calculadora/multiplicar/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let multiplicar = n1 * n2;
    
    resp.send("A multiplicar é " + multiplicar);
})






api.get('/calculadora/somar', (req,resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let soma = n1 + n2;
    
    resp.send("A soma é " + soma);
})

api.get('/mensagem/oi', (req, resp) =>{
    let pessoa = req.query.nome ?? 'usuario';

    resp.send("Olá, tudo bem " + pessoa)
})

 api.listen(5010, () => console.log("API subiu com sucesso!"));
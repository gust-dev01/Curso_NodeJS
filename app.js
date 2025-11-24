import e from "express";

 const api = e();

api.get('/helloworld', (req, resp) => {
    resp.send('Hello World');
})

api.get('/mensagens/boasvindas', (req, resp) =>{
    resp.send('Oi, como vai? Sejam bem vindos')
})


api.get('/mensagens/ocupado', (req, resp) =>{
    resp.send('Estou ocupado no momento')
})

 api.listen(5010, () => console.log("API subiu com sucesso!"));
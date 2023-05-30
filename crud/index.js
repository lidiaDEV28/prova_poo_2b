(async () =>
{
    const database =require('./db');
    const produto =require('./produto');

await database.sync()

await database.create(
    {
        Nome:" meu primeiro teste",
        Datacriaca0 : Date()
    }
    
)
//metodo de alteracao

await produto.create(
{

        Nome: "meu primeiro teste",
        Datacriacao: Date()
}
)
await produto.create(

    {

        Nome: "meu segundo teste",
        Datacriacao: Date()
}
)
await produto.create(

    {

        Nome: "meu  terceiro teste",
        Datacriacao: Date()
}
)
const alterProd =await produto.findByPK(2);
alterProd.Nome = " Arquivo 2 alterado";
await alterProd.save();
//metodo de deletar

produto.destroy({where : { id: 1 }  });
//metodo de recuperar

const findProd = await produto.findByPK(3);

console.log(findProd);

const findAllProd = await produto.findAllProd();
console.log(findAllProd)
})();
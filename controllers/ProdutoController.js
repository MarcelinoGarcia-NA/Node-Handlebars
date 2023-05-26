const Produto = require('../models/Produto');

module.exports = {
    
    async cadastro(req, res){
        res.render('cadastro')
    },

    async produtos(req, res) {
        Produto.findAll().then((produtos) => {
            if (produtos.length > 0) {
                return res.render('home', { produtos: produtos.map(produtos => produtos.toJSON()) });
            } else {
                res.render('home', { NavActiveUsers: true, table: false });
            }
        }).catch((err) => {
            console.log(`Houve um problema: ${err}`);
        })
    },
    async addproduto(req, res) {

        var nome = req.body.nome;
        var descricao = req.body.descricao;
        var preco = req.body.preco;
        var vitrine = req.body.vitrine;
        var foto = req.body.foto;

        Produto.create({
            nome: nome,
            descricao: descricao,
            preco: preco,
            vitrine: vitrine,
            foto: foto
        }).then(function () {

            console.log('Cadastro de Produto realizado com sucesso!');
            return res.redirect('/');

        }).catch(function (erro) {
            console.log(`Ops, deu erro: ${erro}`);
        })

    },
    async deletar(req, res) {
        Produto.destroy({
            where: {
                id: req.body.id
            }
        }).then((retorno) => {
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
        })
    },

    async alterar(req, res) {
        var id = req.body.id;
        Produto.findByPk(id).then((produto) => {
            return res.render('alterar', { produto: produto.dataValues })
        }).catch(function (erro) {
            console.log(`Ops, deu erro: ${erro}`);
        })
    },

    async alterarProduto(req, res) {
        var nome = req.body.nome;
        var descricao = req.body.descricao;
        var preco = req.body.preco;
        var vitrine = req.body.vitrine;
        var foto = req.body.foto;
        var id = req.body.id;
        console.log(id)
        Produto.update(
            {
                nome: nome,
                descricao: descricao,
                preco: preco,
                vitrine: vitrine,
                foto: foto
            },
            {
                where: {
                    id: id
                }
            }).then(() => {
                return res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })

    }
};





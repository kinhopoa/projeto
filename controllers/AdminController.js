const { Produto, Usuario } = require('../database/models');

const AdminController = {
    listarProdutos: async (req, res) => {

        const produtos = await Produto.findAll();
        
        res.render('adminProdutos', {produtos})
    },
    listarUsuario: async(req, res) => {

        const usuarios = await Usuario.findAll();

        res.render('adminUsuarios', {usuarios});
    },
    store: async (req, res) => {
            const { nomeProduto, preco, estoque} = req.body
    
            const produto = await Produto.create({
                nome: nomeProduto,
                preco: preco,
                estoque: estoque
            })
            console.log(produto)
            res.render('cadastroProduto')
        }
    }

    module.exports = AdminController;
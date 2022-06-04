const {Product} = require('../database/models')

const ProdutosController = {
    index: async (req, res) => {
    const produto = await Product.findAll();
        res.render('index', {produto})
    },
    produto: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findAll({
            where: {
                id: id
            }
        })
        res.render('produtos', {product})
    },
    canecas:(req, res) => {
        res.render('canecas')
    },
    vestuario: (req, res) => {
        res.render('vestuario')
    },
    camisas: (req, res) => {
        res.render('camisas')
    },
    moletons: (req, res) => {
        res.render('moletons')
    },
    bones: (req, res) => {
        res.render('bones')
    },
    games: (req, res) => {
        res.render('games')
    },
    cadastro: (req, res) => {
        res.render('cadastroProduto')
    }
}

module.exports = ProdutosController
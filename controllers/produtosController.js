const {Product} = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

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
    search: async (req, res) => {
        let { key } = req.query;
        const produto = await Product.findAll({
            where: {
                nome: {
                    [Op.like]: `${key}`
                }
            }
        });
        return res.render('produtos', produto)
        
     },
    canecas: async (req, res) => {

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
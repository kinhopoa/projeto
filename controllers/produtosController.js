const ProdutosController = {
    index: (req, res) => {
        res.render('produtos')
    },
    canecas: (req, res) => {
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
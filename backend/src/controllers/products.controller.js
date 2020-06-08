const productCtrl = {};

productCtrl.getProducts = (req, res) => {
    res.send({
        'message':'Mostrando productos'
    })
}

productCtrl.uploadProducts = (req, res) => {
    res.send({
        'message':'Subiendo producto'
    })
}

productCtrl.deleteProducts = (req, res) => {
    res.send({
        'message':'Producto eliminado'
    })
}


module.exports = productCtrl;
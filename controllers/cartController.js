const { Cart, CartItem, Product, Usuario } = require('../database/models');

exports.renderCart = async (req, res) => {
  const cart = await Cart.findOne({ 
    where: { userId: req.session.usuario.id },
    include: {
      model: CartItem, 
      as: "items", 
      include: {
        model: Product,
        as: "product"
      }
    } 
  });

  return res.render('cart', { cart });
}

exports.addToCart = async function(req, res) {
  const { productId } = req.params;
  const { quantity = 1 } = req.body;

  const cart = await Cart.findOne({ 
    where: { userId: req.session.usuario.id },
    include: { all: true, nested: true }
  });

  const isProductInCart = await cart.getItems({ where: { productId }})
    .then(items => items[0])

  if (!isProductInCart) {
    await cart.createItem({ productId, quantity: Number(quantity) });
  } else {
    isProductInCart.quantity += Number(quantity);
    await isProductInCart.save()
  }

  await cart.reload();

  const total = cart.toJSON().items.reduce((total, item) => {
    return total + item.quantity * item.product.price;
  }, 0);

  cart.total = total;

  await cart.save();
  
  return res.redirect('/cart');
};

exports.removeFromCart = async function(req, res) {
  const { productId } = req.params;
  const { id: userId } = req.session.usuario;

  const cart = await Cart.findOne({ 
    where: { userId },
    include: { all: true, nested: true }
  });
  
  await CartItem.destroy({ where: { productId } });
  
  await cart.updateTotal(userId);

  return res.redirect('/cart');
}

exports.incrementProductQuantity = async function(req, res) {
  const { productId } = req.params;
  const { id: userId } = req.session.usuario;

  const cart = await Cart.findOne({ 
    where: { userId },
    include: { all: true, nested: true }
  });

  const cartProduct = await cart.getItems({ where: { productId }})
    .then(items => items[0]);
  
  cartProduct.quantity += 1;

  await cartProduct.save()

  await cart.updateTotal(userId);

  return res.redirect('/cart');
}

exports.decrementProductQuantity = async function(req, res) {
  const { productId } = req.params;
  const { id: userId } = req.session.usuario;

  const cart = await Cart.findOne({ 
    where: { userId },
    include: { all: true, nested: true }
  });

  const cartProduct = await cart.getItems({ where: { productId }})
    .then(items => items[0]);

  if (cartProduct.quantity - 1 === 0) {
    await CartItem.destroy({ where: { productId } });
  } else {
    cartProduct.quantity -= 1;
    await cartProduct.save()
  }

  await cart.updateTotal(userId);

  return res.redirect('/cart');
}
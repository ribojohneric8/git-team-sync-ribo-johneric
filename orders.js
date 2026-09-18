function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

function calculateLoyaltyPoints(order) {
  const basePoints = order.total / 10;
  let points;
  if (order.total > 100) {
    points = Math.round(basePoints * 1.5);
  } else {
    points = Math.round(basePoints);
  }
  return Math.max(points, 1);
}

module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };

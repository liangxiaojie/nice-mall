import cartGoodsesGQL from './cartGoodses.gql'
import createCartGoodsGQL from './createCartGoods.gql'
import updateCartGoodsGQL from './updateCartGoods.gql'
import deleteCartGoodsGQL from './deleteCartGoods.gql'

export async function getCartGoodses(client) {
  const {data} = await client.query({
    query: cartGoodsesGQL
  })
  return data;
}

export async function createCartGoods(client, cartGoods) {
  const { data } = await client.mutate({
    mutation: createCartGoodsGQL,
    variables: cartGoods,
  });
  return data;
}

export async function updateCartGoods(client, cartGoods) {
  const { data } = await client.mutate({
    mutation: updateCartGoodsGQL,
    variables: cartGoods,
  });
  return data;
}

export async function deleteCartGoods(client, _id) {
  const { data } = await client.mutate({
    mutation: deleteCartGoodsGQL,
    variables: { _id },
  });
  return data;
}

export default {
  getCartGoodses,
  createCartGoods,
  updateCartGoods,
  deleteCartGoods
}

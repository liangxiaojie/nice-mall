import goodses from './goodses.gql'
import goods from './goods.gql'

export async function getGoodses(client) {
  const {data} = await client.query({
    query: goodses
  })
  return data;
}

export async function getGoodsById(client, _id) {
  const {data} = await client.query({
    query: goods,
    variables: { _id }
  })
  return data;
}

export default {
  getGoodses,
  getGoodsById
}

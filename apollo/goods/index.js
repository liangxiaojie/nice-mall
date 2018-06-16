import hotGoodses from './hotGoodses.gql'
import hotLeases from './hotLeases.gql'
import goodses from './goodses.gql'
import goods from './goods.gql'
import leases from './leases.gql'
import lease from './lease.gql'

export async function getHotGoodses(client) {
  const {data} = await client.query({
    query: hotGoodses
  })

  const { goodses } = data;
  return { hotGoodses: goodses };
}

export async function getHotLeases(client) {
  const {data} = await client.query({
    query: hotLeases
  })

  const { goodses } = data;
  return { hotLeases: goodses };
}

export async function getGoodses(client, query = { type: 0 }) {
  const {data} = await client.query({
    query: goodses,
    variables: query
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

export async function getLeases(client) {
  const {data} = await client.query({
    query: leases
  })

  const { goodses } = data;
  return { leases: goodses };
}

export async function getLeaseById(client, _id) {
  const {data} = await client.query({
    query: lease,
    variables: { _id }
  })

  const { goods } = data;
  return { lease: goods };
}

export default {
  getGoodses,
  getGoodsById
}

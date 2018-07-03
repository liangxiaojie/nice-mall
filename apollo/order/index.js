import ordersGQL from './orders.gql'
import createOrderGQL from './createOrder.gql'

export async function getOrders(client) {
  const {data} = await client.query({
    query: ordersGQL
  })
  return data;
}

export async function createOrder(client, orderinfo) {
  const { data } = await client.mutate({
    mutation: createOrderGQL,
    variables: orderinfo,
  });
  return data;
}

export default {
  getOrders,
  createOrder,
}

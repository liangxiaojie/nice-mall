import deliveryAddressesGQL from './deliveryAddresses.gql'
import createDeliveryAddressGQL from './createDeliveryAddress.gql'
import updateDeliveryAddressGQL from './updateDeliveryAddress.gql'
import deleteDeliveryAddressGQL from './deleteDeliveryAddress.gql'

export async function getDeliveryAddresses(client) {
  const {data} = await client.query({
    query: deliveryAddressesGQL
  })
  return data;
}

export async function createDeliveryAddress(client, deliveryAddress) {
  const { data } = await client.mutate({
    mutation: createDeliveryAddressGQL,
    variables: deliveryAddress,
  });
  return data;
}

export async function updateDeliveryAddress(client, deliveryAddress) {
  const { data } = await client.mutate({
    mutation: updateDeliveryAddressGQL,
    variables: deliveryAddress,
  });
  return data;
}

export async function deleteDeliveryAddress(client, _id) {
  const { data } = await client.mutate({
    mutation: deleteDeliveryAddressGQL,
    variables: { _id },
  });
  return data;
}

export default {
  getDeliveryAddresses,
  createDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress
}

<template>
  <div class='mx-6 text-gray-100 overflow-x-auto relative whitespace-nowrap'>
    <div class='absolute top-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>
    <table class='w-full rounded-lg'>
      <thead class='border-b'>
      <tr>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Symbol
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Type
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Order ID
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Date(UTC)
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Amount($)
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Price($)
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Amount Coin
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Order Rate(%)
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Expand Order(%)
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Value
        </th>
        <th scope='col' class='text-sm font-medium px-2 py-4 text-left'>
          Total
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class=' border-b transition duration-300 ease-in-out hover:bg-gray-800'>
        <td class='px-6 py-4 whitespace-nowrap text-sm font-medium'>SDFGHJ</td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Mark
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Otto
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
      </tr>
      <tr class=' border-b transition duration-300 ease-in-out hover:bg-gray-800'>
        <td class='px-6 py-4 whitespace-nowrap text-sm font-medium'>TYUIO</td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Mark
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Otto
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
      </tr>
      <tr class=' border-b transition duration-300 ease-in-out hover:bg-gray-800'>
        <td class='px-6 py-4 whitespace-nowrap text-sm font-medium'>ASDFG</td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Mark
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          Otto
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          @mdo
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
        <td class='text-sm font-light px-6 py-4 whitespace-nowrap'>
          OK
        </td>
      </tr>
      </tbody>
      <div class='py-4'></div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrderTable'
}
</script>

<style scoped>

</style>

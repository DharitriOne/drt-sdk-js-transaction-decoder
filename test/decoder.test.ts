import { TransactionDecoder, TransactionMetadata } from './../src/transaction.decoder';

test('NFT Smart contract call', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'moa18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsp7ckmy',
    receiver: 'moa18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsp7ckmy',
    data: 'RENEVE5GVFRyYW5zZmVyQDRjNGI0ZDQ1NTgyZDYxNjE2MjM5MzEzMEAyZmI0ZTlAZTQwZjE2OTk3MTY1NWU2YmIwNGNAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEA3Mzc3NjE3MDVmNmM2YjZkNjU3ODVmNzQ2ZjVmNzI2NTc3NjFAMGIzNzdmMjYxYzNjNzE5MUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'moa18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsp7ckmy',
    receiver: 'moa1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qtqd7fq',
    value: BigInt('1076977887712805212893260'),
    functionName: 'swap_lkmex_to_rewa',
    functionArgs: [
      '0b377f261c3c7191',
      '',
    ],
    transfers: [
      {
        value: BigInt('1076977887712805212893260'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-2fb4e9',
        },
      },
    ],
  });
});

test('MultiDCDTNFTTransfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'moa1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqt2n7l4',
    receiver: 'moa1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqt2n7l4',
    data: 'TXVsdGlEQ0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA0YzRiNGQ0NTU4MmQ2MTYxNjIzOTMxMzBAMmZlM2IwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDRjNGI0ZDQ1NTgyZDYxNjE2MjM5MzEzMEAzMTAyY2FAMDEyNjMwZTlhMjlmMmY5MzgxNDQ5MUA3Mzc3NjE3MDVmNmM2YjZkNjU3ODVmNzQ2ZjVmNzI2NTc3NjFAMGVkZTY0MzExYjhkMDFiNUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'moa1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqt2n7l4',
    receiver: 'moa1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qtqd7fq',
    value: BigInt('0'),
    functionName: 'swap_lkmex_to_rewa',
    functionArgs: [
      '0ede64311b8d01b5',
      '',
    ],
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-2fe3b0',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-3102ca',
        },
      },
    ],
  });
});

test('DCDT Transfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'moa1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvsweng66',
    receiver: 'moa1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqtnpz6v',
    data: 'RENEVFRyYW5zZmVyQDUwNGM0MTU0NDEyZDM5NjI2MTM2NjMzM0AwMTJhMDVmMjAw',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'moa1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvsweng66',
    receiver: 'moa1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqtnpz6v',
    value: BigInt('5000000000'),
    transfers: [
      {
        value: BigInt('5000000000'),
        properties: {
          identifier: 'PLATA-9ba6c3',
        },
      },
    ],
  });
});
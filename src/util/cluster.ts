const endpoint = {
  http: {
    devnet: 'http://api.devnet.uttacoin.com',
    testnet: 'http://api.testnet.uttacoin.com',
    'mainnet': 'http://api.mainnet.uttacoin.com',
  },
  https: {
    devnet: 'https://api.devnet.uttacoin.com',
    testnet: 'https://api.testnet.uttacoin.com',
    'mainnet': 'https://api.mainnet.uttacoin.com',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}

export type CacheOptions = {
  browser: {
    pages: PageWithCacheHeaders[]
  };
  // server: {
  // TODO: add server cache with redis, memcached, etc
  // };
};

export type PageWithCacheHeaders = [
  string, CacheHeaders
];

export type CacheHeaders = {
  [key: string]: any
}


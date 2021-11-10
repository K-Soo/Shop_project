export const queryKeys = {
  PRODUCT: 'product',
  PRODUCT_CLOSE: 'product-close',
  HISTORY: 'history',
  SEARCH: 'search',
  REVIEW: {
    name: 'review',
    limit: 4,
  },
  INTEREST_PRODUCT: 'interestProduct',
  POINT: 'point',
  POINT_DETAIL: 'pointDetail',
  NOTICE_LIST: {
    name: 'notice-list',
    limit: 10,
  },
} as const;

type TList = 'label' | 'url' | 'icon';
export type TQuickIconProps = { [K in TList]: string };

export const QUICK_ICON_LEFT: TQuickIconProps[] = [
  { label: '장바구니', url: '/order/basket', icon: 'cart' },
  { label: '상품후기', url: '/2', icon: 'bed' },
  { label: '고객센터', url: '/4', icon: 'bed' },
  { label: '마이쇼핑', url: '/5', icon: 'bed' },
]

export const QUICK_ICON_RIGHT: TQuickIconProps[] = [
  { label: '관심상품', url: '/users/interest-products', icon: 'heart' },
  { label: '장바구니', url: '/order/basket', icon: 'cart' },
  { label: '상품후기', url: '/2', icon: 'bed' },
  { label: '주문내역', url: '/users/history/list', icon: 'note' },
]

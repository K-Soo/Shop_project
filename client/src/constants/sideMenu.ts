type TList = 'label' | 'url' | 'icon';
export type TQuickIconProps = { [K in TList]: string };

export const QUICK_ICON_LEFT: TQuickIconProps[] = [
  { label: '장바구니', url: '/order/basket', icon: 'cart' },
  { label: '상품후기', url: '/2', icon: 'bed' },
  { label: '공지사항', url: '/board/notice', icon: 'warning' },
  { label: '마이쇼핑', url: '/users', icon: 'user' },
]

export const QUICK_ICON_RIGHT: TQuickIconProps[] = [
  { label: '관심상품', url: '/users/interest-products', icon: 'heart' },
  { label: '장바구니', url: '/order/basket', icon: 'cart' },
  { label: '상품후기', url: '/2', icon: 'bed' },
  { label: '주문내역', url: '/users/history/list', icon: 'note' },
]

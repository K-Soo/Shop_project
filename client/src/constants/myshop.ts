type TList = 'label' | 'value' | 'url' | 'icon';
type TMyshopMenu = { [K in TList]: string };

export const MY_SHOP_MENU: readonly TMyshopMenu[] = [
  { label: '홈', value: '홈으로 이동합니다.', url: '/', icon: 'home' },
  { label: '주문내역조회', value: '주문내역을 조회하실수있습니다.', url: '/users/history/list', icon: 'note' },
  { label: '개인정보수정', value: '고객님의 개인정보를 관리하는공간입니다.', url: '/users/modify', icon: 'user' },
  { label: '장바구니', value: '장바구니로 이동합니다.', url: '/order/basket', icon: 'cart' },
  { label: '위시리스트', value: '고객님의 관심상품으로 등록하신 상품의 목록을 보여드립니다.', url: '/users/interest-products', icon: 'heart' },
  { label: '적립금', value: '적립금은 상품구매시 사용가능합니다.', url: '/users/point', icon: 'coin' },
];
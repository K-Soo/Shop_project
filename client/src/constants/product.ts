export interface IProductProps {
  readonly [index: string]: {
    label: string, 
    value: string
  }[]
}

export const PRODUCT: IProductProps = {
  necklace: [
    { label: '18k 목걸이', value: '' },
    { label: '18k 팬던트', value: '' },
    { label: '이니셜 목걸이', value: '' },
    // { label: '진주 목걸이', value: '' },
    // { label: '1부 다이아몬드 목걸이', value: '' },
  ],
  earring: [
    { label: '피어싱 귀걸이', value: '' },
    { label: '이니셜 귀걸이', value: '' },
    { label: '진주 귀걸이', value: '' },
    // { label: '침형 귀걸이', value: '' },
    // { label: '롱스타일 귀걸이', value: '' },
    // { label: '링/파이프 귀걸이', value: '' },
    // { label: '원터치 귀걸이', value: '' },
    // { label: '드롭형 귀걸이', value: '' },
    // { label: '탄생석 귀걸이', value: '' },
    // { label: '귀찌', value: '' },
    // { label: '다이아몬드 귀걸이', value: '' },
    // { label: '실버 귀걸이', value: '' },
  ],
  ring: [
    { label: '심플링', value: '' },
    // { label: '미스링', value: '' },
    // { label: '옴므링', value: '' },
    // { label: '애끼링', value: '' },
    { label: '이니셜', value: '' },
    // { label: '탄생석 원석반지', value: '' },
    // { label: '실버 반지', value: '' },
    { label: '진주 반지', value: '' },
    // { label: '묵주 반지', value: '' },
    // { label: '프리사이즈', value: '' },
    // { label: '다이아몬드 반지', value: '' },
    // { label: '다이아몬드 프로포즈링', value: '' },
  ],
  bracelet: [
    { label: '진주 팔찌', value: '' },
    { label: '매듭 팔찌', value: '' },
  ],
  anklet: [
    { label: '발찌', value: '' },
  ],
  gold: [
    { label: '순금 돌선물', value: '' },
    { label: '순금 목걸이', value: '' },
    { label: '순금 팔찌', value: '' },
    // { label: '순금 카드상패', value: '' },
    // { label: '순금 기념품', value: '' },
  ],
  diamond: [
    { label: '1부 다이아몬드 목걸이', value: '' },
    { label: '1부 다이아몬드 귀걸이', value: '' },
  ],
  coupling: [
    { label: '커플링', value: '' },
  ]
}

export enum CategoryEnum {
  necklace = '목걸이',
  earring = '귀걸이',
  ring = '반지',
  bracelet = '팔찌',
  anklet = '발찌',
  gold = '순금',
  diamond = '다이아몬드',
  coupling = '커플링'
}

export const BUY_INFO_DELIVERY = [
  '상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.',
  '일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.',
  '일반 및 브랜드의 상품의 경우 상품별 출고일시가 달라 각각 배송될 수 있습니다.',
  '도서 산간 지역은 별도의 배송비와 반품비가 추가될 수 있습니다.',
  '상품의 배송비는 키작은남자 및 브랜드 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.'
]

export const EXCHANGE_RETURN = [
  '이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우',
  '이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우',
  '시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우',
  '같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우',
  


]
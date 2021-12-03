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

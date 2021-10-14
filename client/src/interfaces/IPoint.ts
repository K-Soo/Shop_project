export default interface IPoint {
  PointOwner: string;
  currentPoint: number;
  pointInfo:{
    _id: string
    createdAt: string;
    currentPoint: number;
    orderNum: string;
    savedPoint: number;
    usedPoint: number;
  }[]
}

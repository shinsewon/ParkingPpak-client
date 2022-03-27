export {};

declare global {
  type OilType = 'gasoline' | 'premiumGasoline' | 'diesel';

  type OilInfo = {
    type: OilType;
    price: string;
    diff: number;
    percentile: number;
  };
}

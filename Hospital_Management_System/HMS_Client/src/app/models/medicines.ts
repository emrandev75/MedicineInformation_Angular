import { Maanufactur } from "./maanufactur";
import { MedicineGeneric } from "./medicine-generic";

export enum DosageForms {
  Liquid = 1,
  Tablet,
  Capsules,
  Cream,
  Suppositories,
  Drops,
  Inhalers,
  Injection
}

export enum MedicineType {
  Allopathy = 1,
  Homeopathy
}

export class Medicines {
  constructor(
    public medicineID?: number,
    public medicineName?: string,
    public weight?: string,
    public medicineType?: MedicineType,
    public dosageForms?: DosageForms,
    public expireDate?: Date,
    public quantity?: number,
    public sellPrice?: number,
    public discount?: number,
    public medicineGenericID?: number,
    public manufacturerID?: number,
    public medicineGeneric?: MedicineGeneric,
    public manufacturer?: Maanufactur

  ) { }
}

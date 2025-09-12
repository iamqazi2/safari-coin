// types/country-list.d.ts
declare module "country-list" {
  interface Country {
    name: string;
    code: string;
  }
  export function getNameList(): Country[];
}

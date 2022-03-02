export class CreateProductDto {

  constructor(
    public name: string,
    public type: string,
    public price: number,
    public manufacturer: string,
    public id?: number
  ) {  }

}

export class Product {
    public ProductId: number 
    public ProductName: string
    public ProductTotal: number
    public ProductLinkImage: string
    public ProductBrand: string
    public ProductPrice: number
    public ProductDescription: string
    public CategoryId: number
    constructor(id: number, name: string, link: string, brand: string, total: number, price: number, des: string, cateid: number){
        this.ProductId = id
        this.ProductName = name
        this.ProductLinkImage = link
        this.ProductBrand = brand
        this.ProductTotal = total
        this.ProductPrice = price
        this.ProductDescription = des
        this.CategoryId = cateid
      }
}
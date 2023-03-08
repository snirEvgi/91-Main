function Product(pName, pPrice, catagory, link) {
    this.productQrNumber = `QR #${Math.ceil(Math.random() * 99999999999)}`;
    this.pName = pName;
    this.pPrice = pPrice;
    this.catagory = catagory;
    this.link = link;
}
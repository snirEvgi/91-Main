let counter = 1


function Course(
    name,
    price,
    guideName,
    startDate,
    endDate,

) {
    this.courseNumber = `order_${Math.ceil(Math.random() * 99999999999)}`; //Math.ceil(Math.random() * 99999999999)
    this.name = name;
    this.price = price;
    this.guideName = guideName;
    this.startDate = startDate;
    this.endDate = endDate;

}
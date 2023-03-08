function Order(
    email,
    numberOfSeats,
    allergies = [],
    credit,
    comments,
    outside,
    date,
    time,
) {
    this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
    this.email = email;
    this.numberOfSeats = +numberOfSeats;
    this.allergies = allergies;
    this.credit = credit;
    this.comments = comments;
    this.outside = outside;
    this.date = date;
    this.time = time;
}
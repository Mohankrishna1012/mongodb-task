Find all the information about each products

 => db.mongodb.find({})

Find the product price which are between 400 to 800

 => db.mongodb.find({ product_price: { $gt: 400, $lt: 800 } })

Find the product price which are not between 400 to 600

=> db.mongodb.find({ product_price: { $not: { $gt: 400, $lt: 600 } } });

List the four product which are grater than 500 in price 

=> db.mongodb.find({ product_price: { $gte: 500 } }).limit(4);

Find the product name and product material of each products

=>db.mongodb.find({}, { product_name: 1, product_material: 1 });

Find the product with a row id of 10

=>db.mongodb.find({ id: "10" });

Find only the product name and product material

=>db.mongodb.find({}, { product_name: 1, product_material: 1 });

Find all products which contain the value of soft in product material

=>db.mongodb.find({ product_material: "Soft" }); 

Find products which contain product color indigo  and product price 492.00

=>db.mongodb.find({ $or: [{ product_price: 492 },{ product_color: "indigo" }]});

Delete the products which product price value are same

=>db.mongodb.deleteMany({ product_price: { $in: db.mongodb.distinct("product_price", {}) },});
//To store data into array
const fs= require('fs');
const path=require('path');

//filepath,filename,filetype
const p=path.join(
   path.dirname(require.main.filename),
   'data',
   'products.json'
);

const getProductsFromFile = callback =>{
    fs.readFile(p, (err,filecontent) =>{
        if(err){
         callback([]);
        }else{
            callback(JSON.parse(filecontent)); 
        }
    });
}

//class is a blueprint of an object
module.exports = class Product{
    //It is used to instace of an product object
    constructor(t){
        this.title = t;
    }
    //Saving products
    save(){
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err);
            })
        });
    }
    //To retrieve the data
    static fetchAll(callback){
       getProductsFromFile(callback);
    }
}
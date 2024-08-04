//Formula to calulate the discount which we saw
//D=(L-S)/L*100

var listingPrice = 799;
var sellingPrice =199;

var discountPercentage=((listingPrice-sellingPrice)/listingPrice)*100;

//console.log("Discounted price in percent is ", discountPercentage);

//Use math to round to the integer format.
//also concat with %off.
var discountPercentageAfterRounding=Math.round(discountPercentage);
//console.log("Discount percent after rounding ", discountPercentageAfterRounding + "% off.");

//boolean will be returned in such cases
var result = listingPrice > sellingPrice;
//console.log(result);

//type of operator
console.log(typeof result);
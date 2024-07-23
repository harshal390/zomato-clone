const str = "Angithi A Pure Veg Restauran";

console.log(str.length);

const dotstr = str.length < 30 ? str : str.substring(0, 30).concat("...");

console.log(dotstr)
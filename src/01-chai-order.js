/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */

export function getChaiOrderLength(order) {
  if (typeof order !== "string") return -1;
  return order.trim().length;
}

export function shoutChaiOrder(order) {
  if (typeof order !== "string") return "";
  const trimmedOrder = order.trim();
  return trimmedOrder.length > 0 ? trimmedOrder.toUpperCase() : "";
}

export function whisperChaiOrder(order) {
  if (typeof order !== "string") return "";
  const trimmedOrder = order.trim();
  return trimmedOrder.length > 0 ? trimmedOrder.toLowerCase() : "";
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== "string" || typeof ingredient !== "string") return false;
  return order.toLowerCase().includes(ingredient.toLowerCase());
}

export function getFirstAndLastChar(order) {
  if (typeof order !== "string") return null;
  const trimmedOrder = order.trim();
  if (trimmedOrder.length === 0) return null;

  return {
    first: trimmedOrder.charAt(0),
    last: trimmedOrder.at(-1),
  };
}

const order1 = "   Masala Tea   ";
const lengthResult = getChaiOrderLength(order1);
console.log(`Original: "${order1}" | Processed Length: ${lengthResult}`);

const order2 = "cutting chai";
const shoutResult = shoutChaiOrder(order2);
console.log(`Input: "${order2}" | Shout Output: "${shoutResult}"`);

const order3 = "ADRAK WALI CHAI";
const whisperResult = whisperChaiOrder(order3);
console.log(`Input: "${order3}" | Whisper Output: "${whisperResult}"`);

const order4 = "Special Elaichi Mix";
const searchFor = "elaichi";
const hasIngredient = hasSpecialIngredient(order4, searchFor);
console.log(`Does "${order4}" contain "${searchFor}"? : ${hasIngredient}`);

const order5 = "Cutting";
const charResult = getFirstAndLastChar(order5);
if (charResult) {
  console.log(
    `Order: "${order5}" | First: ${charResult.first} | Last: ${charResult.last}`,
  );
}

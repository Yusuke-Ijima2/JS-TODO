/*
 ** 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

const num = 1300;
num.toLocaleString();

const formattdNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattdNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです。";
};
console.log(checkSum(10, 60));

/*
 ** 論理演算子の本当の意味を知ろう && ||
 */
// ||　は左側がfalseなら右側を返す
const a = null;
const fee = a || "金額未設定です";
console.log(fee)

// &&　は左側がtrueなら右側を返す
const b = true;
const foo = b && '何か設定されました';
console.log(foo)

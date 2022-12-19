/*
 ** 分割代入
 */
const myProfile = {
  name: "hoge",
  age: 30,
};

// テンプレート文字列を使った場合
const message01 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message01);

// 分割代入を使った場合
const { name, age } = myProfile;
const message02 = `名前は${name}です。年齢は${age}です。`;
console.log(message02);

// 配列でも同様
const myInfo = ["bar", 30];

// テンプレート文字列を使った場合
const info01 = `名前は${myInfo[0]}です。年齢は${myInfo[1]}です。`;
console.log(info01);

// 分割代入を使った場合
const [a, b] = myInfo;
const info02 = `名前は${a}です。年齢は${b}です。`;
console.log(info02);

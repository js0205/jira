import React, { useEffect, useState } from "react";

const testClosure = () => {
  let num = 0;
  const effect = () => {
    num += 1;
    const message = `现在的num值： ${num}`;
    return function unmount() {
      console.log(message);
    };
  };
  return effect;
};
//执行test，返回effect函数
const add = testClosure();
//执行effect函数，返回引用了message1的unmount函数
const unmount = add();
//再一次执行effect函数，函数引用了message2的unmount函数
add();
//message3
add();
//message4
add();
//message5
add();
unmount();

//react hook与闭包
export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("num in setInterval", num);
    }, 1000);
    return () => clearInterval(id);
  }, [num]);
  useEffect(() => {
    return () => {
      console.log("卸载值", num);
    };
  }, [num]);

  return (
    <div>
      <button onClick={add}></button>
      <p>number:{num}</p>
    </div>
  );
};

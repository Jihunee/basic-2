// 여기에 1번 문제의 답을 작성하세요.
const oneResult = async function () {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  console.log(result);
};

oneResult();
// 여기에 2번 문제의 답을 작성하세요.
const twoResult = async function () {
  const Response = fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const result = (await Response).json();
  console.log(result);
};

twoResult();

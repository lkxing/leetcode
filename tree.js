const root = {
  name: "a",
  children: [
    {
      name: "b",
      children: [
        {
          name: "d",
        },
        {
          name: "e",
          children: [
            {
              name: "g",
            },
          ],
        },
        {
          name: "f",
        },
      ],
    },
    {
      name: "c",
    },
  ],
};
const deepTree = () => {
  const arr = [];
  const tree = (data, str = "") => {
    str += data.name;
    if (data.children) {
      data.children.map((item) => {
        tree(item, str);
      });
    } else {
      arr.push(str);
    }
  };

  tree(root);

  return arr;
};

console.log(deepTree());

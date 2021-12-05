import { docsGetter } from "../Firebase/firebase";

const shuffled = async () => {
  const array = await docsGetter();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const getAllProducts = () => {
  return shuffled();
};

export default getAllProducts;

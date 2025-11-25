import {memo} from "react";

const Bank = ({info, index}) => {

  console.log(`Render Bank ${info(index).name}`);

  return (
    <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos of {info(index).name}</h1>
  );
};

export default memo(Bank);
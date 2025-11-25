import {memo} from "react";

const Bank = ({info}) => {

  console.log(`Render Bank ${info.name}`);

  return (
    <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos of {info.name}</h1>
  );
};

export default memo(Bank);
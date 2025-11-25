import {memo} from "react";

const Bank = ({info}) => {

  console.log(`Render Bank ${info}`);

  return (
    <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos of {info}</h1>
  );
};

export default memo(Bank);
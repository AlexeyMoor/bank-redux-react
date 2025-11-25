import {memo} from "react";

const Bank = ({info}) => {

  console.log(`Render Bank ${info.current.name}`);

  return (
    <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of Braavos of {info.current.name}</h1>
  );
};

export default memo(Bank);
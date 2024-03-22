import React, { useState, useCallback } from "react";
import { TitleRow, SelectRow, TagRow, Left, Right, Logo, Tag } from "./style";

type Props = {
  data: {
    name?: string;
    count?: number;
    logo?: string;
    value?: number;
    unit?: string;
    tags?: string[];
  };
};

const Amount: React.FC<Props> = (props) => {
  const { data = {} } = props;
  const { name, count, logo, value, unit, tags = [] } = data;
  const [val, setVal] = useState(2);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(Number(e.target.value));
  }, []);

  return (
    <div>
      <TitleRow>
        <b className="left">Select amount</b>
        <div className="right">
          Available <b>{`${count} ${name}`}</b>
        </div>
      </TitleRow>
      <SelectRow>
        <Left>
          <Logo src={logo} />
        </Left>
        <Right>
          <input className="highlight count" value={val} onChange={onChange} />
          <div>
            <b className="highlight">{name}</b>
            <span>{` ≈ ${unit}${value}`}</span>
          </div>
        </Right>
      </SelectRow>
      <TagRow>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagRow>
    </div>
  );
};

export default Amount;

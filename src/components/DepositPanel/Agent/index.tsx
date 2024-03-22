import React from "react";
import { Container, Label, Field, Image, Text, Icon } from "./style";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  img?: string;
  text?: string;
  icon?: string;
};

const Agent: React.FC<Props> = (props) => {
  const { className, style, label, img, text, icon } = props;
  return (
    <Container className={className} style={style}>
      <Label>{label}</Label>
      <Field>
        {img && <Image src={img} />}
        {text && <Text>{text}</Text>}
        {icon && (
          <Icon
            name={icon}
            fill="--tagColor"
            viewBox="0 0 117.74 122.88"
            width="15px"
            height="15px"
            onClick={() => {}}
          />
        )}
      </Field>
    </Container>
  );
};

export default Agent;

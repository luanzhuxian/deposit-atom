import React from "react";
import { getPath } from "./paths";

const setProperty = (
  target: Record<string, unknown>,
  prop: string,
  val: unknown
) => {
  if (typeof target !== "object") {
    return;
  }
  if (val == null) {
    return;
  }
  Reflect.set(target, prop, val);
};

const defaultSvgStyles = {
  display: "inline-flex",
  verticalAlign: "top",
  overflow: "hidden",
  outline: "none",
  // width: '1rem',
  // height: '1rem',
  color: "#758ca4",
};

type Props = {
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  viewBox?: string;
  tabIndex?: number;
  role?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  focusable?: boolean;
  preserveAspectRatio?: string;
  path?: string;
  name?: string;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
};

const Svg: React.FC<Props> = (props) => {
  const {
    className,
    style = {},
    width = "1rem",
    height = "1rem",
    tabIndex = 0,
    role = "presentation",
    ariaLabel,
    ariaHidden = true,
    focusable = false,
    preserveAspectRatio = "xMidYMid meet",
    path,
    name,
    fill = "var(--sapContent_NonInteractiveIconColor)",
    stroke = "none",
    viewBox = "0 0 512 512",
    onClick,
    ...restProps
  } = props;

  let pathData = path;

  if (name) {
    const localPath = getPath(name);
    if (localPath) {
      pathData = localPath;
    }
  }

  if (!pathData) {
    throw new Error("Invalid svg.");
  }

  const svgProps: Props = {};
  svgProps.className = className ? `my-svg ${className}` : `my-svg`;
  svgProps.style = { ...defaultSvgStyles, ...style };
  if (onClick) {
    svgProps.style.cursor = "pointer";
  }
  setProperty(svgProps, "width", width);
  setProperty(svgProps, "height", height);
  setProperty(svgProps, "tabIndex", tabIndex);
  setProperty(svgProps, "role", role);
  setProperty(svgProps, "aria-label", ariaLabel);
  setProperty(svgProps, "aria-hidden", ariaHidden);
  setProperty(svgProps, "focusable", focusable);
  setProperty(svgProps, "preserveAspectRatio", preserveAspectRatio);
  setProperty(svgProps, "onClick", onClick);

  const pathProps = {};
  setProperty(pathProps, "fill", fill);
  setProperty(pathProps, "stroke", stroke);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      {...svgProps}
      {...restProps}
    >
      <g role={role}>
        {Array.isArray(pathData) ? (
          pathData.map((path, index) => (
            <path key={index} d={path.d} fill={path.fill} />
          ))
        ) : (
          <path {...pathProps} d={pathData} />
        )}
      </g>
    </svg>
  );
};

export default Svg;

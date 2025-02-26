import "./styles/resi-status.css";

const ResiStatus = () => {
  return (
    <div className="resi-status">
      <h3>
        Proudly Bangladeshi&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width={24}
          height={24}
          viewBox="0 0 256 256"
          xmlSpace="preserve"
        >
          <defs></defs>
          <g
            style={{
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "none",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <circle
              cx={45}
              cy={45}
              r={45}
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(0,106,78)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="  matrix(1 0 0 1 0 0) "
            />
            <circle
              cx={45}
              cy={45}
              r="19.5"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "rgb(244,42,65)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="  matrix(1 0 0 1 0 0) "
            />
          </g>
        </svg>
      </h3>
      <h3 className="status">
        <i
          className="fa-solid fa-circle"
          style={{ color: "rgb(0, 131, 28)" }}
        />
        &nbsp;Available for work
      </h3>
    </div>
  );
};

export default ResiStatus;

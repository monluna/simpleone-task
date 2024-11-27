const Icon = ({ fill = "#abb1ba" }: { fill?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0785 12.0212C10.052 12.8423 8.75002 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01962 4.01962 1.33333 7.33333 1.33333C10.647 1.33333 13.3333 4.01962 13.3333 7.33333C13.3333 8.74999 12.8424 10.052 12.0213 11.0784L14.4714 13.5285C14.7318 13.7889 14.7318 14.211 14.4714 14.4713C14.2111 14.7317 13.7889 14.7317 13.5286 14.4713L11.0785 12.0212ZM2.66667 7.33333C2.66667 4.756 4.756 2.66667 7.33333 2.66667C9.91066 2.66667 12 4.756 12 7.33333C12 8.5905 11.5029 9.73156 10.6945 10.5707C10.6716 10.5883 10.6496 10.6076 10.6286 10.6285C10.6076 10.6495 10.5883 10.6715 10.5707 10.6945C9.73161 11.5029 8.59053 12 7.33333 12C4.756 12 2.66667 9.91066 2.66667 7.33333Z"
        fill={fill}
      />
    </svg>
  );
};

export default Icon;
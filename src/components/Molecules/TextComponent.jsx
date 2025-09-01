export const Heading = ({ children, ...rest }) => {
  return (
    <p className="text-xl font-bold" {...rest}>
      {children}
    </p>
  );
};

export const Label = ({ children, ...rest }) => {
  return (
    <span className="text-lg font-[400]" {...rest}>
      {children}
    </span>
  );
};

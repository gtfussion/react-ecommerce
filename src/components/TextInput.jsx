export const TextInput = ({ className, ...rest }) => {
  return (
    <input
      className={`p-4 bg-amber-50 rounded-3xl text-black ${className} `}
      {...rest}
    />
  );
};

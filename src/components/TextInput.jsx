export const TextInput = ({ className, ...rest }) => {
  return (
    <input
      className={`p-4 bg-slate-100 rounded-3xl text-black ${className} `}
      {...rest}
    />
  );
};

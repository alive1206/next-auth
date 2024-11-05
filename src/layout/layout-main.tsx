type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return <div className="h-screen ">{children}</div>;
};

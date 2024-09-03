import { env } from "./env";

export const App = () => {
  return (
    <div>
      <div>STRING: {env.STRING}</div>
      <div>NUM: {env.NUM}</div>
      <div>OBJECT: {JSON.stringify(env.OBJ, null, 2)}</div>
    </div>
  );
};

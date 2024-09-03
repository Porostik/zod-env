const transform = (v: string) => {
  if (v === "true") return true;
  if (v === "false") return false;
  return v;
};

export const boolean = {
  transform,
};

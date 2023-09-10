export type Control = {
  type: Type;
  name: string;
  description: string;

}

enum Type{
  potentiometer,
  switch,
  footSwitch,
  slider,
  button
}
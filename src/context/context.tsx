import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

interface IStatesTypes {
  names: string[],
  setNames: Dispatch<SetStateAction<string[]>>
}

export const Context = createContext<IStatesTypes>({} as IStatesTypes);

function ContextComponent({ children }: { children: ReactNode }) {
  const [names, setNames] = useState<string[]>([]);

  return (
    <Context.Provider value={{
      names,
      setNames
    }}>
      {children}
    </Context.Provider>
  )

}

export default ContextComponent;
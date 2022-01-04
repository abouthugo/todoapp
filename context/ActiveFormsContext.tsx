import { createContext, useContext, useState, ReactNode } from "react";

const activeFormsContextDefault: ActiveFormsContextInterface = {
  editNode: null,
  setEditNode: () => {},
};

interface ActiveFormsContextInterface {
  editNode: null | string;
  setEditNode: (s: string) => void;
}

const ActiveFormsContext = createContext<ActiveFormsContextInterface>(
  activeFormsContextDefault
);

export function useActiveForm() {
  return useContext(ActiveFormsContext);
}

export function ActiveFormProvider({ children }: ActiveFormProps) {
  const [editNode, setEditNode] = useState(null);

  const value = {
    editNode,
    setEditNode,
  };

  return (
    <ActiveFormsContext.Provider value={value}>
      {children}
    </ActiveFormsContext.Provider>
  );
}

interface ActiveFormProps {
  children: ReactNode;
}

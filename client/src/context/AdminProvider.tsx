import { createContext,useContext } from "react";
import useAdmin, { adminDefaultValue } from 'hooks/useAdmin';
import { AppProps } from "next/app";

interface IAdmin {
  children: React.ReactNode;
  AdminProps?: AppProps;
}

const AdminContext = createContext(adminDefaultValue);
export const useAdminContext = () =>  useContext(AdminContext);

export default function AdminProvider(props: IAdmin) {
  const value = useAdmin(props.AdminProps);

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
}


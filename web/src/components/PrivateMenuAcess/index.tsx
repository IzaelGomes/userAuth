import  { useEffect, useState } from 'react'
import { userAuth } from '../../context/AuthContext';



interface IPrivateRoleProps {
    role:string
    children: JSX.Element
}

const PrivateMenu = ({role, children}: IPrivateRoleProps) => {
    
    const [permissions, setPermission] = useState([] as string[]);
    const { user } = userAuth();
  
    const roleByPrivateRouter = role?.split(",");
  
    const foundRoles = roleByPrivateRouter?.some((r: String) =>
      user?.roles?.includes(r)
    );

  
  
    useEffect(() => {
      setPermission(foundRoles);
    }, [foundRoles]);


    


  return (
    <>
        {permissions && children }
    </>
  )
}

export default PrivateMenu
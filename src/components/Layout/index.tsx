import { ReactNode } from "react";


type PropsWithChildren = { children?: ReactNode };

const Layout:React.FC<PropsWithChildren> = ({children}) => {

    return(
        <div className="bg-orange-50 px-2 py-3">
            {children}
            </div>
    )
}

export default Layout
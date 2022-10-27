import React, { PropsWithChildren, useMemo, useState } from "react";
import { PrincipalDTO } from "../api";


interface PrincipalContextState {
    principal: PrincipalDTO | undefined,
    setPrincipal: React.Dispatch<React.SetStateAction<PrincipalDTO | undefined>>
}

export const PrincipalContext = React.createContext<PrincipalContextState>({
    principal: undefined,
    setPrincipal: () => { }
});

interface PrincipalContextProviderProps {
}

function PrincipalContextProvider(props: PropsWithChildren<PrincipalContextProviderProps>) {
    const [principal, setPrincipal] = useState<PrincipalDTO>();

    const contextState: PrincipalContextState = useMemo(() => {
        return {
            principal: principal,
            setPrincipal: setPrincipal
        };
    }, [principal, setPrincipal]);


    return (
        <PrincipalContext.Provider value={contextState}>
            {props.children}
        </PrincipalContext.Provider>
    );
}

export default PrincipalContextProvider;
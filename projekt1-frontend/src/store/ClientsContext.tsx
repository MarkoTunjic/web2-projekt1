import React, { PropsWithChildren, useMemo } from "react";
import { CompetitorControllerApi, GameControllerApi, RoundControllerApi } from "../api";

interface ClientsContextState {
    competitorClient: CompetitorControllerApi,
    gameClient: GameControllerApi,
    roundClient: RoundControllerApi
}

const defaultCompetitorClient: CompetitorControllerApi = new CompetitorControllerApi();
const defaultGameClient: GameControllerApi = new GameControllerApi();
const defaultRoundClient: RoundControllerApi = new RoundControllerApi();

export const ClientsContext = React.createContext<ClientsContextState>({
    competitorClient: defaultCompetitorClient,
    gameClient: defaultGameClient,
    roundClient: defaultRoundClient
});

interface ClientsContextProviderProps {
}

function ClientsContextProvider(props: PropsWithChildren<ClientsContextProviderProps>) {

    const contextState: ClientsContextState = useMemo(() => {
        let clients: ClientsContextState = {
            competitorClient: defaultCompetitorClient,
            gameClient: defaultGameClient,
            roundClient: defaultRoundClient
        };

        return clients;
    }, []);

    return (
        <ClientsContext.Provider value={contextState}>
            {props.children}
        </ClientsContext.Provider>
    );
}

export default ClientsContextProvider;
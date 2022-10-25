import React, { PropsWithChildren, useMemo } from "react";
import { CompetitorControllerApi, GameControllerApi, RoundCommentControllerApi, RoundControllerApi } from "../api";

interface ClientsContextState {
    competitorClient: CompetitorControllerApi,
    gameClient: GameControllerApi,
    roundClient: RoundControllerApi,
    roundCommentClient: RoundCommentControllerApi
}

const defaultCompetitorClient: CompetitorControllerApi = new CompetitorControllerApi();
const defaultGameClient: GameControllerApi = new GameControllerApi();
const defaultRoundClient: RoundControllerApi = new RoundControllerApi();
const defaultRoundCommentClient: RoundCommentControllerApi = new RoundCommentControllerApi();

export const ClientsContext = React.createContext<ClientsContextState>({
    competitorClient: defaultCompetitorClient,
    gameClient: defaultGameClient,
    roundClient: defaultRoundClient,
    roundCommentClient: defaultRoundCommentClient
});

interface ClientsContextProviderProps {
}

function ClientsContextProvider(props: PropsWithChildren<ClientsContextProviderProps>) {

    const contextState: ClientsContextState = useMemo(() => {
        let clients: ClientsContextState = {
            competitorClient: defaultCompetitorClient,
            gameClient: defaultGameClient,
            roundClient: defaultRoundClient,
            roundCommentClient: defaultRoundCommentClient
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
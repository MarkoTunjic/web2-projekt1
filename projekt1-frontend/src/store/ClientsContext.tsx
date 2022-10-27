import React, { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import { AuthenticationControllerApi, CompetitorControllerApi, Configuration, GameControllerApi, RoundCommentControllerApi, RoundControllerApi } from "../api";
import { useAuth0 } from "@auth0/auth0-react";
import configData from "../config.json";

interface ClientsContextState {
    competitorClient: CompetitorControllerApi,
    gameClient: GameControllerApi,
    roundClient: RoundControllerApi,
    roundCommentClient: RoundCommentControllerApi,
    authenticationClient: AuthenticationControllerApi
}

const defaultCompetitorClient: CompetitorControllerApi = new CompetitorControllerApi();
const defaultGameClient: GameControllerApi = new GameControllerApi();
const defaultRoundClient: RoundControllerApi = new RoundControllerApi();
const defaultRoundCommentClient: RoundCommentControllerApi = new RoundCommentControllerApi();
const defaultAuthenticationClient: AuthenticationControllerApi = new AuthenticationControllerApi();
export const ClientsContext = React.createContext<ClientsContextState>({
    competitorClient: defaultCompetitorClient,
    gameClient: defaultGameClient,
    roundClient: defaultRoundClient,
    roundCommentClient: defaultRoundCommentClient,
    authenticationClient: defaultAuthenticationClient
});

interface ClientsContextProviderProps {
}

function ClientsContextProvider(props: PropsWithChildren<ClientsContextProviderProps>) {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const getAccessToken = useCallback(async (name?: string | undefined, scopes?: string[] | undefined) => {
        try {
            let token: string = await getAccessTokenSilently({
                audience: configData.audience,
                scope: configData.scope,
            });
            return token;
        } catch (error) {
            return "";
        }
    }, [getAccessTokenSilently, isAuthenticated]);

    const contextState: ClientsContextState = useMemo(() => {
        let clients: ClientsContextState = {
            competitorClient: new CompetitorControllerApi(new Configuration({ accessToken: getAccessToken })),
            gameClient: new GameControllerApi(new Configuration({ accessToken: getAccessToken })),
            roundClient: new RoundControllerApi(new Configuration({ accessToken: getAccessToken })),
            roundCommentClient: new RoundCommentControllerApi(new Configuration({ accessToken: getAccessToken })),
            authenticationClient: new AuthenticationControllerApi(new Configuration({ accessToken: getAccessToken }))
        };

        return clients;
    }, [getAccessToken]);


    return (
        <ClientsContext.Provider value={contextState}>
            {props.children}
        </ClientsContext.Provider>
    );
}

export default ClientsContextProvider;
package hr.fer.web2.projekt1.service;

import hr.fer.web2.projekt1.domain.dto.PrincipalDTO;
import hr.fer.web2.projekt1.domain.models.Principal;

public interface PrincipalService {
    boolean isCurrentUserAdmin();

    Principal getCurrentPrincipal();

    PrincipalDTO loginOrRegister();
}

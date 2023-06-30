package digital.scholars.backend.dao.request;

import lombok.Data;

@Data
public class AccountCreationRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}

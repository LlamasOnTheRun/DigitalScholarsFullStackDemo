package digital.scholars.backend.dao.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}

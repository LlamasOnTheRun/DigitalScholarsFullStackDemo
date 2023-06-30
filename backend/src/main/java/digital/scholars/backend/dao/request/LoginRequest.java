package digital.scholars.backend.dao.request;

import lombok.Data;
import org.springframework.web.bind.annotation.RequestParam;

@Data
public class LoginRequest {
    private String email;
    private String password;
}

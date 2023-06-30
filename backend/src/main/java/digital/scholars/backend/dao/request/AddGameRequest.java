package digital.scholars.backend.dao.request;

import lombok.Data;

@Data
public class AddGameRequest {
    private String email;
    private String gameName;
}

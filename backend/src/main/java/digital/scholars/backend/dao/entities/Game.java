package digital.scholars.backend.dao.entities;


import digital.scholars.backend.dao.request.AccountCreationRequest;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @ManyToOne
    private Account account;
    private String gameName;

    public Game() {
    }

}

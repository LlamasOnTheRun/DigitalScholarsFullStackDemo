package digital.scholars.backend.repo;

import digital.scholars.backend.dao.entities.Account;
import digital.scholars.backend.dao.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {

}
package digital.scholars.backend.repo;

import digital.scholars.backend.dao.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

    Account findByEmail(String email);
    Account findByEmailAndPassword(String email, String password);
}
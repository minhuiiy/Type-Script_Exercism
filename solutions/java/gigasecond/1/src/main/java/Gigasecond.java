import java.time.LocalDate;
import java.time.LocalDateTime;

public class Gigasecond {

    private final LocalDateTime dateTime;
    
    public Gigasecond(LocalDate moment) {
        this(moment.atStartOfDay());
    }

    public Gigasecond(LocalDateTime moment) {
        this.dateTime = moment.plusSeconds(1_000_000_000L);
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }
}

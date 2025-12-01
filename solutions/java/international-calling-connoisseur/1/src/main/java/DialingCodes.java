import java.util.Map;
import java.util.HashMap;

public class DialingCodes {
    private Map<Integer, String> codes = new HashMap<>();
    
    public Map<Integer, String> getCodes() {
        return codes;     
    }

    public void setDialingCode(Integer code, String country) {
        codes.put(code, country);
    }

    public String getCountry(Integer code) {
        return codes.get(code);
    }

    public void addNewDialingCode(Integer code, String country) {
        if(codes.containsKey(code)) {
            return;
        }
        if(codes.containsValue(country)) {
            return;
        }
        codes.put(code, country);
    }

    public Integer findDialingCode(String country) {
        for(Map.Entry<Integer, String> entry : codes.entrySet()) {
            if(entry.getValue().equals(country)) {
                return entry.getKey();
            }
        }
        return null;
    }

    public void updateCountryDialingCode(Integer code, String country) {
       if(country == null || code == null) return;

        Integer oldCode = null;
        for(Map.Entry<Integer, String> entry : codes.entrySet()) {
            if(entry.getValue().equals(country)) {
                oldCode = entry.getKey();
                break;
            }
        }
        if(oldCode == null) return;

        if(codes.containsKey(code) && !codes.equals(oldCode)) {
            return;
        }

        if(!codes.equals(oldCode)) {
            codes.remove(oldCode);
            codes.put(code, country);
        }
    }
}

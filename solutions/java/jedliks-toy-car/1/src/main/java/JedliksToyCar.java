public class JedliksToyCar {
    private int distance = 0;
    private int battery = 100;
    
    public static JedliksToyCar buy() {
        JedliksToyCar myCar = new JedliksToyCar();
        return myCar;
    }

    public String distanceDisplay() {
        return "Driven " + distance + " meters";
    }

    public String batteryDisplay() {
        if(battery == 0) {
            return "Battery empty";
        }
        return "Battery at " + battery + "%";
    }

    public void drive() {
        if(battery > 0) {
           battery -= 1;
            distance += 20;
        } 
        
    }
}

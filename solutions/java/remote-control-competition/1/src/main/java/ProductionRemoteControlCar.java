public class ProductionRemoteControlCar implements RemoteControlCar, Comparable<ProductionRemoteControlCar> {
    private int distanceTravelled = 0;
    private int numberOfVictories;
    
    @Override
    public void drive() {
        distanceTravelled += 10;
    }

    @Override
    public int getDistanceTravelled() {
        return distanceTravelled;
    }

    public int getNumberOfVictories() {
        return numberOfVictories;
    }

    public void setNumberOfVictories(int numberOfVictories) {
        this.numberOfVictories = numberOfVictories;
    }

    @Override
    public int compareTo(ProductionRemoteControlCar other) {
        // Sắp xếp giảm dần theo số chiến thắng
        return Integer.compare(other.numberOfVictories, this.numberOfVictories);
    }
}

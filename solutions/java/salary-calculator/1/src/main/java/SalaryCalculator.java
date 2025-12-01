public class SalaryCalculator {
    public double salaryMultiplier(int daysSkipped) {
        return (daysSkipped >= 5) ? 0.85 : 1.0;
    }

    public int bonusMultiplier(int productsSold) {
        return (productsSold >= 20) ? 13 : 10;
    }

    public double bonusForProductsSold(int productsSold) {
        return productsSold * bonusMultiplier(productsSold);
    }

    public double finalSalary(int daysSkipped, int productsSold) {
        double base = 1000 * salaryMultiplier(daysSkipped);
        double bonus = bonusForProductsSold(productsSold);
        
        int total = (int)(base + bonus);
        return (total > 2000) ? 2000 : total;
    } 
}

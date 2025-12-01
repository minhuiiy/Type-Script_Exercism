class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        int power = String.valueOf(numberToCheck).length();

        int temp = numberToCheck;
        int sum = 0;

        while(temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, power);
            temp /= 10;
        }

        return sum == numberToCheck;

    }

}

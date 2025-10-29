class Darts {
    int score(double xOfDart, double yOfDart) {
        double r2 = xOfDart * xOfDart + yOfDart * yOfDart;

        if(r2 <= 1.0) return 10;
        if(r2 <= 25.0) return 5;
        if(r2 <= 100.0) return 1;
        return 0;
    }
}

public class LogLevels {
    
    public static String message(String logLine) {
        return logLine.split(": ", 2)[1].trim();
    }

    public static String logLevel(String logLine) {
        // Tìm vị trí của dấu [
        int start = logLine.indexOf('[') + 1;

        // Tìm vị trí của dấu ]
        int end = logLine.indexOf(']');

        // Lấy chuỗi giữa hai dấu đó
        String level = logLine.substring(start, end);

        // Chuyển thành chữ thường và trả về
        return level.toLowerCase();
    }

    public static String reformat(String logLine) {
        // Lấy phần message
        String message = logLine.substring(logLine.indexOf("]:") + 2).trim();

        // Lấy phần log level
        String level = logLine.substring(logLine.indexOf("[") + 1, logLine.indexOf("]")).toLowerCase();

        // Trả về chuỗi định dạng lại
        return message + " (" + level + ")";
    }
}

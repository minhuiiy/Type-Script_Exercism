public class LogLine {
    private String logLine;
    
    public LogLine(String logLine) {
        this.logLine = logLine;
    }

    public LogLevel getLogLevel() {
        if (logLine.contains("[TRC]")) {
            return LogLevel.TRACE;
        } else if (logLine.contains("[DBG]")) {
            return LogLevel.DEBUG;
        } else if (logLine.contains("[INF]")) {
            return LogLevel.INFO;
        } else if (logLine.contains("[WRN]")) {
            return LogLevel.WARNING;
        } else if (logLine.contains("[ERR]")) {
            return LogLevel.ERROR;
        } else if (logLine.contains("[FTL]")) {
            return LogLevel.FATAL;
        } else {
            return LogLevel.UNKNOWN; 
        }
    }

    public String getOutputForShortLog() {
        LogLevel level = getLogLevel();
        int code;

        switch(level) {
            case TRACE:
                code = 1;
                break;
            case DEBUG:
                code = 2;
                break;
            case INFO:
                code = 4;
                break;
            case WARNING:
                code = 5;
                break;
            case ERROR:
                code = 6;
                break;
            case FATAL:
                code = 42;
                break;
            default:
                code = 0;
        }

        String message = logLine.substring(logLine.indexOf(":") + 1).trim();

        return code + ":" + message;
    }
}

import fs from 'fs';
import path from 'path';

type LogLevel = 'info' | 'error' | 'debug';

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    message: string;
}

class Logger {
    private static _instance: Logger;
    private logs: LogEntry[] = [];

    private constructor() {}

    private addLog(level: LogLevel, message: string): void {
        const timestamp = new Date().toISOString();
        const entry: LogEntry = { timestamp, level, message };
        this.logs.push(entry);
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
    }

    log(message: string): void {
        this.addLog('info', message);
    }

    error(message: string): void {
        this.addLog('error', message);
    }

    debug(message: string): void {
        this.addLog('debug', message);
    }
    private logFile = process.env.LOG_FILE || 'test-log.json';

    // Call this at the end of the test run
    writeToFile(): void {
        try {
            const filePath = path.join(process.cwd(), this.logFile);
            const dir = path.dirname(filePath);

            // ✅ Ensure directory exists
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Convert each log entry to JSON and separate by newline
            const logData = this.logs
                .map(entry => JSON.stringify(entry))
                .join('\n') + '\n'; // Ensure final newline

            // Append log entries to the file (NDJSON format)
            fs.appendFileSync(filePath, logData, 'utf8');

            console.log(`Appended ${this.logs.length} log entries to ${filePath}`);
        } catch (err) {
            console.error('Failed to write logs to file:', err);
        } finally {
            this.logs = []; // Clear in-memory logs to avoid duplicates
        }
    }
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
}

export default Logger.Instance;

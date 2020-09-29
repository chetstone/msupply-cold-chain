export const BLUETOOTH = {
  UART_SERVICE_UUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
  READ_CHARACTERISTIC_UUID: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
  WRITE_CHARACTERISTIC_UUID: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
  SCAN_MODE_LOW_LATENCY: 2,
};

export const BLUE_MAESTRO = {
  COMMANDS: {
    BLINK: '*blink',
    DOWNLOAD: '*logall',
    INFO: '*info',
    UPDATE_LOG_INTERVAL: '*lint',
    DISABLE_BUTTON: '*bd',
  },
  MANUFACTURER_ID: 307,
  DELIMITER_A: 11776,
  DELIMITER_B: 11308,
  TEMPERATURE_DIVISOR: 10.0,
};

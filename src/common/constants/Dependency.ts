// eslint-disable-next-line no-shadow
export enum DEPENDENCY {
  LOCATOR = 'DependencyLocator',
  BLUETOOTH = 'bluetooth',
  DATABASE = 'database',
  DEVICE = 'device',
  EXPORT_SERVICE = 'exportService',
  FORMAT_SERVICE = 'formatService',
  UTIL_SERVICE = 'utilService',
  DATABASE_UTILS = 'databaseUtils',
  SENSOR_MANAGER = 'sensorManager',
  SETTING_MANAGER = 'settingManager',
  BREACH_CONFIGURATION_MANAGER = 'breachConfigurationManager',
  CHART_MANAGER = 'chartManager',
  BREACH_MANAGER = 'breachManager',
  LOG_TABLE_MANAGER = 'logTableManager',
  DOWNLOAD_MANAGER = 'downloadManager',
  REPORT_MANAGER = 'reportManager',
  PERMISSION_SERVICE = 'permissionService',
  SENSOR_STATUS_MANAGER = 'sensorStatusManager',
  CONSECUTIVE_BREACH_MANAGER = 'consecutiveBreachManager',
  CUMULATIVE_BREACH_MANAGER = 'cumulativeBreachManager',
  ACKNOWLEDGE_BREACH_MANAGER = 'acknowledgeBreachManager',
  LOGGER_SERVICE = 'loggerService',
}

export const BLUETOOTH_SERVICE = {
  MAX_INTERVAL: 20864,
  MIN_INTERVAL: 60,
  DEFAULT_INTERVAL: 300,
  DEFAULT_MANUFACTURER_ID: 307,
  DEFAULT_PASSIVE_DOWNLOAD_DELAY: 10000,
  DEFAULT_TIMER_DELAY: 5000,
};

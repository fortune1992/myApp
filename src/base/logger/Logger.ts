import { OnlineLogger } from '@/base/logger/OnlineLogger';
import { OfflineLogger } from '@/base/logger/OfflineLogger';
import { ILogger } from '@/base/logger/ILogger';
import { isProductionEnv } from '@/util/Enviroment';

export const Logger: ILogger = isProductionEnv() ? new OnlineLogger() : new OfflineLogger();
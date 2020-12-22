import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class FakeService {
  constructor(private loggerService: LoggerService) {}

  getFakeString() {
    this.loggerService.logger('i give you a fake string');
    return 'fakeString';
  }
}

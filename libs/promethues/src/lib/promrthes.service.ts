import { Injectable } from '@nestjs/common';

@Injectable()
export class PrometheusService {
  getMetrics() {
    console.log('hello Prom');
  }
}

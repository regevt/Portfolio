import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MinioModule } from './minio/minio.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilesController } from './files/files.controller.js';
import { FilesService } from './files/files.service.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

export const { ObserveModule, ObserveInstrument } = createObserveModule();
console.log(join(import.meta.dirname, '../../client', 'build'))
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MinioModule,
     ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, FilesController],
  providers: [AppService, FilesService, ConfigService],
})
export class AppModule {}

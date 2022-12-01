import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '@database/database-config.service';

@Module({
  imports: [
    ConfigModule.forRoot(envConfigParam),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

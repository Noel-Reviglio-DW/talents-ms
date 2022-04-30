import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static host: string;
  static port: number;

  constructor( private readonly _configService: ConfigService){
    AppModule.host = this._configService.get("HOST");
    AppModule.port = +this._configService.get("PORT");
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'front-end/build'),
    }),
    AuthModule,ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
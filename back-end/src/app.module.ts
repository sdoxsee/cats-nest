import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // so that we can pull in config
    AuthModule,
    CatsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'front-end/build'),
    }), // so that front-end can be served up by back-end
    MongooseModule.forRoot(process.env.MONGODB_URL), // so that we can use Mongoose
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
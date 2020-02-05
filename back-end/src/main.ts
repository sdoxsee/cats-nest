import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectMongo from 'connect-mongo';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // https://stackoverflow.com/a/39052956/1098564
  const MongoStore = connectMongo(session);

  // Authentication & Session
  app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URL}),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 30 * 60 * 1000, // 1hr
      httpOnly: true,
    }
  }));
  // app.setGlobalPrefix("api")
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet())
  app.use(csurf())
  
  await app.listen(3000);
}
bootstrap();

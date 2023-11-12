/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ExtractsModule } from './modules/extracts/extracts.module';

@Module({
  imports: [UsersModule, ExtractsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

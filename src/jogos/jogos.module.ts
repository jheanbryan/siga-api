import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Module({
  providers: [JogosService]
})
export class JogosModule {}

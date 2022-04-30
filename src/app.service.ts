import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private talents : string[] = ['Talent1','Talent2','Talent3','Talent4'];
  
  getAllTalents(): string[] {
    return this.talents;
  }
  
}

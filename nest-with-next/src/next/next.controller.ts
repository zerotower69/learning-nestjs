import { Controller } from '@nestjs/common';
import { NextService } from './next.service';

@Controller()
export class NextController {
  constructor(private readonly nextService: NextService) {}
}

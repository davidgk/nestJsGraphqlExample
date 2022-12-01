import { DocumentBuilder } from '@nestjs/swagger';

const documentBuilder = new DocumentBuilder()
  .setTitle('Exercise API')
  .setDescription('APIs for Exercise.')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

export default documentBuilder;

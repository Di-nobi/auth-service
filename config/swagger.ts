import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

export function setupSwagger(app: INestApplication): void {
  const configService = app.get(ConfigService);
  const swaggerConfig = new DocumentBuilder()
    .setTitle(configService.get<string>('SWAGGER_API_NAME') || 'Auth Service')
    .setDescription(configService.get<string>('SWAGGER_API_DESCRIPTION') || 'Authentication service')
    .setVersion(configService.get<string>('SWAGGER_API_CURRENT_VERSION') || '1.0')
    .addApiKey({ type: 'apiKey', name: 'X-API-Key', in: 'header' }, 'Api-Key')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(configService.get<string>('SWAGGER_API_ROOT') || 'api', app, document);
}

import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";


export const config = new DocumentBuilder()
    .setTitle('Pokemon Master')
    .setDescription('Manage pokemasters and pokemon')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

export const options: SwaggerDocumentOptions = {
    operationIdFactory: (
        controllerKey: string,
        methodKey: string
    ) => methodKey
};
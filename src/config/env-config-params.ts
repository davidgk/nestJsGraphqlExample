import * as Joi from 'joi';

export const envConfigParam = {
  envFilePath: [`.env.${process.env.NODE_ENV || 'local'}`],
  isGlobal: true,
  cache: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('test', 'local', 'dev', 'prod').required(),
    PORT: Joi.number().required(),
    DB_TYPE: Joi.string().valid('postgres').required(),
    DB_HOST: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_SYNCHRONIZE: Joi.boolean().required(),
    DB_LOGGING: Joi.boolean().required(),
    DB_MIGRATIONS_RUN: Joi.boolean().required(),
    DB_MIGRATIONS: Joi.boolean().required(),
    DB_MIGRATIONS_TABLE: Joi.string().required(),
    DB_LOGGER: Joi.string().required(),
    DB_AUTOLOAD_ENTITIES: Joi.boolean().required(),
    DB_URL: Joi.string().required(),
  }),
};
